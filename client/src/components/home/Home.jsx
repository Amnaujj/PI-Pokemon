import React, { useEffect } from "react";
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

    const pokemons = useSelector((state) => state.pokemons);
    // const pokemon = useSelector((state) => state.pokemon);
    // console.log(pokemons);


    return(
        <div className="Home">
            <NavBar/>
            <div>
                {pokemons && pokemons?.map((pokemon) => 
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