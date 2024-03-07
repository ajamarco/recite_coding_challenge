"use client";
import { useQuery } from "@tanstack/react-query";

interface Info {
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

export default function Home() {
  const loadData = (data: Info) => {
    return (
      <>
        <h1 className="text-3xl text-black pb-6">{data.name}</h1>
        <p className="text-2xl text-black pb-6">{data.summary}</p>
        <p className="text-2xl text-black pb-6">
          {" "}
          The founder of SpaceX is {data.founder} and it was founded in{" "}
          {data.founded}
        </p>
        <p className="text-2xl text-black pb-6">
          {" "}
          At the moment, it has over {data.employees} employees
        </p>
      </>
    );
  };

  const postQuery = useQuery({
    queryKey: ["info"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v3/info").then((res) => res.json()),
  });

  if (postQuery.isLoading) return <div>Loading...</div>;
  if (postQuery.isError) return <div>Error</div>;
  if (postQuery.isSuccess) return loadData(postQuery.data);
  return null;
}
