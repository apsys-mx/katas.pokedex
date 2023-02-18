import React from 'react'
import propTypes from 'prop-types'
import { Button, Pagination, TablePagination, Typography } from '@mui/material'
import { Box } from '@mui/system'

/**
 * Pokemon desktop index template
 */
const PokemonIndexTemplate = ({
	onOpenPokemonCard,
	onCreatePokemon,
	handleChangePage,
	handleChangeRowsPerPage,
	pageNumber,
	pageSize,
	total,
}) => {
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
				count={total}
				page={pageNumber}
				rowsPerPage={pageSize}
				rowsPerPageOptions={[10, 20, 50, 100]}
				showFirstButton
				showLastButton
				onPageChange={(event, pageNumber) => handleChangePage(pageNumber)}
				onRowsPerPageChange={(event, pageSize) => {
					handleChangeRowsPerPage(pageSize.props.value)
				}}
			/>
		</Box>
	)
}
PokemonIndexTemplate.propTypes = {
	onOpenPokemonCard: propTypes.func.isRequired,
	onCreatePokemon: propTypes.func.isRequired,
	handleChangePage: propTypes.func,
	handleChangeRowsPerPage: propTypes.func,
	pageNumber: propTypes.number,
	pageSize: propTypes.number,
	total: propTypes.number,
}
PokemonIndexTemplate.defaultProps = {
	handleChangePage: () => console.warn('No [handleChangePage] CallBack defined'),
	handleChangeRowsPerPage: () => console.warn('No [handleChangeRowsPerPage] CallBack defined'),
	pageNumber: 0,
	pageSize: 20,
	total: 0,
}
export default PokemonIndexTemplate
