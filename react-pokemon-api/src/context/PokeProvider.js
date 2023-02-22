import { useEffect } from "react";
import { useState } from "react";
import { PokeContext } from "./PokeContext";
const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

export default function PokeProvider({ children }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleGetDataFetch = async(url)=>{
    const response = await fetch(url);
    const result = await response.json();
    const pokemonDataPromises = result.results.map(async(data)=>{
        const response = await fetch(data.url);
        const pokeResult = response.json()
        return pokeResult;
    })
    const finalResult = await Promise.all(pokemonDataPromises)   
    setPokemonData(finalResult);
    setLoading(false)
  }
  useEffect(() => {
    handleGetDataFetch(API_URL)
  }, []);

  return <PokeContext.Provider value={{pokemonData,loading}}>{children}</PokeContext.Provider>;
}
