import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Pokedex from './Components/Pokedex'
import Pokemon from './Components/Pokemon'
import Randompokemon from './Components/Randompokemon'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let [pokemon,setPokemon] = useState("")

  return (
    <>
    <BrowserRouter>
      <nav>
        <Link to='/'>Pokedex</Link>
        <Link to='/randompokemon'>Random</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Pokedex  setPokemon={setPokemon} />}/>
        <Route path='randompokemon' element={<Randompokemon/>} />
        <Route path="pokemon" element={<Pokemon pokemon={pokemon} />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
