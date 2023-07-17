import {configureStore} from '@reduxjs/toolkit'
import AppViewModel from '../AppViewModel'
import SignInScreenViewModel from '../screens/SignInScreen/SignInScreenViewModel'
import HomeDrawerScreenViewModel from '../screens/HomeDrawerScreen/HomeDrawerScreenViewModel'
import studentSliceReducer from './slices/studentSlice'

export default configureStore({
  reducer: {
    AppViewModel: AppViewModel.sliceReducer,
    SignInScreenViewModel: SignInScreenViewModel.sliceReducer,
    HomeDrawerScreenViewModel: HomeDrawerScreenViewModel.sliceReducer,
    student: studentSliceReducer,
  },
})
