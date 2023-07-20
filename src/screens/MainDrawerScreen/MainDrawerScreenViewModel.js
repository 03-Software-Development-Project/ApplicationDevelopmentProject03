/* eslint-disable no-param-reassign */
import {createSelector, createSlice} from '@reduxjs/toolkit'
import {accountSelector, signOut} from '../../redux/slices/studentSlice'

const stateSlice = createSlice({
  name: 'MainDrawerScreenViewModel',
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

const MainDrawerScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.MainDrawerScreenViewModel,
}

export default MainDrawerScreenViewModel
export const {handleError, dismissError} = MainDrawerScreenViewModel.actions

// THUNKS
export function logOut() {
  return async (dispatch) => {
    try {
      await dispatch(signOut())
    } catch (err) {
      const {name, code, message} = err
      dispatch(handleError({name, code, message}))
    }
  }
}

// SELECTORS
export const errorSelector = createSelector(
  MainDrawerScreenViewModel.selfSelector,
  (vm) => vm.error
)

export const studentAccountSelector = createSelector(
  accountSelector,
  (studentAccount) => studentAccount
)
