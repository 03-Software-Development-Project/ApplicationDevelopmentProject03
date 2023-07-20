/* eslint-disable no-param-reassign */
import {createSlice, createSelector} from '@reduxjs/toolkit'
import {
  loadChapter,
  loadQuestionsOfChapter,
  createNewExamAttempt,
  accountSelector,
  classSelector,
} from '../../redux/slices/studentSlice'

const stateSlice = createSlice({
  name: 'ChapterDetailScreenViewModel',
  initialState: {
    error: null,
    data: {
      currentSubjectIndex: null,
      currentChapterIndex: null,
    },
  },
  reducers: {
    setCurrentSubjectIndex: (state, action) => {
      state.data.currentSubjectIndex = action.payload
    },
    setCurrentChapterIndex: (state, action) => {
      state.data.currentChapterIndex = action.payload
    },
    handleError: (state, action) => {
      state.error = action.payload
    },
    dismissError: (state) => {
      state.error = null
    },
  },
})

const ChapterDetailScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.ChapterDetailScreenViewModel,
}

export default ChapterDetailScreenViewModel
export const {
  setCurrentSubjectIndex,
  setCurrentChapterIndex,
  handleError,
  dismissError,
} = ChapterDetailScreenViewModel.actions

// THUNKS
export function loadCurrentChapter(subjectIndex, chapterIndex, chapterRefPath) {
  return async (dispatch) => {
    try {
      dispatch(setCurrentSubjectIndex(subjectIndex))
      dispatch(setCurrentChapterIndex(chapterIndex))
      await dispatch(loadChapter(subjectIndex, chapterIndex, chapterRefPath))
      await dispatch(
        loadQuestionsOfChapter(subjectIndex, chapterIndex, chapterRefPath)
      )
    } catch (err) {
      const {name, code, message} = err
      dispatch(handleError({name, code, message}))
    }
  }
}

export function startNewExamAttempt(questions) {
  return async (dispatch, getState) => {
    try {
      const studentAccount = accountSelector(getState())
      await dispatch(createNewExamAttempt(studentAccount.id, questions))
    } catch (err) {
      const {name, code, message} = err
      dispatch(handleError({name, code, message}))
    }
  }
}

// SELECTORS
export const errorSelector = createSelector(
  ChapterDetailScreenViewModel.selfSelector,
  (vm) => vm.error
)
export const currentSubjectIndexSelector = createSelector(
  ChapterDetailScreenViewModel.selfSelector,
  (vm) => vm.data.currentSubjectIndex
)
export const currentChapterIndexSelector = createSelector(
  ChapterDetailScreenViewModel.selfSelector,
  (vm) => vm.data.currentChapterIndex
)
export const currentChapterSelector = createSelector(
  currentSubjectIndexSelector,
  currentChapterIndexSelector,
  classSelector,
  (currentSubjectIndex, currentChapterIndex, studentClass) => {
    if (currentSubjectIndex !== null && currentChapterIndex !== null) {
      return studentClass.subjects[currentSubjectIndex].chapters[
        currentChapterIndex
      ]
    }
    return {}
  }
)
