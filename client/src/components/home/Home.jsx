import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';

import { getPokemons, getTypes } from "../../redux/actions";
import NavBar from "../navBar/NavBar";
import PokemonCard from "../pokemonCard/PokemonCard";

export default function Home () {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTypes());
        dispatch(getPokemons());
    },[dispatch])

    const allPokemons = useSelector((state) => state.pokemons);
    const pokemon = useSelector((state) => state.pokemon);

    const[currentPage, setCurrentPage] = useState(0);

    let poke;
    if(pokemon && typeof pokemon[0] == 'object'){
        poke = pokemon
    } else {
        poke = allPokemons;
        poke = allPokemons?.slice(currentPage, currentPage + 12);
    }
    const pages = Math.ceil(allPokemons?.length / 12);
    const nextPage = () => {
        if(currentPage < pages + 1) {
            setCurrentPage(currentPage + 12)
        }
    }
    const lastPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 12)
        }
    }


    if(!poke){
        return(
            <div className="Home">
                <NavBar/>
                <div>
                    <h1>Cargando ...</h1>
                </div>
            </div>
        )
    } else {
        return(
            <div className="Home">
                <NavBar/>
                <div>
                    <button onClick={lastPage}>back</button>
                    <button onClick={nextPage}>next</button>
                </div>
                <div className="poke">
                    {poke && poke?.map((pokemon) => 
                        <PokemonCard
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            types={pokemon.types}
                            img={pokemon.img}
                        />
                    )}
                </div>
            </div>
        )
    }
    }
