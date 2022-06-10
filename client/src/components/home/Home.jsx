import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import Gengar from '../../img/Gengar.gif'

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

    const[currentPage, setCurrentPage] = useState(1);

    let poke;
    if(pokemon && typeof pokemon[0] == 'object'){
        poke = pokemon
    } else {
        poke = allPokemons;
        poke = allPokemons?.slice((currentPage * 12) - 12, currentPage * 12);
    }
    const pages = Math.ceil(allPokemons?.length / 12);
    const nextPage = () => {
        if(currentPage < pages ) {
            setCurrentPage(currentPage + 1)
        }
    }
    const lastPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    let arrayPaginado = []
    for (let i = 0; i < pages; i++) {
        arrayPaginado.push(i+1)
    }
    const thisPage = (i) => {
        console.log(i)
        setCurrentPage(i)
    }

    if(!poke){
        return(
            <div className="Home">
                <NavBar/>
                <div>
                    <h1>Cargando ...</h1>
                </div>
                <img src={Gengar} alt="img" className="img"/>
            </div>
        )
    } else {
        return(
            <div className="Home">
                <NavBar/>
                <div>
                    <button onClick={lastPage}>back</button>
                    {arrayPaginado.map((i) => 
                        <button onClick={e => thisPage(i)}>{i}</button>
                    )}
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
