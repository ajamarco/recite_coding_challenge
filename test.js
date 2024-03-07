async function test() {
  const url = "https://api.spacexdata.com/v3/dragons";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

test();
