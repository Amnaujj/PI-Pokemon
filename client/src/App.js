import './App.css';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './components/landingPage/LandingPage.jsx';
import Home from './components/home/Home.jsx';
import PokemonDetail from './components/pokemonDetail/PokemonDetail.jsx';
import CreatePokemon from './components/createPokemon/CreatePokemon.jsx';


function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path='/' element={<LandingPage/>}/>
				<Route exact path='/home' element={<Home/>}/>
				<Route exact path='/pokemonDetail/:id' element={<PokemonDetail/>}/>
				<Route exact path='/createPokemon' element={<CreatePokemon/>}/>
			</Routes>
		</div>
	);
}

export default App;
