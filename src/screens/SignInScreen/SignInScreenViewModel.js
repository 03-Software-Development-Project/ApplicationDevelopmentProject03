/* eslint-disable no-param-reassign */
import {createSelector, createSlice} from '@reduxjs/toolkit'
import {signIn} from '../../redux/slices/studentSlice'

const stateSlice = createSlice({
  name: 'SignInScreenViewModel',
  initialState: {
    error: null,
    data: null,
  },
  reducers: {
    handleError: (state, action) => {
      state.error = action.payload
    },
    dismissError: (state) => {
      state.error = null
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
export function login(email, password) {
  return async (dispatch) => {
    try {
      await dispatch(signIn(email, password))
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
