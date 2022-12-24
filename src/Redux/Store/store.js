import { configureStore } from '@reduxjs/toolkit'
import { charactersApi } from '../ApiSlices/characterApiSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [charactersApi.reducerPath]: charactersApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware),
})