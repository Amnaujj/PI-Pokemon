import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getPokemon } from '../../../redux/actions';

export default function SearchBar () {

    const [state, setState] = useState('');

    // const dispatch = useDispatch();

    return (
        <form onSubmit={(e) => {e.preventDefault(); }}>
            <input type="text" placeholder='Search...' onChange={(e) => setState(e.target.value)}/>
            <input type="submit" value='Search'/>
        </form>
    )
}
// dispatch(getPokemon(state))