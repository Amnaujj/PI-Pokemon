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
        <div>
            <select id='0' defaultValue="name" onChange={e => sortByName(e)}>
                <option value="name" disabled>sort by name</option>
                <option value="a-z">A - Z</option>
                <option value="z-a">Z - A</option>
            </select>
            <select id='1' defaultValue="atk" onChange={e => sortByAtk(e)}>
                <option value="atk" disabled>sort by atk</option>
                <option value="atk+">atk+</option>
                <option value="atk-">atk-</option>
            </select>
            <select id='2' defaultValue="type" onChange={e => sortByType(e)}>
                <option value="type" disabled>sort by type</option>
                {types.map(t => 
                    <option key={t.id} value={t.name}>{t.name}</option>
                )}
            </select>
            <select id='3' defaultValue="poke" onChange={e => selectApiDb(e)}>
                <option value="poke" disabled>select</option>
                <option value="pokemons-creados">created</option>
                <option value="pokemons-existentes">pokeApi</option>
            </select>
            <button onClick={(e) => handleReset(e)} className="btnReset">RESET</button>
        </div>
    )
}