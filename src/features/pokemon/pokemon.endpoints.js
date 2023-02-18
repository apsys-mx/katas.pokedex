import { pokemonsApi } from '../../store/pokemons.api'
/**
 * pokemon endpoints
 */
export const pokemonEndpoints = pokemonsApi.injectEndpoints({
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query(params) {
                console.log("params", params)
                const {pagination} = params
                var pageNumber = pagination.pageNumber +1
                var url = `/pokemons?pageNumber=${pageNumber}&pageSize=${pagination.pageSize}`
                return {
                    url: url,
                    method: 'GET',
                }
            },
        }),
    }),
    overrideExisting: true,
})
export const { useGetPokemonsQuery } = pokemonEndpoints