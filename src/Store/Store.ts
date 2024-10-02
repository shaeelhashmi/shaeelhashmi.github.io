import { configureStore } from '@reduxjs/toolkit'
import ShowData from '../Slice/ShowData'
export default configureStore({
  reducer: {
    ShowData:ShowData
  },
})