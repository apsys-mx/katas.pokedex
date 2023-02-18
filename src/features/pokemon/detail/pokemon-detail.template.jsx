import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { v4 as uuidV4 } from 'uuid'

/**
 * Pokemon desktop detail template
 */
const PokemonDetailTemplate = ({ id, pokemonDetail }) => {
	return (
		<Stack>
			<Stack justifyContent={'center'} alignItems='center'>
				<Typography variant='h5'>{`Pokemon card for ${id}`}</Typography>
				{pokemonDetail.types?.map((type) => {
					return (
						<Stack
							direction={'column'}
							sx={{
								backgroundColor: '#E4EFF1',
								borderRadius: '8px',
								width: '10vh',
								margin: '5px',
							}}
							justifyContent='center'
							alignItems={'center'}
							key={uuidV4()}
						>
							<Typography>{type.type.name}</Typography>
						</Stack>
					)
				})}

				<Paper
					sx={{
						width: '300px',
					}}
				>
					<img
						src={pokemonDetail.sprites.other.home.front_default}
						width='300px'
						height={'auto'}
					/>
				</Paper>
			</Stack>
		</Stack>
	)
}
export default PokemonDetailTemplate
