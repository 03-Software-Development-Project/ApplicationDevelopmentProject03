/* eslint-disable no-param-reassign */
import {createSelector, createSlice} from '@reduxjs/toolkit'
import {FirebaseGateway} from '../../gateways'

const stateSlice = createSlice({
  name: 'SearchScreenViewModel',
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

const SearchScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.SearchScreenViewModel,
}

export default SearchScreenViewModel
export const {handleError, dismissError} = SearchScreenViewModel.actions

// THUNKS
export function search() {}

// SELECTORS
export const errorSelector = createSelector(
  SearchScreenViewModel.selfSelector,
  (vm) => vm.error
)
