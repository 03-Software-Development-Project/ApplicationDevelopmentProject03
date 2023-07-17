/* eslint-disable no-param-reassign */
import {createSelector, createSlice} from '@reduxjs/toolkit'
import {FirebaseGateway} from '../../gateways'

const stateSlice = createSlice({
  name: 'HomeDrawerScreenViewModel',
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

const HomeDrawerScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.HomeDrawerScreenViewModel,
}

export default HomeDrawerScreenViewModel
export const {handleError, dismissError} = HomeDrawerScreenViewModel.actions

// THUNKS
export function signOut() {
  return async (dispatch) => {
    try {
      await FirebaseGateway.signOut()
    } catch (err) {
      const {name, code, message} = err
      dispatch(handleError({name, code, message}))
    }
  }
}

// SELECTORS
export const errorSelector = createSelector(
  HomeDrawerScreenViewModel.selfSelector,
  (vm) => vm.error
)
