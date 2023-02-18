import { pokemonsApi } from '../../store/pokemon.api'

/**
 * Pokemon endpoints
 */
export const pokemonEndpoints = pokemonsApi.injectEndpoints({
	endpoints: (builder) => ({
		getPokemons: builder.query({
			query(params) {
				const { pagination } = params
				var { pageNumber, pageSize, total } = pagination
				pageNumber = pageNumber ? pageNumber + 1 : 1
				pageSize = pageSize ? pageSize : 20
				var url = `/pokemons?pageNumber=${pageNumber}&pageSize=${pageSize}`
				return {
					url: url,
					method: 'GET',
				}
			},
			providesTags: ['Pokemons'],
			transformResponse: (response) => {
				if (response) response.pageNumber = response.pageNumber - 1
				return response
			},
		}),
	}),
	overrideExisting: true,
})
export const { useGetPokemonsQuery } = pokemonEndpoints
