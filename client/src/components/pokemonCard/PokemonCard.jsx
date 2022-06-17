import { Link } from "react-router-dom";
import './PokemonCard.css'


export default function PokemonCard (props) {

    let i = 0;

    return(
        <Link to={`/pokemonDetail/${props.id}`} style={{ textDecoration: "inherit" }}>
            <div className="cardPokeCard">
                <h1 className="namePokeCard">{`${props.name.toUpperCase().charAt(0)}${props.name.substring(1, props.name.length)}`}</h1>
                <div id="imgContainerPokemonCard">
                    <img src={props.img} alt="img" className="imgPokeCard"/>
                </div>
                <div className="typesPokeCard">
                    {props.types.map(type => 
                        <h4 key={i++} id={type} className='h4PokeCard'>{type}</h4>
                    )}
                </div>
            </div>
        </Link>
    )
}