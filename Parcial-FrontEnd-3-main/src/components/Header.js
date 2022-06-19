import React from "react";
import estilos from "./Header.module.css";

export default function Header({ amount }) {
  return (
    <header className={estilos.header}>
      <h1 className={estilos.titulo}>Carrito de compras</h1>
      <p>
        cantidad de productos{" "}
        <span className={estilos.description}>{amount}</span>
      </p>
    </header>
  );
}
