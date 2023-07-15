/* eslint-disable no-param-reassign */
import {createSelector, createSlice} from '@reduxjs/toolkit'
import {FirebaseGateway} from './gateways'
import {
  removeAll,
  setAccount,
  setClass,
  setInfo,
  studentAccountSelector,
  studentInfoSelector,
} from './redux/slices/studentSlice'
const stateSlice = createSlice({
  name: 'AppViewModel',
  initialState: {
    error: null,
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
      state.error = null
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
        Lưu ý lúc này khi người dùng bấm đăng nhập hoặc đăng xuất listener chỉ
        kích hoạt 1 lần
        */

        const isStudentAccountSet = isStudentAccountSetSelector(getState())
        const isInitializing = isInitializingSelector(getState())
        try {
          // Người dùng được chuyển hướng vô trang Home
          if (account && !isStudentAccountSet && isInitializing) {
            await dispatch(signIn(account))
            dispatch(finishedInitializing())
          }
          // Người dùng được chuyển hướng vô trang Login
          else if (!account && !isStudentAccountSet && isInitializing) {
            dispatch(finishedInitializing())
          }
          // Người dùng bấm nút đăng nhập ở trang Login
          else if (account && !isStudentAccountSet && !isInitializing) {
            await dispatch(signIn(account))
          }
          // Người dùng bấm nút đăng xuất ở trang Home
          else if (!account && isStudentAccountSet && !isInitializing) {
            dispatch(signOut())
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
      const studentClass = await dispatch(setInfo(studentID))
      dispatch(setClass(studentClass))
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
/*
isStudentAccountSetSelector được dùng để kiểm tra người dùng có đăng nhập hay
chưa bằng việc kiểm tra state.student.account khác rỗng, ở đây bỏ qua
state.student.info khác rỗng vì:
  + state.student.account khác rỗng thì state.student.info cũng khác rỗng
  + tate.student.account rỗng thì state.student.info cũng rỗng
Điều này luôn đúng nên kiểm tra state.student.info 	là dư thừa để biết
người dùng có đăng nhập hay chưa, ngoài ra còn gây lỗi đối với việc bỏ
qua lần kích hoạt listener thứ hai ở trạng thái ban đầu
*/
export const isStudentAccountSetSelector = createSelector(
  studentAccountSelector,
  (studentAccount) => studentAccount != null
)

/*
isStudentSignedInSelector cũng dùng để kiểm tra người dùng có đăng nhập hay chưa nhưng với đảm bảo rằng state.student.account và state.student.class đều đã có dữ liệu. Điều này được sử dụng để đợi dữ liệu người dùng đc lấy về đầy đủ thì mới chuyển hướng đến trang Home
*/
export const isStudentSignedInSelector = createSelector(
  studentAccountSelector,
  studentInfoSelector,
  (studentAccount, studentInfo) => studentAccount != null && studentInfo != null
)
export const isInitializingSelector = createSelector(
  AppViewModel.selfSelector,
  (vm) => vm.data.isInitializing
)
export const errorSelector = createSelector(
  AppViewModel.selfSelector,
  (vm) => vm.error
)
