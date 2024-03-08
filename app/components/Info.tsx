"use client";
import { useQuery } from "@tanstack/react-query";

interface infoData {
  summary: string;
  ceo: string;
  coo: string;
  cto: string;
  cto_propulsion: string;
  employees: number;
  founded: number;
  founder: string;
  headquarters: {
    address: string;
    city: string;
    state: string;
  };
  launch_sites: number;
  name: string;
  valuation: number;
  vehicles: number;
}

const renderInfo = (data: infoData) => {
  return (
    <>
      <h1 className="text-3xl text-black pb-6 text-center">{data.name}</h1>
      <p className="text-2xl text-black pb-6">{data.summary}</p>
      <p className="text-2xl text-black pb-6">
        {" "}
        The founder of SpaceX is {data.founder} and it was founded in{" "}
        {data.founded}.
      </p>
      <p className="text-2xl text-black pb-6">
        {" "}
        At the moment, it has over {data.employees} employees.
      </p>
    </>
  );
};

export default function Ship() {
  const { data, error } = useQuery({
    queryKey: ["info"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v3/info").then((res) => res.json()),
    initialData: [],
  });
  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;
  if (data) return renderInfo(data);
  return null;
}
