import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'Dark',
  initialState: {
    value: true,
  },
  reducers: {
    Change(state,actions) {
      state.value = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { Change } = counterSlice.actions

export default counterSlice.reducer