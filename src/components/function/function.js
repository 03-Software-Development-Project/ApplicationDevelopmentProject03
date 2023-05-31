import firebase from "../../../firebase";

export const signUpUser = async (email, password) => {
    try {
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
    
        await firebase.firestore().collection('users').doc(user.uid).set({
          email: email,
          name: "",
          age: "",
          // Thêm các thông tin khác của người dùng vào đây
        });
    
        console.log('Đăng ký thành công!');
        // Xử lý thành công, ví dụ: chuyển hướng, hiển thị thông báo, v.v.
      } catch (error) {
        console.log('Lỗi đăng ký:', error);
        // Xử lý lỗi, ví dụ: hiển thị thông báo lỗi
      }
};