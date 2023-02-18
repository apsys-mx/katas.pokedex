import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//Import route
import { useNavigate } from 'react-router-dom'
//Import state
import { setPageNumber, setPageSize } from '../pokemon.slice'
import * as selector from '../pokemon.selectors'
//Import templates
import DesktopTemplate from './pokemon-index.template'
import { useGetPokemonsQuery } from '../pokemon.endpoints'
/**
 * Pokemon index component
 */
const PokemonIndex = () => {
	//Route
	var navigate = useNavigate()
	//State
	const dispatch = useDispatch()
	const pagination = useSelector((state) => selector.getPagination(state))
	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
	//::::::::::::::::::::(API´s)::::::::::::::::::::::::::::::::::::::::://
	const { data: pokemons, isLoading, isError, error } = useGetPokemonsQuery({ pagination })
	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
	//::::::::::::::::::::(Route-Navigate):::::::::::::::::::::::::::::::://
	const onOpenPokemonCard = (id) => navigate(`pokemon/${id}`)
	const onCreatePokemon = () => navigate(`pokemon/create`)
	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
	//::::::::::::::::::::(Pagination):::::::::::::::::::::::::::::::::::://
	const onPageChange = (pageNumber) => dispatch(setPageNumber(pageNumber))
	const onPageSizeChange = (pageSize) => dispatch(setPageSize(pageSize))
	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error 😈</div>
	return (
		<DesktopTemplate
			{...pokemons}
			onOpenPokemonCard={onOpenPokemonCard}
			onCreatePokemon={onCreatePokemon}
			handleChangePage={onPageChange}
			handleChangeRowsPerPage={onPageSizeChange}
		/>
	)
}
export default PokemonIndex
