/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit'
import {FirebaseGateway as FBGateWay} from '../../gateways'
const studentSlice = createSlice({
  name: 'student',
  initialState: {
    info: null,
    account: null,
    class: null,
    examAttempts: null,
  },
  reducers: {
    removeAll: (state) => {
      state.info = null
      state.account = null
      state.class = null
      state.examAttempts = null
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
  },
})

export default studentSlice.reducer
export const {removeAll} = studentSlice.actions

// THUNKS
export function setAccount(account) {
  return (dispatch) => {
    dispatch(studentSlice.actions.setAccount(account))
    return account.id
  }
}

export function setInfo(accountID) {
  return async (dispatch) => {
    try {
      const studentInfo = await FBGateWay.getStudent(accountID)
      dispatch(
        studentSlice.actions.setInfo({
          firstName: studentInfo.firstName,
          lastName: studentInfo.lastName,
          gender: studentInfo.gender,
          birthdate: studentInfo.birthdate,
          address: studentInfo.address,
        })
      )
      return studentInfo.class
    } catch (err) {
      throw new Error(err)
    }
  }
}

export function setClass(studentClass) {
  return (dispatch) => {
    if (studentClass) {
      dispatch(
        studentSlice.actions.setClass({
          id: studentClass.reference.id,
          name: studentClass.name,
          description: studentClass.description,
          photoURL: studentClass.photoURL,
          numberOfSubjects: studentClass.numberOfSubjects,
        })
      )
    }
  }
}

export function setSubjectsOfClass(classRefPath) {
  return async (dispatch) => {
    try {
      const subjects = await FBGateWay.getSujectsOfClass(classRefPath)
      dispatch(studentSlice.actions.setSubjectsOfClass(subjects))
    } catch (err) {
      throw new Error(err)
    }
  }
}

// SELECTORS
export const studentAccountSelector = (state) => state.student.account
export const studentInfoSelector = (state) => state.student.info
export const studentClassSelector = (state) => state.student.class
export const studentExamAttemptsSelector = (state) => state.student.examAttempts
