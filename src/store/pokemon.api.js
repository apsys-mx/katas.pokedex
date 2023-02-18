import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonsApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: `https://localhost:7094`,
	}),
	tagTypes: ['Pokemons'],
	reducerPath: ['pokemonsApi'],
	endpoints: () => ({}),
})
