/* eslint-disable no-param-reassign */
import {createSlice, createSelector} from '@reduxjs/toolkit'
import {
  loadSubject,
  loadChaptersOfSubject,
  classSelector,
} from '../../redux/slices/studentSlice'

const stateSlice = createSlice({
  name: 'SubjectDetailScreenViewModel',
  initialState: {
    error: null,
    data: {
      currentSubjectIndex: null,
    },
  },
  reducers: {
    setCurrentSubjectIndex: (state, action) => {
      state.data.currentSubjectIndex = action.payload
    },
    handleError: (state, action) => {
      state.error = action.payload
    },
    dismissError: (state) => {
      state.error = null
    },
  },
})

const SubjectDetailScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.SubjectDetailScreenViewModel,
}

export default SubjectDetailScreenViewModel
export const {setCurrentSubjectIndex, handleError, dismissError} =
  SubjectDetailScreenViewModel.actions

// THUNKS
export function loadCurrentSubject(subjectIndex, subjectRefPath) {
  return async (dispatch) => {
    try {
      dispatch(setCurrentSubjectIndex(subjectIndex))
      await dispatch(loadSubject(subjectIndex, subjectRefPath))
      await dispatch(loadChaptersOfSubject(subjectIndex, subjectRefPath))
    } catch (err) {
      const {name, code, message} = err
      dispatch(handleError({name, code, message}))
    }
  }
}

// SELECTORS
export const errorSelector = createSelector(
  SubjectDetailScreenViewModel.selfSelector,
  (vm) => vm.error
)
export const currentSubjectIndexSelector = createSelector(
  SubjectDetailScreenViewModel.selfSelector,
  (vm) => vm.data.currentSubjectIndex
)
export const currentSubjectSelector = createSelector(
  currentSubjectIndexSelector,
  classSelector,
  (currentSubjectIndex, studentClass) => {
    if (currentSubjectIndex !== null) {
      return studentClass.subjects[currentSubjectIndex]
    }
    return {}
  }
)
