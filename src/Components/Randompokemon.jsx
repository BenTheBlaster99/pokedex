import React, { useEffect, useState, useRef} from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';

function Randompokemon() {
    let load =useRef(false);
    let [random, setRandom] = useState('');
    let getRandomPokemon = async () => {
        let pokeID = Math.floor(Math.random() *1000)

        let {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/'+ pokeID + "/");
    
        setRandom(data)
    };
    
    useEffect(() =>{
        if(load.current ===false){
            getRandomPokemon();
            load.current = true
        }
        
    },[])
    return (
        <div>
            {random? <Pokemon pokemon={random}/> : "loading"}
        </div>
    );
}

export default Randompokemon;