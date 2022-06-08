import './App.css';
import { Route } from 'react-router-dom';

import LandingPage from './components/landingPage/LandingPage.jsx';
import Home from './components/home/Home.jsx';
import PokemonDetail from './components/pokemonDetail/PokemonDetail.jsx';


function App() {
	return (
		<div className="App">
		
		<Route exact path='/' component={LandingPage}/>
		<Route exact path='/home' component={Home}/>
		<Route exact path='/pokemonDetail/:id' component={PokemonDetail}/>
		
		</div>
	);
}

export default App;
