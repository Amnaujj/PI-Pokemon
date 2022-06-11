import { Link } from 'react-router-dom';
import './CreatePokemon.css';

export default function CreatePokemon () {
    return(
        <div>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <h1>Crear Pokemon</h1>
            <div>
                <form action="">
                    <input type="text" />
                </form>
            </div>
        </div>
    )
}