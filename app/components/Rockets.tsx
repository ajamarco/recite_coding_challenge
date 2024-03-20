"use client";
//component that gets the info from the Rockets API and displays it

//import libraries
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

//import components
import Grid from "./Grid";
import FilterActive from "./FilterActive";
import ImageCard from "./ImageCard";

//import the ship_placeholder image from /public
import rocketPlaceholder from "../../public/rocket_placeholder.jpg";
import Spinner from "./Spinner";

//create an interface for the data that we will receive from the API
interface rocketInfo {
  rocket_name: string;
  rocket_id: string;
  wikipedia: string;
  description: string;
  active: boolean;
  flickr_images: string[];
}

export default function Rocket() {
  //create a state to keep track of whether to show only active rockets or not
  const [showActive, setShowActive] = useState<boolean>(false);

  //function to render the info from the API
  const renderCards = (data: rocketInfo[]) => {
    //check if showActive is true, if it is, filter the data to only show active ships
    if (showActive) {
      data = data.filter((rocket: rocketInfo) => rocket.active);
    }

    //map through the data and create an ImageCard for each rocket
    return data.map((rocket: rocketInfo) => {
      return (
        <ImageCard
          key={rocket.rocket_id}
          objId={rocket.rocket_id}
          name={rocket.rocket_name}
          image={
            rocket.flickr_images.length > 0
              ? rocket.flickr_images[0]
              : rocketPlaceholder.src
          }
          active={rocket.active}
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
    queryKey: ["rockets"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v3/rockets").then((res) => res.json()),
  });
  if (error)
    return (
      <h1 className="text-3xl text-black pb-6 text-center">
        An error has occurred {error.message}
      </h1>
    );
  if (!data)
    return (
      <>
        <Spinner />
        <h1 className="text-3xl text-black pb-6 text-center">Loading...</h1>
      </>
    );
  if (data)
    return (
      <>
        <h1 className="text-3xl text-black pb-6 text-center">Rockets</h1>
        <FilterActive
          showActive={showActive}
          onFilterChange={handleFilterChange}
          obj="Rockets"
        />
        <Grid>{renderCards(data)}</Grid>
      </>
    );
  return null;
}
