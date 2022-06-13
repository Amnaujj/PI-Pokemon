import {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nameValidation, hpValidation, atkValidation, defValidation, spdValidation, heightValidation, weightValidation, typeValidation, imgValidation } from './validations.js';
import { getTypes, postPokemon } from '../../redux/actions';
import './CreatePokemon.css';

export default function CreatePokemon () {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allTypes = useSelector((state) => state.types);
    const allPokemons = useSelector((state) => state.pokemons);

    useEffect(() => {
        dispatch(getTypes())
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
        if(!pokeName){
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
        <div>
            <Link to='/home'>
                <button>{"< Home"}</button>
            </Link>
            <h1>Crear Pokemon</h1>
            <div>
                <form onSubmit= {(e) => handleSubmit(e)}>
                    <div>
                        <label>Name</label>
                        <input type="text" name='name' onChange={e => handleNameChange(e)}/>
                        { errors.name ? <span> { errors.name } </span> : null }
                    </div>
                    <div>
                        <label>Health Points</label>
                        <input type="text" name='hp' onChange={e => handleHpChange(e)}/>
                        { errors.hp ? <span> { errors.hp } </span> : null }
                    </div>
                    <div>
                        <label>Atack</label>
                        <input type="text" name='atk' onChange={e => handleAtkChange(e)}/>
                        { errors.atk ? <span> { errors.atk } </span> : null }
                    </div>
                    <div>
                        <label>Defense</label>
                        <input type="text" name='def' onChange={e => handleDefChange(e)}/>
                        { errors.def ? <span> { errors.def } </span> : null }
                    </div>
                    <div>
                        <label>Speed</label>
                        <input type="text" name='spd' onChange={e => handleSpdChange(e)}/>
                        { errors.spd ? <span> { errors.spd } </span> : null }
                    </div>
                    <div>
                        <label>Height</label>
                        <input type="text" name='height' onChange={e => handleHChange(e)}/>
                        { errors.height ? <span> { errors.height } </span> : null }
                    </div>
                    <div>
                        <label>Weight</label>
                        <input type="text" name='weight' onChange={e => handleWChange(e)}/>
                        { errors.weight ? <span> { errors.weight } </span> : null }
                    </div>
                    <div>
                        <label>Types</label>
                        <select name="types" defaultValue="types" onChange={e => handleTypeChange(e)}>
                            <option value="types" disabled>select types</option>
                            {allTypes?.map((t) => 
                                <option value={t.id} key={t.id}>{t.name}</option>
                            )}
                        </select>
                        <div>
                            {state.types.map((t) => 
                                <p key={t}>
                                    {allTypes.find(ty => ty.id === t).name}
                                    <button onClick={() => handleTypeDelete(t)}>x</button>
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label>Image</label>
                        <input type="text" name='img' onChange={e => handleImgChange(e)}/>
                        { errors.img ? <span> { errors.img } </span> : null }
                    </div>
                    <input type="submit" name='submit' disabled = {
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
            </div>
        </div>
    )
}