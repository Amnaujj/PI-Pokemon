import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './PokemonDetail.css';
import loadingImage from '../../img/PikachuGIF.gif'

import { getPokemonDetail, resetDetail } from '../../redux/actions';


export default function PokemonDetail () {

    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemonDetail = useSelector((state) => state.pokemonDetail);

    // function typecss (t) {
    //     let type = document.getElementById(t);
    //     console.log(t)
    //     if(type === 'normal') type.id = ''
    // }

    // for (let i = 0; i < pokemonDetail.types.length; i++) {
    //     typecss(pokemonDetail.types[i])
    // }
    
    useEffect(() => {
        dispatch(getPokemonDetail(id))
        dispatch(resetDetail())
    }, [dispatch, id])

    if(!pokemonDetail || !pokemonDetail.name){
        return(
            <div className='pokeDetail'>
                <img src={loadingImage} alt="img" id='loadingGifPokeDetail'/>
            </div>
        )
    } else if (pokemonDetail) {
        return(
            <div className='pokeDetail'>
                <Link to='/home/'>
                    <button className='homePokeDetail'>{"< Home"}</button>
                </Link>
                <div className='infoPokeDetail'>
                    <h1 id='namePokeDetail'>{pokemonDetail?.name}</h1>
                    <h2 id='typeTitlePokeDetail'>types</h2>
                    <div className='typesPokeDetail'>
                        {pokemonDetail.types.map((t) => 
                            <h4  key={t} id={t} className='typeTagPokeDetail'>{t}</h4>
                            )}
                    </div>
                    <h2 id='statsTitlePokeDetail'>statistics</h2>
                    <div className='statsPokeDetail'>
                        <h4 className='h4PokeDetail'>hp: {pokemonDetail?.hp}</h4>
                        <h4 className='h4PokeDetail'>atk: {pokemonDetail?.atk}</h4>
                        <h4 className='h4PokeDetail'>def: {pokemonDetail?.def}</h4>
                        <h4 className='h4PokeDetail'>spd: {pokemonDetail?.spd}</h4>
                        <h4 className='h4PokeDetail'>height: {pokemonDetail?.height}</h4>
                        <h4 className='h4PokeDetail'>weight: {pokemonDetail?.weight}</h4>
                    </div>
                    <h4 id='pokedexPokeDetail'>pokedex: {isNaN(pokemonDetail.id) ? 'created pokemon': pokemonDetail.id}</h4>
                </div>
                <div id='imgContainerPokeDetail'>
                    <img src={pokemonDetail?.img} alt="img" id='imgPokeDetail'/>
                </div>
            </div>
        )
    }
}