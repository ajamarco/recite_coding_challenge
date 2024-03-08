"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Grid from "./Grid";

interface shipInfo {
  ship_id: string;
  ship_name: string;
  ship_model: string;
  ship_type: string;
  roles: string[];
  active: boolean;
  imo: number;
  mmsi: number;
  abs: number;
  class: number;
  weight_lbs: number;
  weight_kg: number;
  year_built: number;
  home_port: string;
  status: string;
  speed_kn: number;
  course_deg: number;
  position: {
    latitude: number;
    longitude: number;
  };
  successful_landings: number;
  attempted_landings: number;
  missions: {
    name: string;
    flight: number;
  }[];
  url: string;
  image: string;
}

export default function Ship() {
  //create a state to keep track of whether to show only active ships or not
  const [showActive, setShowActive] = useState(false);

  const renderCards = (data: shipInfo[]) => {
    console.log(data);
    //check if showActive is true, if it is, filter the data to only show active ships
    if (showActive) {
      data = data.filter((ship: shipInfo) => ship.active);
    }
    return data.map((ship: shipInfo) => {
      return (
        <div key={ship.ship_id}>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <img
              className="rounded-t-lg"
              src={ship.image}
              alt={ship.ship_name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                {ship.ship_name}
              </h5>
              <p className="mb-4 text-base">
                Is ship active: {ship.active ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  const { data, error } = useQuery({
    queryKey: ["ships"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v3/ships").then((res) => res.json()),
    initialData: [],
  });
  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;
  if (data) return <Grid>{renderCards(data)}</Grid>;
  return null;
}
