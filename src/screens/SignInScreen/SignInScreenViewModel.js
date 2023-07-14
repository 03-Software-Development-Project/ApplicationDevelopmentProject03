/* eslint-disable no-param-reassign */
import {createSelector, createSlice} from '@reduxjs/toolkit'
import {StudentRepository} from '../../repositories'

const stateSlice = createSlice({
  name: 'SignInScreenViewModel',
  initialState: {
    error: {},
    data: {},
  },
  reducers: {
    handleError: (state, action) => {
      state.error = action.payload
    },
    dismissError: (state) => {
      state.error = {}
    },
  },
})

const SignInScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.SignInScreenViewModel,
}

export default SignInScreenViewModel
export const {handleError, dismissError} = SignInScreenViewModel.actions

// THUNKS
export function signIn(email, password) {
  return async (dispatch) => {
    try {
      await StudentRepository.signIn(email, password)
    } catch (err) {
      const {name, code, message} = err
      dispatch(handleError({name, code, message}))
    }
  }
}

// SELECTORS
export const errorSelector = createSelector(
  SignInScreenViewModel.selfSelector,
  (vm) => vm.error
)
