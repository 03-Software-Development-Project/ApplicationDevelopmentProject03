/* eslint-disable no-param-reassign */
import {createSlice, createSelector} from '@reduxjs/toolkit'
import {
  latestExamAttemptSelector,
  updateLatestExamAttemptQuestion,
} from '../../redux/slices/studentSlice'

const stateSlice = createSlice({
  name: 'QuestionScreenViewModel',
  initialState: {
    error: null,
    data: {
      currentQuestionIndex: null,
      chosenAnswerIndex: null,
    },
  },
  reducers: {
    setCurrentQuestionIndex: (state, action) => {
      state.data.currentQuestionIndex = action.payload
    },
    setChosenAnswerIndex: (state, action) => {
      state.data.chosenAnswerIndex = action.payload
    },
    resetState: (state) => {
      state.data.currentQuestionIndex = null
      state.data.chosenAnswerIndex = null
    },
    handleError: (state, action) => {
      state.error = action.payload
    },
    dismissError: (state) => {
      state.error = null
    },
  },
})

const QuestionScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.QuestionScreenViewModel,
}

export default QuestionScreenViewModel
export const {
  setCurrentQuestionIndex,
  setChosenAnswerIndex,
  resetState,
  handleError,
  dismissError,
} = QuestionScreenViewModel.actions

// THUNKS
export function answerCurrentQuestion() {
  return async (dispatch, getState) => {
    try {
      const chosenAnswerIndex = chosenAnswerIndexSelector(getState())
      if (chosenAnswerIndex === null) {
        const err = new Error()
        err.code = '[anwer-not-chosen]'
        err.message = 'You must choose one answer before submitting.'
        throw err
      }
      const currentQuestionIndex = currentQuestionIndexSelector(getState())
      const currentQuestion = currentQuestionSelector(getState())
      await dispatch(
        updateLatestExamAttemptQuestion(
          currentQuestionIndex,
          currentQuestion.refPath,
          {
            isCorrect: chosenAnswerIndex === currentQuestion.correctAnswer,
          }
        )
      )
    } catch (err) {
      const {name, code, message} = err
      dispatch(handleError({name, code, message}))
    }
  }
}
// SELECTORS
export const errorSelector = createSelector(
  QuestionScreenViewModel.selfSelector,
  (vm) => vm.error
)
export const currentQuestionIndexSelector = createSelector(
  QuestionScreenViewModel.selfSelector,
  (vm) => vm.data.currentQuestionIndex
)
export const chosenAnswerIndexSelector = createSelector(
  QuestionScreenViewModel.selfSelector,
  (vm) => vm.data.chosenAnswerIndex
)
export const currentQuestionSelector = createSelector(
  latestExamAttemptSelector,
  currentQuestionIndexSelector,
  (examAttempt, questionIndex) => examAttempt.questions[questionIndex]
)

export const numberOfQuestionsSelector = createSelector(
  latestExamAttemptSelector,
  (examAttempt) => examAttempt.questions.length
)
