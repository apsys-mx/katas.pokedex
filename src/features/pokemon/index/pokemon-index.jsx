import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPagination } from '../pokemon-selectors'
import DesktopTemplate from './pokemon-index.template'
import { setPageNumber, setPageSize } from '../pokemon.slice'
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
	return (
		<DesktopTemplate
			onOpenPokemonCard={onOpenPokemonCard}
			onCreatePokemon={onCreatePokemon}
			pagination={{
				...pagination,
				onChangePage: onChangePage,
				onChangePageSize: onChangePageSize
			}}
		/>
	)
}
export default PokemonIndex
