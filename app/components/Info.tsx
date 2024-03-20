"use client";

//component that gets the info from the API and displays it

//import the useQuery hook from react-query
import { useQuery } from "@tanstack/react-query";

//create an interface for the data that we will receive from the API
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

//function to render the info from the API
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

export default function Info() {
  //use the useQuery hook to get the data from the API
  const { data, error } = useQuery({
    queryKey: ["info"],
    queryFn: () =>
      fetch("https://api.spacexdata.com/v3/info").then((res) => res.json()),
  });
  if (error)
    return (
      <h1 className="text-3xl text-black pb-6 text-center">
        An error has occurred {error.message}
      </h1>
    );
  if (!data)
    return <h1 className="text-3xl text-black pb-6 text-center">Loading...</h1>;
  if (data) return renderInfo(data);
  return null;
}
