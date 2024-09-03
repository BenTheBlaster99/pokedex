import React, { useRef } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Pokecard from './Pokecard';
import "./pokedex.css"
function Pokedex({setPokemon}) {
    let [ previous, setPrevious] = useState('');
    let [next, setNext] =useState('');
    let initial = useRef(false);
    let [pokeList, setPokeList] = useState([]);
    let [loading, setLoading] = useState(false);
    let [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const getData = async () =>{
        const { data } = await axios.get(url);
        console.log(data)
        setPrevious(data.previous);
        setNext(data.next);
        data.results.forEach( async(element) => {
            const {data} = await axios.get(element.url)
            if (pokeList.includes(data) === false){
                setPokeList((list) =>[...list,data])
            }
        });

    }
    let handlePage = (newUrl) => {
        initial.current = false;
        setUrl(newUrl)
    }
    useEffect(() =>{
        setPokeList("")
        if ( initial.current === false) {
            initial.current=true
            setLoading(true);
            getData();
        }
    },[url])
    return (
        <>
        {pokeList ? (
        <div className='grid-layout'>
            {pokeList.map((pokemon,index)=> (
                <Pokecard key={index} pokemon={pokemon} setPokemon={setPokemon}/>
            ))}
        </div>

        ) : ('Loading')}
        <div>
            {previous ? <input type="button" value="Previous" onClick={() => handlePage(previous)}/> : "" }
            {next ? <input type="button" value="Next" onClick={() => handlePage(next)}/> : ""}
        </div>
        </>
    );
}

export default Pokedex;