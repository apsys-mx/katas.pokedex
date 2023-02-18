import { createSelector } from 'reselect'
const getState = (state) => (state = state.pokemonSlice)

const getPagination = createSelector(getState, (state) => {
    return state.pagination
})

export { getPagination }