import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pagination: {
        total: 100,
        pageSize: 20,
        pageNumber: 3
    },
}

export const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {
        setPageNumber: (state, action) => {
            state.pagination.pageNumber = action.payload
        },
        setPageSize:(state, action) => {
            state.pagination.pageSize = action.payload
        }
    }
})

export const { setPageNumber, setPageSize } = pokemonSlice.actions
export default pokemonSlice.reducer