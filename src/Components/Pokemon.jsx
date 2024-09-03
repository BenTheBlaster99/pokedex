import React from 'react';
import "./pokemon.css";

function Pokemon( {pokemon} ) {
    return (<>

        <div className='poke-head poke'>
            <p>{pokemon.name}</p>
            <div>
                <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
            </div>
            {pokemon.types.map((type, index) =>(
                <p key={index}>{type.type.name}</p>
            ))}
        </div>
        <div className='poke poke-abs'>
            {pokemon.abilities.map((ability,index) =>(
                <p key={index}>{ability.ability.name}</p>
            ))}
        </div>
        <div className='poke poke-stats'>
            {pokemon.stats.map((stats,index) => (
                <div key={index}>
                        <span>{stats.base_stat}</span>
                        <span>{stats.stat.name}</span>
                </div>
            ))}
        </div>
        </>
    );
}

export default Pokemon;