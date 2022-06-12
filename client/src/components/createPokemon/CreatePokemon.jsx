import { Link } from 'react-router-dom';
import {useState} from 'react';
import './CreatePokemon.css';

export default function CreatePokemon () {

    const [state, setState] = useState({});
    const [errors, setErrors] = useState({});

    function formValidation (input) {
        let errors = {};
        if(!input.name) errors.name = 'Every pokemon must have a name'
        if(!input.hp) errors.hp = 'Every pokemon must have heal points'
        if(!input.atk) errors.atk = 'Every pokemon must have atack'
        if(!input.def) errors.def = 'Every pokemon must have defense'
        if(!input.spd) errors.spd = 'Every pokemon must have speed'
        if(!input.height) errors.height = 'Every pokemon must have a height'
        if(!input.weight) errors.weight = 'Every pokemon must have a weight'
        if(!input.img) errors.img = 'Every pokemon must have a img'
        return errors
    }

    function handleChange (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors(formValidation({
            ...state,
            [e.target.name]: e.target.value
        }))
        console.log(state)
    }

    function handleSubmit (e) {
        console.log(e)
    }
    //  hp, atk, def, spd, height, weight, img, type
    return(
        <div>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <h1>Crear Pokemon</h1>
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <label>Name</label>
                    <input type="text" name='name' onChange={e => handleChange(e)}/>
                    { errors.name ? <span> { errors.name } </span> : null }
                    <label>Health Points</label>
                    <input type="text" name='hp' onChange={e => handleChange(e)}/>
                    <label>Atack</label>
                    <input type="text" name='atk' onChange={e => handleChange(e)}/>
                    <label>Defense</label>
                    <input type="text" name='def' onChange={e => handleChange(e)}/>
                    <label>Speed</label>
                    <input type="text" name='spd' onChange={e => handleChange(e)}/>
                    <label>Height</label>
                    <input type="text" name='height' onChange={e => handleChange(e)}/>
                    <label>Weight</label>
                    <input type="text" name='weight' onChange={e => handleChange(e)}/>
                    <label>Image</label>
                    <input type="text" name='img' onChange={e => handleChange(e)}/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}