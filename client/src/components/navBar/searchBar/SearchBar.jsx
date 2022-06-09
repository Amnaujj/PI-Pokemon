import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from '../../../redux/actions';
import './SearchBar.css';

export default function SearchBar () {

    const [state, setState] = useState('');

    const dispatch = useDispatch();

    return (
        <form onSubmit={(e) => {e.preventDefault(); dispatch(getPokemonByName(state.toLowerCase()))}}>
            <input type="text" placeholder='Search...' onChange={(e) => setState(e.target.value)} className='inp'/>
            <input type="submit" value='Search' className="bt"/>
        </form>
    )
}