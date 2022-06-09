import {useState} from "react";
import './App.css';
import {pokemonData} from "./assets/data";
import Navigation from './W2/S2/Navigation/Navigation';
import PokemonCard from './W2/S2/PokemonCard/PokemonCard';
function PokemonApp() {
  const [ pokemon, setPokemon ] = useState("Welcome to my pokemon Card")
  const arrOfKey = Object.keys(pokemonData);
  const changingView = ( param )=>{
    if(param === 0){
      setPokemon(<PokemonCard type={arrOfKey[param]} element={pokemonData.fire}/>)
    }else if(param === 1){
      setPokemon(<PokemonCard type={arrOfKey[param]} element={pokemonData.water}/>)
    } else if(param === 2){
      setPokemon(<PokemonCard type={arrOfKey[param]} element={pokemonData.rock}/>)
    } else if(param === 3){
      setPokemon(<PokemonCard type={arrOfKey[param]} element={pokemonData.electric}/>)
    }
  }

  return (
    <div className="App">
      <h1>Pokemon APP</h1>
      <header>
        {
          arrOfKey.map((type, index)=>
            <Navigation 
              pokemonHandler = {changingView}
              type={type}
              idx={index}
            />
          )
        }
      </header>
      {
        pokemon
      }
    </div>
  );
}

export default PokemonApp;
