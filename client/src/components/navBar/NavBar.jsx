import React from "react";
import './NavBar.css';
import imagen from '../../img/Pokemon-logo.svg'
import SearchBar from './searchBar/SearchBar.jsx';
import { useDispatch } from "react-redux";
import { reset } from "../../redux/actions";

export default function NavBar () {

    const dispatch = useDispatch();

    function handleReset () {
        dispatch(reset())
    }

    return(
        <nav className="Nav">
            <img src={imagen} alt="img" className="img" />
            <button onClick={(e) => handleReset(e)}>RESET</button>
            <div className='sb'>
                <SearchBar/>
            </div>
        </nav>
    )
}