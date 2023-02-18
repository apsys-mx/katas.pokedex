import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import pokemonSlice from '../features/pokemon/pokemon.slice'
import { pokemonsApi } from './pokemon.api'
const rootReducer = combineReducers({
	pokemonView: pokemonSlice,
	[pokemonsApi.reducerPath]: pokemonsApi.reducer,
})
export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(pokemonsApi.middleware),
	devTools: process.env.NODE_ENV !== 'production',
})
