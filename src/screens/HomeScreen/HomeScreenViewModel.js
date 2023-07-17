/* eslint-disable no-param-reassign */
import {createSlice, createSelector} from '@reduxjs/toolkit'
import {isDebugModeOnSelector} from '../../AppViewModel'

const stateSlice = createSlice({
  name: 'HomeScreenViewModel',
  initialState: {
    error: {},
    data: {
      isDebugModeOn: false,
      classes: {},
    },
  },
  reducers: {
    loadClasses: (state, action) => {
      state.data.classes = action.payload
    },
    handleError: (state, action) => {
      state.error = action.payload
    },
    dismissError: (state) => {
      state.error = {}
    },
  },
})

const HomeScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.HomeScreenViewModel,
}

export default HomeScreenViewModel
export const {handleError, dismissError} = HomeScreenViewModel.actions

// THUNKS
export function loadClasses() {}

// SELECTORS
export const errorSelector = createSelector(
  HomeScreenViewModel.selfSelector,
  (vm) => vm.error
)

export const isAppDebugModeOnSelector = createSelector(
  isDebugModeOnSelector,
  (isAppDebugModeOn) => isAppDebugModeOn
)
