import React from "react";
import './NavBar.css';
import imagen from '../../img/Pokemon-logo.svg'
import SearchBar from './searchBar/SearchBar.jsx';
// import { useDispatch } from "react-redux";
// import { reset } from "../../redux/actions";
import { Link } from "react-router-dom";
import Filters from "./filters/Filters";

export default function NavBar () {


    return(
        <nav className="Nav">
            <img src={imagen} alt="img" className="img" />
            <Link to='/createPokemon'>
                <button className="btnCreate">Create Pokemon</button>
            </Link>
            <Filters/>
            <div className='sb'>
                <SearchBar/>
            </div>
        </nav>
    )
}