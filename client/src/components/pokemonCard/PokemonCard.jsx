import { Link } from "react-router-dom";
import './PokemonCard.css'


export default function PokemonCard (props) {

    let i = 0;

    return(
        <Link to={`/pokemonDetail/${props.id}`} style={{ textDecoration: "inherit" }}>
            <div className="card">
                <h1 className="name">{props.name}</h1>
                <img src={props.img} alt="img" className="img"/>
                <div className="types">
                    {props.types.map(type => 
                        <h4 key={i++} className='h4'>{type}</h4>
                    )}
                </div>
            </div>
        </Link>
    )
}