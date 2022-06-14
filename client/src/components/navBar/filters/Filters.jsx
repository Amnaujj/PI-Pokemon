import { useDispatch, useSelector } from 'react-redux';
import { getApiDB, getPokemonsByType, reset, setFilterAtk, setFilterName } from '../../../redux/actions';
import './Filters.css';

export default function Filters() {

    const pokemons = useSelector((state) => state.pokemons);
    const types = useSelector((state) => state.types);

    const dispatch = useDispatch();

    function handleReset () {
        dispatch(reset());
        var nameChange = document.getElementById("0");
        nameChange.value = 'name';
        var atkChange = document.getElementById("1");
        atkChange.value = 'atk';
        var typeChange = document.getElementById("2");
        typeChange.value = 'type';
        var pokeChange = document.getElementById("3");
        pokeChange.value = 'poke';
    }

    function sortByName (e) {
        var atkChange = document.getElementById("1");
        atkChange.value = 'atk';
        var typeChange = document.getElementById("2");
        typeChange.value = 'type';
        var pokeChange = document.getElementById("3");
        pokeChange.value = 'poke';
        dispatch(reset())
        dispatch(setFilterName(pokemons, e.target.value))
    }

    function sortByAtk (e) {
        var nameChange = document.getElementById("0");
        nameChange.value = 'name';
        var typeChange = document.getElementById("2");
        typeChange.value = 'type';
        var pokeChange = document.getElementById("3");
        pokeChange.value = 'poke';
        dispatch(reset())
        dispatch(setFilterAtk(pokemons, e.target.value));
    }

    function sortByType (e) {
        var nameChange = document.getElementById("0");
        nameChange.value = 'name';
        var atkChange = document.getElementById("1");
        atkChange.value = 'atk';
        var pokeChange = document.getElementById("3");
        pokeChange.value = 'poke';
        dispatch(reset())
        dispatch(getPokemonsByType(pokemons, e.target.value));
    }

    function selectApiDb (e) {
        var nameChange = document.getElementById("0");
        nameChange.value = 'name';
        var atkChange = document.getElementById("1");
        atkChange.value = 'atk';
        var typeChange = document.getElementById("2");
        typeChange.value = 'type';
        dispatch(reset())
        dispatch(getApiDB(pokemons, e.target.value));
    }

    return(
        <div id='filtersContainer'>
            <select className='filterSelect' id='0' defaultValue="name" onChange={e => sortByName(e)}>
                <option value="name" disabled>Order By...</option>
                <option className='filterOptions' value="a-z">A - Z</option>
                <option className='filterOptions' value="z-a">Z - A</option>
            </select>
            <select className='filterSelect' id='1' defaultValue="atk" onChange={e => sortByAtk(e)}>
                <option value="atk" disabled>Order By...</option>
                <option className='filterOptions' value="atk+">atk+</option>
                <option className='filterOptions' value="atk-">atk-</option>
            </select>
            <select className='filterSelect' id='2' defaultValue="type" onChange={e => sortByType(e)}>
                <option value="type" disabled>Type...</option>
                {types.map(t => 
                    <option className='filterOptions' key={t.id} value={t.name}>{t.name}</option>
                )}
            </select>
            <select className='filterSelect' id='3' defaultValue="poke" onChange={e => selectApiDb(e)}>
                <option value="poke" disabled>Select...</option>
                <option className='filterOptions' value="pokemons-creados">created</option>
                <option className='filterOptions' value="pokemons-existentes">pokeApi</option>
            </select>
            <button onClick={(e) => handleReset(e)} className="filterBtnReset">RESET</button>
        </div>
    )
}