import React from "react";
import './LandingPage.css';
import { Link } from 'react-router-dom';

export default function LandingPage () {

    return (
        <div className="LandingPage">
            <h1 className="txt">PokeApp</h1>
            <Link to='/home'>
                <button className="pokeball"></button>
            </Link>
        </div>
    )
}