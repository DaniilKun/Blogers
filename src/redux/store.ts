import { configureStore } from '@reduxjs/toolkit'
import currentLink from './currentLink/currentLinkSlice'
import  currentBrand from './currentBrand/currentBrandSlice'

export const store = configureStore({
  reducer: {
    currentLink,
    currentBrand,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch