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
      chosenAnswer: null,
    },
  },
  reducers: {
    setCurrentQuestionIndex: (state, action) => {
      state.data.currentQuestionIndex = action.payload
    },
    setChosenAnswer: (state, action) => {
      state.data.chosenAnswer = action.payload
    },
    resetState: (state) => {
      state.data.currentQuestionIndex = null
      state.data.chosenAnswer = null
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
  setChosenAnswer,
  resetState,
  handleError,
  dismissError,
} = QuestionScreenViewModel.actions

// THUNKS
export function answerCurrentQuestion(chosenAnswer) {
  return async (dispatch, getState) => {
    try {
      dispatch(setChosenAnswer(chosenAnswer))
      const currentQuestion = currentQuestionSelector(getState())
      const currentQuestionIndex = currentQuestionIndexSelector(getState())
      await dispatch(
        updateLatestExamAttemptQuestion(
          currentQuestionIndex,
          currentQuestion.refPath,
          {
            isCorrect: chosenAnswer.id === currentQuestion.correctAnswer,
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
export const chosenAnswerSelector = createSelector(
  QuestionScreenViewModel.selfSelector,
  (vm) => vm.data.chosenAnswer
)
export const currentQuestionSelector = createSelector(
  latestExamAttemptSelector,
  currentQuestionIndexSelector,
  (examAttempt, questionIndex) => examAttempt.questions[questionIndex] || {}
)

export const numberOfQuestionsSelector = createSelector(
  latestExamAttemptSelector,
  (examAttempt) => examAttempt.questions.length
)
