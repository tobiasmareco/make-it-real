import React from "react";

function PokeCardItem({title, stats }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{JSON.stringify(stats[0].name)}</p>
    </div>
  );
}

export default PokeCardItem;
