import Header from "./components/Header";
import Listado from "./components/Listado";
import {useState} from "react";

function App() {

  const [spent, setAmount] = useState(0);

  return (
    <div className="App">
      <Header amount={spent} />
      <Listado setAmount={setAmount}/>
    </div>
  );
}

export default App;
