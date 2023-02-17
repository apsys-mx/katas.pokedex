import React from 'react'
import { useNavigate } from 'react-router-dom'
import DesktopTemplate from './pokemon-index.template'

/**
 * Pokemon index component
 */
const PokemonIndex = () => {
	var navigate = useNavigate()

	const onOpenPokemonCard = (id) => navigate(`pokemon/${id}`)
	const onCreatePokemon = () => navigate(`pokemon/create`)

	return (
		<DesktopTemplate onOpenPokemonCard={onOpenPokemonCard} onCreatePokemon={onCreatePokemon} />
	)
}
export default PokemonIndex
