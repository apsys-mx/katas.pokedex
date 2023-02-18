import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPagination } from '../pokemon-selectors'
import DesktopTemplate from './pokemon-index.template'
import { setPageNumber, setPageSize } from '../pokemon.slice'

//IMPORT EMPOINTS SECTION
import { useGetPokemonsQuery } from '../pokemon.endpoints'
/**
 * Pokemon index component
 */
const PokemonIndex = () => {
	var navigate = useNavigate()
	var dispath = useDispatch()
	const onOpenPokemonCard = (id) => navigate(`pokemon/${id}`)
	const onCreatePokemon = () => navigate(`pokemon/create`)
	const pagination = useSelector((state) => getPagination(state))
	const onChangePage = (pageNumber) => dispath(setPageNumber(pageNumber))
	const onChangePageSize = (pagiSize) => dispath(setPageSize(pagiSize))

	const { isError: isErrorPokemons, isLoading: isLoadingPokemons, data: pokemons } = useGetPokemonsQuery({ pagination })
	if (isLoadingPokemons) return "Cargando información"
	if (isErrorPokemons) return "No existe información"

	return (
		<DesktopTemplate
			onOpenPokemonCard={onOpenPokemonCard}
			onCreatePokemon={onCreatePokemon}
			pagination={{
				...pagination,
				onChangePage: onChangePage,
				onChangePageSize: onChangePageSize
			}}
			pokemons={pokemons}
		/>
	)
}
export default PokemonIndex
