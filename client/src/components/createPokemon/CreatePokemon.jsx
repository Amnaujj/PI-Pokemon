import {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nameValidation, hpValidation, atkValidation, defValidation, spdValidation, heightValidation, weightValidation, typeValidation, imgValidation } from './validations.js';
import { getTypes, postPokemon, reset } from '../../redux/actions';
import './CreatePokemon.css';

export default function CreatePokemon () {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allTypes = useSelector((state) => state.types);
    const allPokemons = useSelector((state) => state.pokemons2);

    useEffect(() => {
        dispatch(getTypes())
        dispatch(reset())
    },[dispatch])

    const [state, setState] = useState({
        name: '',
        hp: '',
        atk: '',
        def: '',
        spd: '',
        height: '',
        weight: '',
        img: '',
        types: []
    });
    const [errors, setErrors] = useState({});

    // NAME
    function handleNameChange (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors({
            ...errors,
            [e.target.name]: nameValidation(e.target.value)
        })
    }
    // HP
    function handleHpChange (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors({
            ...errors,
            [e.target.name]: hpValidation(e.target.value)
        })
    }
    // ATK
    function handleAtkChange (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors({
            ...errors,
            [e.target.name]: atkValidation(e.target.value)
        })
    }
    // DEF
    function handleDefChange (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors({
            ...errors,
            [e.target.name]: defValidation(e.target.value)
        })
    }
    // SPD
    function handleSpdChange (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors({
            ...errors,
            [e.target.name]: spdValidation(e.target.value)
        })
    }
    // HEIGHT
    function handleHChange (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors({
            ...errors,
            [e.target.name]: heightValidation(e.target.value)
        })
    }
    // WEIGHT
    function handleWChange (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors({
            ...errors,
            [e.target.name]: weightValidation(e.target.value)
        })
    }
    // TYPES
    function handleTypeChange (e) {
        let chosenTypes = state.types.find(t => t === e.target.value)
        if(chosenTypes){
            setErrors({
                ...errors,
                [e.target.name]: typeValidation('repeted')
            })
        } else if (state.types.length > 1){
            setErrors({
                ...errors,
                [e.target.name]: typeValidation('max2')
            })
        } else {
            setState({
                ...state,
                [e.target.name]: [...state.types, e.target.value]
            })
            setErrors({
                ...errors,
                [e.target.name]: typeValidation(e.target.value)
            })
        }
    }
    function handleTypeDelete(e) {
        setState({
            ...state,
            types: state.types.filter((t) => t !== e),
        });
    };
    // IMG
    function handleImgChange (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors({
            ...errors,
            [e.target.name]: imgValidation(e.target.value)
        })
    }

    function handleSubmit (e) {
        e.preventDefault();
        const pokeName = allPokemons.filter(p => p.name === state.name.toLocaleLowerCase());
        if(pokeName && pokeName.length > 0){
            return alert('Ya existe un pokemon con este nombre');
        } else {
            const newPokemon = {
                name: state.name,
                hp: state.hp,
                atk: state.atk,
                def: state.def,
                spd: state.spd,
                height: state.height,
                weight: state.weight,
                img: state.img,
                types: state.types
            }
            dispatch(postPokemon(newPokemon));
        }
        setState({
            name: '',
            hp: '',
            atk: '',
            def: '',
            spd: '',
            height: '',
            weight: '',
            img: '',
            types: []
        });
        return(
            alert('Pokemon succesfully created'), navigate('/home')
        )
    }

    return(
        <div id='createPokemonContainer'>
            <Link to='/home'>
                <button id='createPokemonhomeBtn'>{"< Home"}</button>
            </Link>
            <div id='createPokemonformContainer'>
                <h1 id='createPokemonFormTitle'>Create your Pokemon!</h1>
                <div id='createPokemonLabels'>
                    <h2 className='createPokemonLabelH2'>Choose a Name</h2>
                    <h2 className='createPokemonLabelH2'>Health Points</h2>
                    <h2 className='createPokemonLabelH2'>Atack</h2>
                    <h2 className='createPokemonLabelH2'>Defense</h2>
                    <h2 className='createPokemonLabelH2'>Speed</h2>
                    <h2 className='createPokemonLabelH2'>Height</h2>
                    <h2 className='createPokemonLabelH2'>Weight</h2>
                    <h2 className='createPokemonLabelH2'>Types</h2>
                    <h2 className='createPokemonLabelH2'>Image</h2>
                </div>
                <form id='createPokemonForm' onSubmit= {(e) => handleSubmit(e)}>
                    <div className='createPokemonInputContainer'>
                        <input className='createPokemonInput' type="text" name='name' onChange={e => handleNameChange(e)}/>
                    </div>
                    <div className='createPokemonInputContainer'>
                        <input className='createPokemonInput' type="text" name='hp' onChange={e => handleHpChange(e)}/>
                    </div>
                    <div className='createPokemonInputContainer'>
                        <input className='createPokemonInput' type="text" name='atk' onChange={e => handleAtkChange(e)}/>
                    </div>
                    <div className='createPokemonInputContainer'>
                        <input className='createPokemonInput' type="text" name='def' onChange={e => handleDefChange(e)}/>
                    </div>
                    <div className='createPokemonInputContainer'>
                        <input className='createPokemonInput' type="text" name='spd' onChange={e => handleSpdChange(e)}/>
                    </div>
                    <div className='createPokemonInputContainer'>
                        <input className='createPokemonInput' type="text" name='height' onChange={e => handleHChange(e)}/>
                    </div>
                    <div className='createPokemonInputContainer'>
                        <input className='createPokemonInput' type="text" name='weight' onChange={e => handleWChange(e)}/>
                    </div>
                    <div className='createPokemonInputContainer'>
                        <select id='createPokemonSelectType' name="types" defaultValue="types" onChange={e => handleTypeChange(e)}>
                            <option value="types" disabled>select types</option>
                            {allTypes?.map((t) => 
                                <option value={t.id} key={t.id}>{t.name}</option>
                            )}
                        </select>
                    </div>
                    <div className='createPokemonInputContainer'>
                        <input className='createPokemonInput' type="text" name='img' onChange={e => handleImgChange(e)}/>
                    </div>
                    <input id='createPokemonInputCreateBtn' type="submit" name='submit' value='Create' disabled = {
                        errors.name === '' &&
                        errors.hp === '' &&
                        errors.atk === '' &&
                        errors.def === '' &&
                        errors.spd === '' &&
                        errors.height === '' &&
                        errors.weight === '' &&
                        errors.img === '' &&
                        errors.types === '' ? false : true
                    }/>
                </form>
                <div id='createPokemonFormErrors'>
                    <div className='createPokemonDivError'>
                        { errors.name ? <span> { errors.name } </span> : null }
                    </div>
                    <div className='createPokemonDivError'>
                        { errors.hp ? <span> { errors.hp } </span> : null }
                    </div>
                    <div className='createPokemonDivError'>
                        { errors.atk ? <span> { errors.atk } </span> : null }
                    </div>
                    <div className='createPokemonDivError'>
                        { errors.def ? <span> { errors.def } </span> : null }
                    </div>
                    <div className='createPokemonDivError'>
                        { errors.spd ? <span> { errors.spd } </span> : null }
                    </div>
                    <div className='createPokemonDivError'>
                        { errors.height ? <span> { errors.height } </span> : null }
                    </div>
                    <div className='createPokemonDivError'>
                        { errors.weight ? <span> { errors.weight } </span> : null }
                    </div>
                    <div className='createPokemonDivError'>
                        {state.types.map((t) => 
                            <p id={allTypes.find(ty => ty.id === t).name} className='createPokemonSelectedType' key={t}>
                                {allTypes.find(ty => ty.id === t).name}
                                <button className='createPokemonSelectedTypeBtn' onClick={() => handleTypeDelete(t)}>x</button>
                            </p>
                        )}
                    </div>
                    <div className='createPokemonDivError'>
                        { errors.img ? <span> { errors.img } </span> : null }
                    </div>
                </div>
            </div>
        </div>
    )
}