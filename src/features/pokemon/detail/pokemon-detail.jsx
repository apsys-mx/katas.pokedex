import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetPokemonDetailsQuery } from '../pokemon.endpoints'
import DesktopTemplate from './pokemon-detail.template'

/**
 * Pokemon index component
 */
const PokemonDetail = () => {
	var params = useParams()
	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
	//::::::::::::::::::::(API´s)::::::::::::::::::::::::::::::::::::::::://
	const {
		data: pokemonDetail,
		isLoading,
		isError,
	} = useGetPokemonDetailsQuery({
		pokemon: params ? params.id : '',
	})
	console.log('detail', pokemonDetail)
	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error 😈</div>
	return <DesktopTemplate id={params.id} pokemonDetail={pokemonDetail} />
}
export default PokemonDetail
