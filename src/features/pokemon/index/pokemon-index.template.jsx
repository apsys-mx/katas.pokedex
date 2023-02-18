import React from 'react'
import propTypes from 'prop-types'
import { Button, Typography, TablePagination } from '@mui/material'
import { Box } from '@mui/system'

/**
 * Pokemon desktop index template
 */
const PokemonIndexTemplate = ({ onOpenPokemonCard, onCreatePokemon, pagination }) => {
	return (
		<Box>
			<Typography variant='h3'>This is the Pokemon catalog</Typography>
			<Button variant='contained' onClick={() => onOpenPokemonCard('pikachu')}>
				View pokemon detail
			</Button>
			<Button variant='contained' onClick={onCreatePokemon}>
				Create pokemon
			</Button>
			<TablePagination
				component={'div'}
				page={pagination.pageNumber}
				count={pagination.total}
				rowsPerPage={pagination.pageSize}
				rowsPerPageOptions={[10, 20, 50, 100]}
				showFirstButton
				showLastButton
				onPageChange={(event, pageNumber) => {
					pagination.onChangePage(pageNumber)
					// pagination.onChangePageSize(0)
				}}
				onRowsPerPageChange ={(event)=>{
					pagination.onChangePageSize(event.target.value)

				}}
			/>
		</Box>
	)
}
PokemonIndexTemplate.propTypes = {
	onOpenPokemonCard: propTypes.func.isRequired,
	onCreatePokemon: propTypes.func.isRequired,
}
export default PokemonIndexTemplate
