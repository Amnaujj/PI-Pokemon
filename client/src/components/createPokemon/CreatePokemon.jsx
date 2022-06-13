import { Link } from 'react-router-dom';
import {useState} from 'react';
import './CreatePokemon.css';
import { nameValidation, hpValidation, atkValidation, defValidation, spdValidation } from './validations.js';

export default function CreatePokemon () {

    const [state, setState] = useState({
        name: '',
        hp: '',
        atk: '',
        def: '',
        spd: '',
        height: '',
        weight: '',
        img: '',
        type: []
    });
    const [errors, setErrors] = useState({});


    function handleChange (e) {
        console.log(e.target.value)
    }
    // NAME
    function handleNameChange (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        // setErrors(nameValidation({
        //     ...state,
        //     [e.target.name]: e.target.value
        // }))
        setErrors({
            ...errors,
            [e.target.name]: nameValidation(e.target.value)
        })
        console.log(errors)
    }
    // HP
    function handleHpChange (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        // setErrors(hpValidation({
        //     ...state,
        //     [e.target.name]: e.target.value
        // }))
        setErrors({
            ...errors,
            [e.target.name]: hpValidation(e.target.value)
        })
        console.log(errors)
    }
    // ATK
    function handleAtkChange (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        // setErrors(atkValidation({
        //     ...state,
        //     [e.target.name]: e.target.value
        // }))
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
        // setErrors(defValidation({
        //     ...state,
        //     [e.target.name]: e.target.value
        // }))
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
        // setErrors(spdValidation({
        //     ...state,
        //     [e.target.name]: e.target.value
        // }))
        setErrors({
            ...errors,
            [e.target.name]: spdValidation(e.target.value)
        })
    }

    function handleSubmit (e) {
        e.preventDefault();
        console.log(state)
        
    }
    //  hp, atk, def, spd, height, weight, img, type
    return(
        <div>
            <Link to='/home'>
                <button>Home</button>
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
                        <input type="text" name='height' onChange={e => handleChange(e)}/>
                        { errors.height ? <span> { errors.height } </span> : null }
                    </div>
                    <div>
                        <label>Weight</label>
                        <input type="text" name='weight' onChange={e => handleChange(e)}/>
                        { errors.weight ? <span> { errors.weight } </span> : null }
                    </div>
                    <div>
                        <label>Image</label>
                        <input type="text" name='img' onChange={e => handleChange(e)}/>
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
                        errors.type === '' ? false : true
                    }/>
                </form>
            </div>
        </div>
    )
}