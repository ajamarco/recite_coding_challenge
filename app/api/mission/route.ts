export const GET = async (req: any, res: any) => {
  try {
    //get data from 'https://api.spacexdata.com/v3/info'
    const response = await fetch("https://api.spacexdata.com/v3/info");
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (e: any) {
    return new Response("failed to get prompts", { status: 500 });
  }
};
