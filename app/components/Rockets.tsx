"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Grid from "./Grid";

interface rocketInfo {
  rocket_name: string;
  rocket_id: string;
  wikipedia: string;
  description: string;
  active: boolean;
  flickr_images: string[];
}

const renderCards = (data: rocketInfo[]) => {
  console.log(data);
  return data.map((rocket) => {
    return (
      <div key={rocket.rocket_id}>
        <h2>{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
        <a href={rocket.wikipedia}>Wikipedia</a>
        <p>{rocket.active ? "Active" : "Inactive"}</p>
        <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      </div>
    );
  });
};

export default function Rocket() {
  const [showActive, setShowActive] = useState(false);
  const { data, error } = useQuery({
    queryKey: ["rockets"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v3/rockets").then((res) => res.json()),
    initialData: [],
  });
  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;
  if (data)
    return (
      <>
        <h1 className="text-3xl text-black pb-6 text-center">Rockets</h1>
        <Grid>{renderCards(data)}</Grid>
      </>
    );
  return null;
}
