import React from 'react'
import propTypes from 'prop-types'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'

/**
 * Pokemon desktop index template
 */
const PokemonIndexTemplate = ({ onOpenPokemonCard, onCreatePokemon }) => {
	return (
		<Box>
			<Typography variant='h3'>This is the Pokemon catalog</Typography>
			<Button variant='contained' onClick={() => onOpenPokemonCard('pikachu')}>
				View pokemon detail
			</Button>
			<Button variant='contained' onClick={onCreatePokemon}>
				Create pokemon
			</Button>
		</Box>
	)
}
PokemonIndexTemplate.propTypes = {
	onOpenPokemonCard: propTypes.func.isRequired,
	onCreatePokemon: propTypes.func.isRequired,
}
export default PokemonIndexTemplate
