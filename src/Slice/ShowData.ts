import { createSlice } from '@reduxjs/toolkit'

export const show = createSlice({
  name: 'showData',
  initialState: {
    name:""
  },
  reducers: {
    setShow: (state,actions) => {state.name = actions.payload},
  },
})

// Action creators are generated for each case reducer function
export const { setShow } = show.actions

export default show.reducer