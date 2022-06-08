import React from "react";
import './NavBar.css';
import imagen from '../../img/pokelogoPng.png'
import SearchBar from './searchBar/SearchBar.jsx';

export default function NavBar () {
    return(
        <nav className="Nav">
            <img src={imagen} alt="img" />
            <SearchBar/>
        </nav>
    )
}