import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pagination: {
        total: 1,
        pageSize: 20,
        pageNumber: 0
    },
}

export const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {}
})
export default pokemonSlice.reducer