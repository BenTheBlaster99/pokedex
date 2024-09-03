import React from 'react';
import { Navigate, useNavigate } from 'react-router';

function Pokecard( {pokemon,setPokemon}) {
    let navigate = useNavigate()
    let handleClick = () => {
        setPokemon(pokemon);
        navigate('/pokemon');
    };

    return (
        <div className={'pokecard ' + pokemon.types[0].type.name}
            onClick={() => handleClick()}
        >
          
            <img src={pokemon.sprites.front_default} alt=""  />
            <p className='pokecard-name'>{pokemon.name}</p>
        </div>
    );
}

export default Pokecard;