/* eslint-disable no-param-reassign */
import {createSlice, createSelector} from '@reduxjs/toolkit'
import {
  setClass,
  classSelector,
  accountSelector,
} from '../../redux/slices/studentSlice'
import {isDebugModeOnSelector} from '../../AppViewModel'
import {FirebaseGateway} from '../../gateways'

const stateSlice = createSlice({
  name: 'HomeScreenViewModel',
  initialState: {
    error: null,
    data: {
      isDebugModeOn: false,
      classes: null,
      enrollPrompt: null,
    },
  },
  reducers: {
    setClasses: (state, action) => {
      state.data.classes = action.payload
    },

    setEnrollPrompt: (state, action) => {
      state.data.enrollPrompt = action.payload
    },

    dismissEnrollPrompt: (state) => {
      state.data.enrollPrompt = null
    },

    handleError: (state, action) => {
      state.error = action.payload
    },
    dismissError: (state) => {
      state.error = null
    },
  },
})

const HomeScreenViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.HomeScreenViewModel,
}

export default HomeScreenViewModel
export const {
  setClasses,
  setEnrollPrompt,
  dismissEnrollPrompt,
  handleError,
  dismissError,
} = HomeScreenViewModel.actions

// THUNKS
export function getClasses() {
  return async (dispatch) => {
    try {
      const classes = await FirebaseGateway.getClasses(10)
      dispatch(setClasses(classes))
    } catch (err) {
      const {name, message, code} = err
      dispatch(handleError({name, message, code}))
    }
  }
}

export function openEnrollPrompt(selectedClassId) {
  return async (dispatch, getState) => {
    try {
      const currentClass = classSelector(getState())
      if (currentClass) {
        dispatch(
          setEnrollPrompt({
            selectedClassId: null,
            visible: true,
            title: 'Nhập mã tham gia lớp',
            subtitle: 'Vui lòng nhập mã tham gia để vào lớp học',
            textInput: {
              editable: false,
              leftIcon: {
                name: 'warning-outline',
                color: 'danger.700',
              },
              placeholder: {
                text: 'Bạn đã tham gia vào một lớp',
                color: 'danger.400',
              },
            },
            submitBtnText: 'Đến lớp của bạn',
            cancelBtnText: 'Hủy',
          })
        )
      } else {
        dispatch(
          setEnrollPrompt({
            selectedClassId,
            visible: true,
            title: 'Nhập mã tham gia lớp',
            subtitle: 'Vui lòng nhập mã tham gia để vào lớp học',
            textInput: {
              editable: true,
              leftIcon: {
                name: 'lock-closed-outline',
                color: 'info.700',
              },
              placeholder: {
                text: 'Nhập mã tham gia',
              },
            },
            submitBtnText: 'Tham gia',
            cancelBtnText: 'Hủy',
          })
        )
      }
    } catch (err) {
      const {name, message, code} = err
      dispatch(handleError({name, message, code}))
    }
  }
}

export function enrollClass(classId, joinCode) {
  return async (dispatch, getState) => {
    try {
      const {id: currentStudent} = accountSelector(getState())
      const studentRefPath = `students/${currentStudent}`
      const classRefPath = `classes/${classId}`
      const classRef = await FirebaseGateway.enrollClass(
        studentRefPath,
        classRefPath,
        joinCode
      )
      dispatch(setClass({refPath: classRef.path}))
    } catch (err) {
      const {name, message, code} = err
      switch (code) {
        case '[class-enrollment] wrong-join-code':
          throw new Error(message)
        default:
          dispatch(handleError({name, message, code}))
          break
      }
    }
  }
}

// SELECTORS
export const errorSelector = createSelector(
  HomeScreenViewModel.selfSelector,
  (vm) => vm.error
)

export const classesSelector = createSelector(
  HomeScreenViewModel.selfSelector,
  (vm) => vm.data.classes
)

export const enrollPromptSelector = createSelector(
  HomeScreenViewModel.selfSelector,
  (vm) => vm.data.enrollPrompt
)

export const isAppDebugModeOnSelector = createSelector(
  isDebugModeOnSelector,
  (isAppDebugModeOn) => isAppDebugModeOn
)
