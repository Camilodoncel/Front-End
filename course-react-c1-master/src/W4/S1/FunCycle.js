import { useState, useEffect } from "react";

const FunCycle = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    const request = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const result = await response.json();
      setData(result);
    };
    request();
  }, [id]);

  const incrementId = (arg) => {
    if (arg === "prev") {
      setId((prevState) => prevState - 1);
    } else if (arg === "next") {
      setId((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <img
        src={data.image}
        alt={data.name}
        style={{ width: "200px", height: "200px" }}
      />
      <p>Name: {data.name}</p>
      <div>
        <button onClick={() => incrementId("prev")}>Prev</button>
        <button onClick={() => incrementId("next")}>Next</button>
      </div>
    </div>
  );
};

export default FunCycle;
