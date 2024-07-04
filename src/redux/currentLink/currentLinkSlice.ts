import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentLinkState {
  link: string
}

const initialState: CurrentLinkState = {
  link: 'Главная',
}

export const currentLinkSlice = createSlice({
  name: 'currentLink',
  initialState,
  reducers: {
    setCurrentLink: (state, action: PayloadAction<string>) => {
      state.link = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentLink } = currentLinkSlice.actions

export default currentLinkSlice.reducer