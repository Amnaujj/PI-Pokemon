import React from "react";
import './NavBar.css';
import imagen from '../../img/Pokemon-logo.svg'
import SearchBar from './searchBar/SearchBar.jsx';
import { Link } from "react-router-dom";
import Filters from "./filters/Filters";

export default function NavBar () {


    return(
        <nav className="Nav">
            <Link to='/' id="navImgDiv">
                <img src={imagen} alt="img" id="navImg"/>
            </Link>
            <Link to='/createPokemon'>
                <button className="navBtnCreate">Create Pokemon</button>
            </Link>
            <Filters/>
            <div className='sb'>
                <SearchBar/>
            </div>
        </nav>
    )
}