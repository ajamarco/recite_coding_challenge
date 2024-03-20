"use client";
//component that gets the info from the Ships API and displays it

//import libraries
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

//import components
import Grid from "./Grid";
import ImageCard from "./ImageCard";
import FilterActive from "./FilterActive";

//import the ship_placeholder image from /public
import shipPlaceholder from "../../public/ship_placeholder.jpg";

//create an interface for the data that we will receive from the API
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

  //function to render the info from the API
  const renderCards = (data: shipInfo[]) => {
    //check if showActive is true, if it is, filter the data to only show active ships
    if (showActive) {
      data = data.filter((ship: shipInfo) => ship.active);
    }
    return data.map((ship: shipInfo) => {
      return (
        <ImageCard
          key={ship.ship_id}
          objId={ship.ship_id}
          name={ship.ship_name}
          image={ship.image ? ship.image : shipPlaceholder.src}
          active={ship.active}
        />
      );
    });
  };

  //function to handle the change of the radio button
  const handleFilterChange = (showActiveOnly: boolean) => {
    setShowActive(showActiveOnly);
  };

  //use the useQuery hook to get the data from the API
  const { data, error } = useQuery({
    queryKey: ["ships"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v3/ships").then((res) => res.json()),
  });
  if (error)
    return (
      <h1 className="text-3xl text-black pb-6 text-center">
        An error has occurred {error.message}
      </h1>
    );
  if (!data)
    return <h1 className="text-3xl text-black pb-6 text-center">Loading...</h1>;
  if (data)
    return (
      <>
        <h1 className="text-3xl text-black pb-6 text-center">Ships</h1>
        <FilterActive
          showActive={showActive}
          onFilterChange={handleFilterChange}
          obj="Ships"
        />
        <Grid>{renderCards(data)}</Grid>
      </>
    );
  return null;
}
