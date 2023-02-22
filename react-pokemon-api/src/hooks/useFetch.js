import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const handleGetDataFetch = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setData([...result, data]);
  };
  useEffect(() => {
    handleGetDataFetch();
  }, []);
  console.log(data);
  return {data,setData}
}
