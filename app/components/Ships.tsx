"use client";
import { useQuery } from "@tanstack/react-query";

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

const renderCards = (data: any[]) => {
  console.log(data);
  return data.map((ship: shipInfo) => {
    return (
      <div key={ship.ship_id}>
        <h2>{ship.ship_name}</h2>
        <p>{ship.ship_model}</p>
        <p>{ship.active ? "Active" : "Inactive"}</p>
        <p>{ship.home_port}</p>
        <p>{ship.status}</p>
        <img src={ship.image} alt={ship.ship_name} />
      </div>
    );
  });
};

export default function Ship() {
  const { data, error } = useQuery({
    queryKey: ["ships"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v3/ships").then((res) => res.json()),
    initialData: [],
  });
  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;
  if (data) return renderCards(data);
  return null;
}
