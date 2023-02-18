import React from 'react'
import propTypes from 'prop-types'
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Stack,
	TablePagination,
	Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { v4 as uuidV4 } from 'uuid'

/**
 * Pokemon desktop index template
 */
const PokemonIndexTemplate = ({
	onOpenPokemonCard,
	onCreatePokemon,
	handleChangePage,
	handleChangeRowsPerPage,
	items,
	pageNumber,
	pageSize,
	totalItems,
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
			{items?.map((pokemon) => {
				return (
					<Stack
						key={uuidV4()}
						sx={{
							padding: '15px',
						}}
					>
						<Card
							sx={{
								backgroundColor: '#E59FF7',
							}}
						>
							<CardHeader
								title={
									<Stack direction={'row'} alignItems='center'>
										<Typography variant='caption'>{`No° Pokemon:`}</Typography>
										<Typography
											sx={{
												color: 'red',
												paddingLeft: '8px',
											}}
											variant='h6'
										>
											{pokemon.code}
										</Typography>
									</Stack>
								}
							/>
							<CardContent>
								<Stack
									direction={'row'}
									alignItems={'center'}
									justifyContent={'space-between'}
								>
									<Typography variant='body2'>{`Nombre del pokemon: ${pokemon.name}`}</Typography>
									<Button onClick={() => onOpenPokemonCard(pokemon.name)}>
										ver mas
									</Button>
								</Stack>
							</CardContent>
						</Card>
					</Stack>
				)
			})}
			<TablePagination
				component={'div'}
				count={totalItems}
				page={pageNumber}
				rowsPerPage={pageSize}
				rowsPerPageOptions={[10, 20, 50, 100]}
				showFirstButton
				showLastButton
				onPageChange={(event, pageNumber) => handleChangePage(pageNumber)}
				onRowsPerPageChange={(event, pageSize) => {
					handleChangeRowsPerPage(pageSize.props.value)
					handleChangePage(0)
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
	items: propTypes.array,
	pageNumber: propTypes.number,
	pageSize: propTypes.number,
	totalItems: propTypes.number,
}
PokemonIndexTemplate.defaultProps = {
	handleChangePage: () => console.warn('No [handleChangePage] CallBack defined'),
	handleChangeRowsPerPage: () => console.warn('No [handleChangeRowsPerPage] CallBack defined'),
	items: [],
	pageNumber: 0,
	pageSize: 20,
	totalItems: 0,
}
export default PokemonIndexTemplate
