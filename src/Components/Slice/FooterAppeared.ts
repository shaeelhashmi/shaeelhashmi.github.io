import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'appeared',
  initialState: {
    value: false,
  },
  reducers: {
    appear(state) {
      state.value = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { appear } = counterSlice.actions

export default counterSlice.reducer