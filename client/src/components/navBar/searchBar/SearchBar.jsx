import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, reset } from '../../../redux/actions';
import './SearchBar.css';

export default function SearchBar () {

    const [state, setState] = useState('');

    const dispatch = useDispatch();

    function handleChange (e) {
        setState(e.target.value)
    }
    function handleSubmit (e) {
        e.preventDefault();
        dispatch(reset())
        dispatch(getPokemonByName(state.toLowerCase()));
        var holderChange = document.getElementById("i1");
        holderChange.value = '';
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input id="i1" type="text" placeholder='Search...' onChange={(e) => handleChange(e)} className='inp'/>
            <input type="submit" value='Search' className="bt"/>
        </form>
    )
}