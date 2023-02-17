import { Typography } from '@mui/material'
import React from 'react'

/**
 * Pokemon desktop detail template
 */
const PokemonDetailTemplate = ({ id }) => {
	return <Typography variant='h5'>{`Pokemon card for ${id}`}</Typography>
}
export default PokemonDetailTemplate
