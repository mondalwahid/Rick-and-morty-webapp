import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/' }),
  endpoints: (builder) => ({
    getCharactersByName: builder.query({
      query: ({pageNumber}) => `api/character?page=${pageNumber}`,
    }),
  }),
})


export const { useGetCharactersByNameQuery } = charactersApi