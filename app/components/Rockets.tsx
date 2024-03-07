"use client";
import { useQuery } from "@tanstack/react-query";

interface rocketInfo {
  rocket_name: string;
  rocket_id: string;
  wikipedia: string;
  description: string;
  active: boolean;
}

const renderCards = (data: rocketInfo[]) => {
  return data.map((rocket) => {
    return (
      <div key={rocket.rocket_id}>
        <h2>{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
        <a href={rocket.wikipedia}>Wikipedia</a>
        <p>{rocket.active ? "Active" : "Inactive"}</p>
      </div>
    );
  });
};

export default function Rocket() {
  const { data, error } = useQuery({
    queryKey: ["rockets"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v3/rockets").then((res) => res.json()),
    initialData: [],
  });
  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;
  if (data) return renderCards(data);
  return null;
}
