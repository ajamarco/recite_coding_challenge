"use client";

import { useQuery } from "@tanstack/react-query";
import MissionCard from "./MissionCard";

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
  const { data, error } = useQuery({
    queryKey: ["missions"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v3/missions").then((res) => res.json()),
    initialData: [],
  });
  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;
  if (data)
    return (
      <>
        <h1 className="text-3xl text-black pb-6 text-center">Missions</h1>
        {renderCards(data)}
      </>
    );
  return null;
}
