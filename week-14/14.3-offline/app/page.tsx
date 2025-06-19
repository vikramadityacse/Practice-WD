import axios from "axios"

async function fetchData(){
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return response.data;
}

export default async function Users() {
  const data = await fetchData();
  return (
    <div className="flex justify-center items-center h-screen">
      {data.name} <br />
      {data.email} <br />
    </div>
  );
}