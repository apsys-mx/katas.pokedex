import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import pokemonSlice from '../features/pokemon/pokemon.slice'
const rootReducer = combineReducers({
    pokemonSlice,
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: process.env.NODE_ENV !== 'production',
})