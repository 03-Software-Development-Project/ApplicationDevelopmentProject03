/* eslint-disable no-param-reassign */
import {createSlice, createSelector} from '@reduxjs/toolkit'
import {FirebaseGateway} from '../../gateways'

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    info: null,
    account: null,
    class: null,
    examAttempts: [],
  },
  reducers: {
    removeAll: (state) => {
      state.info = null
      state.account = null
      state.class = null
      state.examAttempts = []
    },
    setAccount: (state, action) => {
      state.account = action.payload
    },
    setInfo: (state, action) => {
      state.info = action.payload
    },
    setClass: (state, action) => {
      state.class = action.payload
    },
    setSubjectsOfClass: (state, action) => {
      state.class.subjects = action.payload
    },
    setSubject: (state, action) => {
      const {subjectIndex, subject} = action.payload
      state.class.subjects[subjectIndex] = subject
    },
    setChaptersOfSubject: (state, action) => {
      const {subjectIndex, chapters} = action.payload
      state.class.subjects[subjectIndex].chapters = chapters
    },
    setChapter: (state, action) => {
      const {subjectIndex, chapterIndex, chapter} = action.payload
      state.class.subjects[subjectIndex].chapters[chapterIndex] = chapter
    },
    setQuestionsOfChapter: (state, action) => {
      const {subjectIndex, chapterIndex, questions} = action.payload
      state.class.subjects[subjectIndex].chapters[chapterIndex].questions =
        questions
    },
    pushExamAttempt: (state, action) => {
      state.examAttempts.push(action.payload)
    },
    popExamAttempt: (state) => {
      state.examAttempts.pop()
    },
    setQuestionsOfLatestExamAttempt: (state, action) => {
      state.examAttempts[state.examAttempts.length - 1].questions =
        action.payload
    },
    updateQuestionOfLatestExamAttempt: (state, action) => {
      const {questionIndex, question} = action.payload
      state.examAttempts[state.examAttempts.length - 1].questions[
        questionIndex
      ] = question
    },
  },
})

export default studentSlice.reducer
export const {
  removeAll,
  setAccount,
  setInfo,
  setClass,
  setSubjectsOfClass,
  setSubject,
  setChaptersOfSubject,
  setChapter,
  setQuestionsOfChapter,
  pushExamAttempt,
  popExamAttempt,
  setQuestionsOfLatestExamAttempt,
  updateQuestionOfLatestExamAttempt,
} = studentSlice.actions

// THUNKS
export function signOut() {
  return async (dispatch) => {
    try {
      await FirebaseGateway.signOut()
      dispatch(removeAll())
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function signIn(email, password) {
  return async (dispatch) => {
    try {
      const {user: account} = await FirebaseGateway.signIn(email, password)
      dispatch(
        setAccount({
          id: account.uid,
          email: account.email,
          emailVerified: account.emailVerified,
          phoneNumber: account.phoneNumber,
          displayName: account.displayName,
          photoURL: account.photoURL,
        })
      )
      const student = await FirebaseGateway.getStudent(account.uid)
      dispatch(
        setInfo({
          firstName: student.firstName,
          lastName: student.lastName,
          gender: student.gender,
          birthdate: student.birthdate,
          address: student.address,
        })
      )
      dispatch(setClass(student.class))
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function restoreLoginState(account) {
  return async (dispatch) => {
    try {
      dispatch(setAccount(account))
      const student = await FirebaseGateway.getStudent(account.id)
      dispatch(
        setInfo({
          firstName: student.firstName,
          lastName: student.lastName,
          gender: student.gender,
          birthdate: student.birthdate,
          address: student.address,
        })
      )
      dispatch(setClass(student.class))
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function loadClass(classRefPath) {
  return async (dispatch) => {
    try {
      const studentClass = await FirebaseGateway.getClass(classRefPath)
      dispatch(setClass(studentClass))
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function loadSubjectsOfClass(classRefPath) {
  return async (dispatch) => {
    try {
      const subjects = await FirebaseGateway.getSujectsOfClass(classRefPath)
      dispatch(setSubjectsOfClass(subjects))
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function loadSubject(subjectIndex, subjectRefPath) {
  return async (dispatch) => {
    try {
      const subject = await FirebaseGateway.getSubject(subjectRefPath)
      dispatch(setSubject({subjectIndex, subject}))
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function loadChaptersOfSubject(subjectIndex, subjectRefPath) {
  return async (dispatch) => {
    try {
      const chapters = await FirebaseGateway.getChaptersOfSubject(
        subjectRefPath
      )
      dispatch(setChaptersOfSubject({subjectIndex, chapters}))
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function loadChapter(subjectIndex, chapterIndex, chapterRefPath) {
  return async (dispatch) => {
    try {
      const chapter = await FirebaseGateway.getChapter(chapterRefPath)
      dispatch(setChapter({subjectIndex, chapterIndex, chapter}))
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function loadQuestionsOfChapter(
  subjectIndex,
  chapterIndex,
  chapterRefPath
) {
  return async (dispatch) => {
    try {
      const questions = await FirebaseGateway.getQuestionsOfChapter(
        chapterRefPath
      )
      dispatch(setQuestionsOfChapter({subjectIndex, chapterIndex, questions}))
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function addExamAttempt(examAttemptRefPath) {
  return async (dispatch) => {
    try {
      const examAttempt = await FirebaseGateway.getExamAttempt(
        examAttemptRefPath
      )
      dispatch(pushExamAttempt(examAttempt))
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function loadQuestionsOfExamAttempt(examAttemptRefPath) {
  return async (dispatch) => {
    try {
      const questions = await FirebaseGateway.getQuestionsOfExamAttempt(
        examAttemptRefPath
      )
      dispatch(setQuestionsOfLatestExamAttempt(questions))
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function createNewExamAttempt(studentID, questions) {
  return async (dispatch) => {
    try {
      const examAttemptRefPath = await FirebaseGateway.createExamAttempt(
        studentID,
        questions
      )
      await dispatch(addExamAttempt(examAttemptRefPath))
      await dispatch(loadQuestionsOfExamAttempt(examAttemptRefPath))
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function deleteLatestExamAttempt() {
  return async (dispatch, getState) => {
    try {
      const latestExamAttempt = latestExamAttemptSelector(getState())
      await FirebaseGateway.deleteExamAttempt(latestExamAttempt.refPath)
      dispatch(popExamAttempt())
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function updateLatestExamAttemptQuestion(
  questionIndex,
  questionRefPath,
  updateData
) {
  return async (dispatch) => {
    try {
      await FirebaseGateway.updateExamAttemptQuestion(
        questionRefPath,
        updateData
      )
      const question = await FirebaseGateway.getExamAttemptQuestion(
        questionRefPath
      )
      dispatch(updateQuestionOfLatestExamAttempt({questionIndex, question}))
    } catch (err) {
      throw new Error(err)
    }
  }
}

// SELECTORS
export const accountSelector = (state) => state.student.account
export const infoSelector = (state) => state.student.info
export const classSelector = (state) => state.student.class
export const examAttemptsSelector = (state) => state.student.examAttempts
export const latestExamAttemptSelector = createSelector(
  examAttemptsSelector,
  (examAttempts) => examAttempts[examAttempts.length - 1]
)
