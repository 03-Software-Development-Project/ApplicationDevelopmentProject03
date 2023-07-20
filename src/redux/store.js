import {configureStore} from '@reduxjs/toolkit'
import AppViewModel from '../AppViewModel'
import SignInScreenViewModel from '../screens/SignInScreen/SignInScreenViewModel'
import MainDrawerScreenViewModel from '../screens/MainDrawerScreen/MainDrawerScreenViewModel'
import HomeScreenViewModel from '../screens/HomeScreen/HomeScreenViewModel'
import SearchScreenViewModel from '../screens/SearchScreen/SearchScreenViewModel'
import ClassDetailScreenViewModel from '../screens/ClassDetailScreen/ClassDetailScreenViewModel'
import SubjectDetailScreenViewModel from '../screens/SubjectDetailScreen/SubjectDetailScreenViewModel'
import ChapterDetailScreenViewModel from '../screens/ChapterDetailScreen/ChapterDetailScreenViewModel'
import QuizStartingScreenViewModel from '../screens/QuizStartingScreen/QuizStartingScreenViewModel'
import QuestionScreenViewModel from '../screens/QuestionScreen/QuestionScreenViewModel'
import QuizResultScreenViewModel from '../screens/QuizResultScreen/QuizResultScreenViewModel'
import studentSliceReducer from './slices/studentSlice'

export default configureStore({
  reducer: {
    AppViewModel: AppViewModel.sliceReducer,
    SignInScreenViewModel: SignInScreenViewModel.sliceReducer,
    MainDrawerScreenViewModel: MainDrawerScreenViewModel.sliceReducer,
    HomeScreenViewModel: HomeScreenViewModel.sliceReducer,
    SearchScreenViewModel: SearchScreenViewModel.sliceReducer,
    ClassDetailScreenViewModel: ClassDetailScreenViewModel.sliceReducer,
    SubjectDetailScreenViewModel: SubjectDetailScreenViewModel.sliceReducer,
    ChapterDetailScreenViewModel: ChapterDetailScreenViewModel.sliceReducer,
    QuizStartingScreenViewModel: QuizStartingScreenViewModel.sliceReducer,
    QuestionScreenViewModel: QuestionScreenViewModel.sliceReducer,
    QuizResultScreenViewModel: QuizResultScreenViewModel.sliceReducer,
    student: studentSliceReducer,
  },
})
