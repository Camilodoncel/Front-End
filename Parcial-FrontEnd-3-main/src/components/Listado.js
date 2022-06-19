import React from "react";
import Item from "./Item";
import data from "./data.json";
import estilos from "./Listado.module.css";

export default function Listado({ setAmount }) {
  return (
    <div className={estilos.container}>
      {data.map((product) => (
        <Item
          key={product.id}
          product={product}
          setAmount={setAmount}
        ></Item>
      ))}
    </div>
  );
}
