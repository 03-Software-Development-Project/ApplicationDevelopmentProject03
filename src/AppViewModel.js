/* eslint-disable no-param-reassign */
import {createSelector, createSlice} from '@reduxjs/toolkit'
import {StudentRepository} from './repositories'

const stateSlice = createSlice({
  name: 'AppViewModel',
  initialState: {
    isInitializing: true,
    error: {},
    data: {
      account: {},
    },
  },
  reducers: {
    signIn: (state, action) => {
      state.data.account = action.payload
      state.isInitializing = false
    },
    signOut: (state) => {
      state.data.account = {}
      state.isInitializing = false
    },
  },
})

const AppViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  thunks: {
    listenToStudentAuthState: () => (dispatch) => {
      const subscriber = StudentRepository.onStudentAuthStateChanged(
        (account) => {
          if (account) {
            dispatch(signIn(account))
          } else {
            dispatch(signOut())
          }
        }
      )
      return subscriber
    },
  },
  selfSelector: (state) => state.AppViewModel,
}
AppViewModel.selectors = {
  isStudentSignedInSelector: createSelector(
    AppViewModel.selfSelector,
    (vm) => Object.keys(vm.data.account).length !== 0
  ),
  isInitializingSelector: createSelector(
    AppViewModel.selfSelector,
    (vm) => vm.isInitializing
  ),
}
export default AppViewModel
export const {signIn, signOut} = AppViewModel.actions
export const {listenToStudentAuthState} = AppViewModel.thunks
export const {isStudentSignedInSelector, isInitializingSelector} =
  AppViewModel.selectors
