import { useState } from "react";
import estilos from "./Item.module.css";

export default function Item({ product, setAmount }) {
  const [stock, setStock] = useState([product.stock]);

  const handlerStock = () => {
    if (stock > 0) {
      setStock((prevState) => prevState - 1);
      setAmount((prevState) => prevState + 1);
    }
  };

  return (
    <div className={estilos.product}>
      <h3 className={estilos.title}>{product.product.nombre}</h3>
      <p>{product.product.description}</p>
      <h5>
        En stock:{" "}
        {stock === 0 ? <span className={estilos.spent}>Agotado</span> : stock}{" "}
      </h5>
      <button
        className={stock > 0 ? estilos.btn : estilos.disabled}
        onClick={() => handlerStock()}
      >
        {stock > 0 ? "Comprar" : "Sin stock"}
      </button>
    </div>
  );
}
