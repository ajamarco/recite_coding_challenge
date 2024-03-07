import React from "react";

interface MissionCardProps {
  mission_name: string;
  mission_id: string;
  manufacturers: string[];
  payload_ids: string[];
  wikipedia: string;
  website: string;
  twitter: string;
  description: string;
}

const MissionCard = ({
  mission_name,
  mission_id,
  manufacturers,
  payload_ids,
  wikipedia,
  website,
  twitter,
  description,
}: MissionCardProps) => {
  return (
    <div>
      MissionCard
      <h1>{mission_name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default MissionCard;
