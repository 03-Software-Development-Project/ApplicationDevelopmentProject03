/* eslint-disable no-param-reassign */
import {createSelector, createSlice} from '@reduxjs/toolkit'
import {removeAll, studentAccountSelector} from './redux/slices/studentSlice'
import {StudentRepository} from './repositories'
const stateSlice = createSlice({
  name: 'AppViewModel',
  initialState: {
    error: {},
    data: {
      isInitializing: true,
    },
  },
  reducers: {
    finishedInitializing: (state) => {
      state.data.isInitializing = false
    },
    handleError: (state, action) => {
      state.error = action.payload
    },
    dismissError: (state) => {
      state.error = {}
    },
  },
})

const AppViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.AppViewModel,
}

export default AppViewModel
export const {finishedInitializing, handleError, dismissError} =
  AppViewModel.actions

// THUNKS
export function listenToStudentAuthState() {
  return (dispatch, getState) => {
    const subscriber = StudentRepository.onStudentAuthStateChanged(
      async (account) => {
        try {
          await new Promise(async (resolve, reject) => {
            // Neu xay ra loi
            if (Object.keys(errorSelector(getState())).length !== 0) {
              resolve()
            } // Khi nguoi dung dang dang nhap hoac da dang nhap
            else if (account && !isStudentSignedInSelector(getState())) {
              await dispatch(signIn(account)).catch((err) => {
                reject(err)
              })
              resolve()
            }
            // Khi nguoi dung dang xuat
            else if (!account && isStudentSignedInSelector(getState())) {
              dispatch(signOut())
              resolve()
            } // Khi nguoi dung chua tung dang nhap
            else if (!account && !isStudentSignedInSelector(getState())) {
              resolve()
            }
          })
          if (isInitializingSelector(getState())) {
            dispatch(finishedInitializing())
          }
        } catch (err) {
          const {name, code, message} = err
          dispatch(handleError({name, code, message}))
        }
      }
    )
    return subscriber
  }
}

function signIn(account) {
  return async (dispatch) => {
    try {
      const studentID = dispatch(setAccount(account))
      await dispatch(setInfo(studentID))
    } catch (err) {
      throw new Error(err)
    }
  }
}

function signOut() {
  return (dispatch) => {
    dispatch(removeAll())
  }
}

// SELECTORS
export const isStudentSignedInSelector = createSelector(
  studentAccountSelector,
  (studentAccount) => Object.keys(studentAccount).length !== 0
)
export const isInitializingSelector = createSelector(
  AppViewModel.selfSelector,
  (vm) => vm.data.isInitializing
)
export const errorSelector = createSelector(
  AppViewModel.selfSelector,
  (vm) => vm.error
)
