/* eslint-disable no-param-reassign */
import {createSlice, createSelector} from '@reduxjs/toolkit'
import {latestExamAttemptSelector} from '../../redux/slices/studentSlice'

const stateSlice = createSlice({
  name: 'QuizResultScreenViewModel',
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

const QuizResultScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.QuizResultScreenViewModel,
}

export default QuizResultScreenViewModel
export const {handleError, dismissError} = QuizResultScreenViewModel.actions

// THUNKS

// SELECTORS
export const errorSelector = createSelector(
  QuizResultScreenViewModel.selfSelector,
  (vm) => vm.error
)
export const totalQuestionsSelector = createSelector(
  latestExamAttemptSelector,
  (examAttempt) => examAttempt.questions.length
)
export const correctQuestionsSelector = createSelector(
  latestExamAttemptSelector,
  (examAttempt) =>
    examAttempt.questions.reduce((acc, question) => {
      if (question.isCorrect) {
        return acc + 1
      }
      return acc
    }, 0)
)
export const wrongQuestionsSelector = createSelector(
  latestExamAttemptSelector,
  (examAttempt) =>
    examAttempt.questions.reduce((acc, question) => {
      if (!question.isCorrect) {
        return acc + 1
      }
      return acc
    }, 0)
)
export const totalPointsSelector = createSelector(
  latestExamAttemptSelector,
  (examAttempt) =>
    examAttempt.questions.reduce((acc, question) => {
      if (question.isCorrect) {
        return acc + question.score
      }
      return acc
    }, 0)
)
