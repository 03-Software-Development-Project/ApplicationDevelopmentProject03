/* eslint-disable no-param-reassign */
import {createSelector, createSlice} from '@reduxjs/toolkit'
import {FirebaseGateway} from './gateways'
import {
  accountSelector,
  infoSelector,
  restoreLoginState,
} from './redux/slices/studentSlice'

const stateSlice = createSlice({
  name: 'AppViewModel',
  initialState: {
    error: null,
    data: {
      isDebugModeOn: false,
      isInitializing: true,
      isStudenAuthStateListenerTriggered: false,
    },
  },
  reducers: {
    finishedInitializing: (state) => {
      state.data.isInitializing = false
    },
    triggerStudenAuthStateListener: (state) => {
      state.data.isStudenAuthStateListenerTriggered = true
    },
    handleError: (state, action) => {
      state.error = action.payload
    },
    dismissError: (state) => {
      state.error = null
    },
    setDebugMode: (state, action) => {
      state.data.isDebugModeOn = action.payload
    },
  },
})

const AppViewModel = {
  sliceReducer: stateSlice.reducer,
  actions: stateSlice.actions,
  selfSelector: (state) => state.AppViewModel,
}

export default AppViewModel
export const {
  finishedInitializing,
  triggerStudenAuthStateListener,
  handleError,
  dismissError,
  setDebugMode,
} = AppViewModel.actions

// THUNKS
export function listenToStudentAuthState() {
  return (dispatch, getState) => {
    const subscriber = FirebaseGateway.onStudentAuthStateChanged(
      async (account) => {
        /*
        Khi điểm đầu vào của ứng dụng là App.jsx khởi tạo, nó sẽ lắng nghe
        các thay đổi về trạng thái xác thực của người dùng. Và đây là listener
        để xử lý điều này

        Ở trạng thái ban đầu listener sẽ được kích hoạt 2 lần nhưng có cùng
        tham số account truyền vào. Vì vậy cần sử dụng các câu lệnh điều kiện để
        bỏ qua lần chạy thứ 2
        Ở trạng thái ban đầu sẽ có 2 trường hợp xảy ra:
        + Người dùng được chuyển hướng vô trang Home
        + Người dùng được chuyển hướng vô trang Login

        Sau trạng thái ban đầu là lúc người dùng đang ở trang Home hoặc trang
        Login thì sẽ có 2 trường hợp xảy ra:
        + Người dùng bấm nút đăng nhập ở trang Login
        + Người dùng bấm nút đăng xuất ở trang Home
        Lưu ý lúc này khi người dùng bấm đăng nhập hoặc đăng xuất thi` listener
        không xử lý (có ghi rõ điều kiện xảy ra các trường hợp này ở bên dưới)
        */

        const isStudentSignedIn = isStudentSignedInSelector(getState())
        const isInitializing = isInitializingSelector(getState())
        const isStudenAuthStateListenerTriggered =
          isStudenAuthStateListenerTriggeredSelector(getState())
        try {
          if (isStudenAuthStateListenerTriggered) {
            return
          }
          dispatch(triggerStudenAuthStateListener())

          if (account && !isStudentSignedIn && isInitializing) {
            // Người dùng được chuyển hướng vô trang Home
            await dispatch(restoreLoginState(account))
            dispatch(finishedInitializing())
          }
          // Người dùng được chuyển hướng vô trang Login
          else if (!account && !isStudentSignedIn && isInitializing) {
            dispatch(finishedInitializing())
          }
          // Người dùng bấm nút đăng nhập ở trang Login
          // else if (account && !isStudentSignedIn && !isInitializing) {
          // }
          // Người dùng bấm nút đăng xuất ở trang Home
          // else if (!account && isStudentSignedIn && !isInitializing) {
          // }
        } catch (err) {
          const {name, code, message} = err
          dispatch(handleError({name, code, message}))
          dispatch(finishedInitializing())
        }
      }
    )
    return subscriber
  }
}

// SELECTORS
/*
isStudentSignedInSelector cũng dùng để kiểm tra người dùng có đăng nhập hay chưa nhưng với đảm bảo rằng state.student.account và state.student.class đều đã có dữ liệu. Điều này được sử dụng để đợi dữ liệu người dùng đc lấy về đầy đủ thì mới chuyển hướng đến trang Home
*/
export const isStudentSignedInSelector = createSelector(
  accountSelector,
  infoSelector,
  (studentAccount, studentInfo) => studentAccount != null && studentInfo != null
)
export const isInitializingSelector = createSelector(
  AppViewModel.selfSelector,
  (vm) => vm.data.isInitializing
)
export const isStudenAuthStateListenerTriggeredSelector = createSelector(
  AppViewModel.selfSelector,
  (vm) => vm.data.isStudenAuthStateListenerTriggered
)
export const errorSelector = createSelector(
  AppViewModel.selfSelector,
  (vm) => vm.error
)
export const isDebugModeOnSelector = createSelector(
  AppViewModel.selfSelector,
  (vm) => vm.data.isDebugModeOn
)
