"use client";

import { useQuery } from "@tanstack/react-query";
import MissionCard from "../components/MissionCard";

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

const Missions = () => {
  const loadData = (data: missionInfo[]) => {
    return (
      <div>
        {data.map((mission: missionInfo) => (
          <MissionCard
            key={mission.mission_id}
            {...mission} // Spread the mission object to pass all properties as props
          />
        ))}
      </div>
    );
  };

  const postQuery = useQuery({
    queryKey: ["info"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v3/missions").then((res) => res.json()),
  });

  if (postQuery.isLoading) return <div>Loading...</div>;
  if (postQuery.isError) return <div>Error</div>;
  return loadData(postQuery?.data);
};

export default Missions;
