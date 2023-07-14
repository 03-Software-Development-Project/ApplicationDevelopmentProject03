/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit'
import {FirebaseGateway as FBGateWay} from '../../gateways'
const studentSlice = createSlice({
  name: 'student',
  initialState: {
    info: {},
    account: {},
    class: {},
    examAttempts: {},
  },
  reducers: {
    removeAll: (state) => {
      state.info = {}
      state.account = {}
      state.class = {}
      state.examAttempt = {}
    },
    setInfo: (state, action) => {
      state.info = action.payload
    },
    setAccount: (state, action) => {
      state.account = action.payload
    },
  },
})

export default studentSlice.reducer
export const {removeAll} = studentSlice.actions

// THUNKS
export function setInfo(accountID) {
  return async (dispatch) => {
    try {
      const doc = await FBGateWay.getStudent(accountID)
      const studentInfo = doc.data()
      dispatch(
        studentSlice.actions.setInfo({
          firstName: studentInfo.firstName,
          lastName: studentInfo.lastName,
          gender: studentInfo.gender,
          birthdate: studentInfo.birthdate,
          address: studentInfo.address,
        })
      )
    } catch (err) {
      throw new Error(err)
    }
  }
}
export function setAccount(account) {
  return (dispatch) => {
    dispatch(studentSlice.actions.setAccount(account))
    return account.id
  }
}

// SELECTORS
export const studentInfoSelector = (state) => state.student.info
export const studentAccountSelector = (state) => state.student.account
export const studentClassSelector = (state) => state.student.class
export const studentExamAttemptsSelector = (state) => state.student.examAttempts
