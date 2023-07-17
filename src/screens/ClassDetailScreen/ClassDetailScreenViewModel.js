/* eslint-disable no-param-reassign */
import {createSlice, createSelector} from '@reduxjs/toolkit'
import {isDebugModeOnSelector} from '../../AppViewModel'

const stateSlice = createSlice({
  name: 'ClassDetailScreenViewModel',
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

const ClassDetailScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.ClassDetailScreenViewModel,
}

export default ClassDetailScreenViewModel
export const {handleError, dismissError} = ClassDetailScreenViewModel.actions

// THUNKS
export function loadSubjectsOfClass() {}

// SELECTORS
export const errorSelector = createSelector(
  ClassDetailScreenViewModel.selfSelector,
  (vm) => vm.error
)

export const isAppDebugModeOnSelector = createSelector(
  isDebugModeOnSelector,
  (isAppDebugModeOn) => isAppDebugModeOn
)
