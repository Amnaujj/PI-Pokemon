import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import loadingGengar from '../../img/Gengar.gif';
import loadingBar from '../../img/Loading2GIF.gif';

import { getPokemons, getTypes, pageEdit } from "../../redux/actions";
import NavBar from "../navBar/NavBar";
import PokemonCard from "../pokemonCard/PokemonCard";

export default function Home () {

    const dispatch = useDispatch();

    const allPokemons = useSelector((state) => state.pokemons);
    const pokemon = useSelector((state) => state.pokemon);
    const page = useSelector((state) => state.page);
    
    // PAGINADO
    let poke;
    let pages;
    if(pokemon && typeof pokemon[0] == 'object'){
        poke = pokemon
    } else {
        poke = allPokemons?.slice((page * 12) - 12, page * 12);
        pages = Math.ceil(allPokemons?.length / 12);
    }
    const nextPage = () => {
        if(page < pages ) {
            dispatch(pageEdit(page + 1))
        }
    }
    const lastPage = () => {
        if (page > 1) {
            dispatch(pageEdit(page - 1))
        }
    }
    let arrayPaginado = []
    for (let i = 0; i < pages; i++) {
        arrayPaginado.push(i+1)
    }
    const thisPage = (i) => {
        dispatch(pageEdit(i))
    }

    useEffect(() => {
        if(allPokemons && allPokemons.length < 1) {
            dispatch(getTypes());
            dispatch(getPokemons());
        }
    },[dispatch, allPokemons])

    if(!poke || poke.length < 1){
        return(
            <div className="Home" id="homeLoading">
                <img src={loadingGengar} alt="img" className="imgHome"/>
                <img src={loadingBar} alt="img" id="loadingBarGifHome"/>
            </div>
        )
    } else {
        return(
            <div className="Home">
                <NavBar/>
                <div id="paginadoHome">
                    <button className="btnNextPaginadoHome" onClick={lastPage}>{"<"}</button>
                    {arrayPaginado.map((i) => 
                        <button className="btnPaginadoHome" key={i} onClick={() => thisPage(i)}>{i}</button>
                    )}
                    <button className="btnNextPaginadoHome" onClick={nextPage}>{">"}</button>
                </div>
                <div className="pokeHome">
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