import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//Import route
import { useNavigate } from 'react-router-dom'
//Import state
import { setPageNumber, setPageSize } from '../pokemon.slice'
import * as selector from '../pokemon.selectors'
//Import templates
import DesktopTemplate from './pokemon-index.template'
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
	//::::::::::::::::::::(Route-Navigate):::::::::::::::::::::::::::::::://
	const onOpenPokemonCard = (id) => navigate(`pokemon/${id}`)
	const onCreatePokemon = () => navigate(`pokemon/create`)
	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
	//::::::::::::::::::::(Pagination):::::::::::::::::::::::::::::::::::://
	const onPageChange = (pageNumber) => dispatch(setPageNumber(pageNumber))
	const onPageSizeChange = (pageSize) => dispatch(setPageSize(pageSize))
	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
	return (
		<DesktopTemplate
			onOpenPokemonCard={onOpenPokemonCard}
			onCreatePokemon={onCreatePokemon}
			handleChangePage={onPageChange}
			handleChangeRowsPerPage={onPageSizeChange}
			pageNumber={pagination?.pageNumber}
			pageSize={pagination?.pageSize}
			total={pagination?.total}
		/>
	)
}
export default PokemonIndex
