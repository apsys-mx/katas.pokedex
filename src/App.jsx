import React from 'react'
import { Routes, Route } from 'react-router-dom'

import PokemonIndex from './features/pokemon/index/pokemon-index'
import PokemonCard from './features/pokemon/detail/pokemon-detail'
import PokemonCreate from './features/pokemon/create/pokemon-create'

/**
 * App component
 */
const App = () => {
	return (
		<Routes>
			<Route path='/' element={<PokemonIndex />} />
			<Route path='pokemon/:id' element={<PokemonCard />} />
			<Route path='pokemon/create' element={<PokemonCreate />} />
		</Routes>
	)
}

export default App
