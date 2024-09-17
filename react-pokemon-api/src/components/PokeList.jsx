import React, { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import PokeCardItem from "./PokeCardItem";

function PokeList() {
  const { pokemonData, loading } = useContext(PokeContext);
  console.log(pokemonData);
  return (
    <>
      {loading ? (
        <>
          {" "}
          <h1>Lading...</h1>
        </>
      ) : (
        <>
          {pokemonData.map((poke) => {
            return <PokeCardItem id={poke.id} title={poke.name} stats={poke.stats} key={poke.id}/>
          })}
        </>
      )}
    </>
  );
}

export default PokeList;
