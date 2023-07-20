/* eslint-disable no-param-reassign */
import {createSlice, createSelector} from '@reduxjs/toolkit'
import {
  classSelector,
  loadClass,
  loadSubjectsOfClass,
} from '../../redux/slices/studentSlice'

const stateSlice = createSlice({
  name: 'ClassDetailScreenViewModel',
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

const ClassDetailScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.ClassDetailScreenViewModel,
}

export default ClassDetailScreenViewModel
export const {handleError, dismissError} = ClassDetailScreenViewModel.actions

// THUNKS
export function loadStudentClass() {
  return async (dispatch, getState) => {
    try {
      const {refPath: classRefPath} = classSelector(getState()) || {}
      if (classRefPath) {
        await dispatch(loadClass(classRefPath))
        await dispatch(loadSubjectsOfClass(classRefPath))
      }
    } catch (err) {
      const {name, code, message} = err
      dispatch(handleError({name, code, message}))
    }
  }
}

// SELECTORS
export const errorSelector = createSelector(
  ClassDetailScreenViewModel.selfSelector,
  (vm) => vm.error
)

export const studentClassSelector = createSelector(
  classSelector,
  (studentClass) => studentClass || {}
)
