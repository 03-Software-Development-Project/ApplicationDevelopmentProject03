/* eslint-disable no-param-reassign */
import {createSlice, createSelector} from '@reduxjs/toolkit'

const stateSlice = createSlice({
  name: 'SubjectDetailScreenViewModel',
  initialState: {
    error: {},
    data: {
      chapters: {},
    },
  },
  reducers: {
    loadChapters: (state, action) => {
      state.data.chapters = action.payload
    },
    handleError: (state, action) => {
      state.error = action.payload
    },
    dismissError: (state) => {
      state.error = {}
    },
  },
})

const SubjectDetailScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.SubjectDetailScreenViewModel,
}

export default SubjectDetailScreenViewModel
export const {handleError, dismissError} = SubjectDetailScreenViewModel.actions

// THUNKS
export function loadChaptersOfSubject() {}

// SELECTORS
export const errorSelector = createSelector(
  SubjectDetailScreenViewModel.selfSelector,
  (vm) => vm.error
)
