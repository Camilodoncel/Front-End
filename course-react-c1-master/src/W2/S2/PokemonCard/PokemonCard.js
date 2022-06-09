import Card from "../Card/Card";
const PokemonCard = ({ type, element })=>{

    return (
        <div>
            <h2>Pokemon Card</h2>
            <Card pokemons = {element} type={type}/>
        </div>
    )
}

export default PokemonCard;