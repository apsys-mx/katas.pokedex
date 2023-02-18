import { createSelector } from '@reduxjs/toolkit'

const getState = (state) => (state = state.pokemonView)

const getPagination = createSelector(getState, (state) => {
	return state.pagination
})
export { getPagination }
