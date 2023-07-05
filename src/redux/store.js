import {configureStore} from '@reduxjs/toolkit'
import AppViewModel from '../AppViewModel'

export default configureStore({
  reducer: {
    AppViewModel: AppViewModel.sliceReducer,
  },
})
