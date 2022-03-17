import logo from './logo.svg';
import {add} from './helpers.js'



import Pokedex from './Pokedex.js'
import Pokemon from './pokemon.js'
import Pokecard from './Pokecard.js'
import './App.css';
import './Pokedex.css'
import './Pokecard.css'

function App() {
  console.log(add(2,4))
  console.log(Pokemon)
  console.log(Pokecard)
  return (
    
    <div className="App">


     <Pokedex Pokemon = {Pokemon}/>
    </div>
  );
}

export default App;
