"use client";

//component that gets the info from the Missions API and displays it

//import the useQuery hook from react-query and the MissionCard component
import { useQuery } from "@tanstack/react-query";
import MissionCard from "./MissionCard";

//create an interface for the data that we will receive from the API
interface missionInfo {
  mission_name: string;
  mission_id: string;
  manufacturers: string[];
  payload_ids: string[];
  wikipedia: string;
  website: string;
  twitter: string;
  description: string;
}

//function to render the info from the API
const renderCards = (data: missionInfo[]) => {
  return data.map((mission) => {
    return (
      <MissionCard
        key={mission.mission_id}
        mission_name={mission.mission_name}
        manufacturers={mission.manufacturers}
        payload_ids={mission.payload_ids}
        wikipedia={mission.wikipedia}
        website={mission.website}
        twitter={mission.twitter}
        description={mission.description}
        mission_id={mission.mission_id}
      />
    );
  });
};

export default function Mission() {
  //use the useQuery hook to get the data from the API
  const { data, error } = useQuery({
    queryKey: ["missions"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v3/missions").then((res) => res.json()),
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
        <h1 className="text-3xl text-black pb-6 text-center">Missions</h1>
        {renderCards(data)}
      </>
    );
  return null;
}
