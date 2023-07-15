import firebaseAuth from '@react-native-firebase/auth'

class FBAuthenticationError extends Error {
  constructor(err) {
    super(err.message)
    this.name = 'FBAuthenticationError'
    this.code = err.code
  }
}
const auth = {
  async signUp(email, password) {
    try {
      const userCredential =
        await firebaseAuth().createUserWithEmailAndPassword(email, password)
      return userCredential
    } catch (err) {
      throw new FBAuthenticationError(err)
    }
  },
  async signIn(email, password) {
    try {
      const userCredential = await firebaseAuth().signInWithEmailAndPassword(
        email,
        password
      )
      return userCredential
    } catch (err) {
      throw new FBAuthenticationError(err)
    }
  },
  async signOut() {
    try {
      await firebaseAuth().signOut()
    } catch (err) {
      throw new FBAuthenticationError(err)
    }
  },
  onStudentAuthStateChanged(listener) {
    return firebaseAuth().onAuthStateChanged(async (user) => {
      if (!user) {
        await listener(null)
        return
      }
      const studentAccount = {
        id: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }
      await listener(studentAccount)
    })
  },
}
Object.freeze(auth)
export default auth
