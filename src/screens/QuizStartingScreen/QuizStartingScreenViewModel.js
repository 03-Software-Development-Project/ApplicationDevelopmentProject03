/* eslint-disable no-param-reassign */
import {createSlice, createSelector} from '@reduxjs/toolkit'
import {deleteLatestExamAttempt} from '../../redux/slices/studentSlice'

const stateSlice = createSlice({
  name: 'QuizStartingScreenViewModel',
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

const QuizStartingScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.QuizStartingScreenViewModel,
}

export default QuizStartingScreenViewModel
export const {handleError, dismissError} = QuizStartingScreenViewModel.actions

// THUNKS
export function quitExamAttempt() {
  return async (dispatch) => {
    try {
      await dispatch(deleteLatestExamAttempt())
    } catch (err) {
      const {name, code, message} = err
      dispatch(handleError({name, code, message}))
    }
  }
}

// SELECTORS
export const errorSelector = createSelector(
  QuizStartingScreenViewModel.selfSelector,
  (vm) => vm.error
)
