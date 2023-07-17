import {configureStore} from '@reduxjs/toolkit'
import AppViewModel from '../AppViewModel'
import SignInScreenViewModel from '../screens/SignInScreen/SignInScreenViewModel'
import MainDrawerScreenViewModel from '../screens/MainDrawerScreen/MainDrawerScreenViewModel'
import HomeScreenViewModel from '../screens/HomeScreen/HomeScreenViewModel'
import SearchScreenViewModel from '../screens/SearchScreen/SearchScreenViewModel'
import ClassDetailScreenViewModel from '../screens/ClassDetailScreen/ClassDetailScreenViewModel'
import studentSliceReducer from './slices/studentSlice'

export default configureStore({
  reducer: {
    AppViewModel: AppViewModel.sliceReducer,
    SignInScreenViewModel: SignInScreenViewModel.sliceReducer,
    MainDrawerScreenViewModel: MainDrawerScreenViewModel.sliceReducer,
    HomeScreenViewModel: HomeScreenViewModel.sliceReducer,
    SearchScreenViewModel: SearchScreenViewModel.sliceReducer,
    ClassDetailScreenViewModel: ClassDetailScreenViewModel.sliceReducer,
    student: studentSliceReducer,
  },
})
