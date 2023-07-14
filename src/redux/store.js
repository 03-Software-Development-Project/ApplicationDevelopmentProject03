import {configureStore} from '@reduxjs/toolkit'
import AppViewModel from '../AppViewModel'
import SignInScreenViewModel from '../screens/SignInScreen/SignInScreenViewModel'
import studentSliceReducer from './slices/studentSlice'

export default configureStore({
  reducer: {
    AppViewModel: AppViewModel.sliceReducer,
    SignInScreenViewModel: SignInScreenViewModel.sliceReducer,
    student: studentSliceReducer,
  },
})
