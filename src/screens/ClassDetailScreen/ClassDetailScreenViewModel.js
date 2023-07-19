/* eslint-disable no-param-reassign */
import {createSlice, createSelector} from '@reduxjs/toolkit'

const stateSlice = createSlice({
  name: 'ClassDetailScreenViewModel',
  initialState: {
    error: {},
    data: {
      subjects: {},
    },
  },
  reducers: {
    loadSubjects: (state, action) => {
      state.data.subjects = action.payload
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
