import React from "react";
import './NavBar.css';
import imagen from '../../img/Pokemon-logo.svg'
import SearchBar from './searchBar/SearchBar.jsx';

export default function NavBar () {
    return(
        <nav className="Nav">
            <img src={imagen} alt="img" className="img" />
            <div className='sb'>
                <SearchBar/>
            </div>
        </nav>
    )
}