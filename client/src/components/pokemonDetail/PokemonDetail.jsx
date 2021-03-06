import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import './PokemonDetail.css';
import loadingImage from '../../img/PikachuGIF.gif'

import { deletePokemon, getPokemonDetail, resetDetail } from '../../redux/actions';


export default function PokemonDetail () {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pokemonDetail = useSelector((state) => state.pokemonDetail);

    function handleClick (e) {
        e.preventDefault();
        dispatch(deletePokemon(pokemonDetail.id));
        return(
            alert('Pokemon succesfully deleted'), navigate('/home')
        )
    }

    useEffect(() => {
        dispatch(getPokemonDetail(id))
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
                    <button className='homePokeDetail' onClick={() => dispatch(resetDetail())}>{"< Home"}</button>
                </Link>
                <div className='infoPokeDetail'>
                    <h1 id='namePokeDetail'>{`${pokemonDetail?.name.toUpperCase().charAt(0)}${pokemonDetail?.name.substring(1, pokemonDetail?.name.length)}`}</h1>
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
                {isNaN(pokemonDetail.id) ? <button id='PokeDetailBtnDelete' onClick={(e) => handleClick(e)}>Delete</button> : null}
                <div id='imgContainerPokeDetail'>
                    <img src={pokemonDetail?.img} alt="img" id='imgPokeDetail'/>
                </div>
            </div>
        )
    }
}