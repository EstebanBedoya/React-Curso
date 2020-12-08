import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsAction, nextPokemonAction } from '../redux/pokeDucks'

const Pokemons = props => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.array)

    return (
        <div>
            all nais
            <button onClick={() => dispatch(getPokemonsAction())}> Get pokemons </button>
            <button onClick={()=> dispatch(nextPokemonAction(20))}>tenkiu next</button>
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

Pokemons.propTypes = {

}

export default Pokemons
