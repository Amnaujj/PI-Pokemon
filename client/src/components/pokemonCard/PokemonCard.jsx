import { Link } from "react-router-dom";


export default function PokemonCard (props) {

    let i = 0;

    return(
        <Link to={`/pokemonDetail/${props.id}`}>
            <div>
                <h1 className="name">{props.name}</h1>
                <img src={props.img} alt="img" />
                <ul className="types">
                    {props.types.map(type => 
                        <li key={i++}>{type}</li>
                    )}
                </ul>
            </div>
        </Link>
    )
}