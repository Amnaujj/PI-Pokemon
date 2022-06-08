import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { getPokemonDetail } from '../../redux/actions';



export default function PokemonDetail () {

    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemonDetail(id))
    })
    const pokemonDetail = useSelector((state) => state.pokemonDetail)

    return(
        <div>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <div>
                <h1>{pokemonDetail?.name}</h1>
                <div>
                    <h2>hp: {pokemonDetail?.hp}</h2>
                    <h2>atk: {pokemonDetail?.atk}</h2>
                    <h2>def: {pokemonDetail?.def}</h2>
                    <h2>spd: {pokemonDetail?.spd}</h2>
                    <h2>height: {pokemonDetail?.height}</h2>
                    <h2>weight: {pokemonDetail?.weight}</h2>
                    <h2>pokedex: {pokemonDetail?.id}</h2>
                </div>
            </div>
            <img src={pokemonDetail?.img} alt="img" />
        </div>
    )
}