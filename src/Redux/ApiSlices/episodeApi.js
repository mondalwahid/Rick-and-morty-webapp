import { charactersApi } from "./characterApiSlice"

const episodeApi = charactersApi.injectEndpoints({
    endpoints: (builder) => ({
        episodeData: builder.query({
            query: ({episodeNumber}) => `/api/episode/${episodeNumber}`,
          }),      
    })
})

export const {useEpisodeDataQuery} = episodeApi