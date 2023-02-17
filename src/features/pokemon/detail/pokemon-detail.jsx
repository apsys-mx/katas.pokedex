import React from 'react'
import { useParams } from 'react-router-dom'
import DesktopTemplate from './pokemon-detail.template'

/**
 * Pokemon index component
 */
const PokemonDetail = () => {
	var params = useParams()

	console.log('params', params)
	return <DesktopTemplate id={params.id} />
}
export default PokemonDetail
