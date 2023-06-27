import firebaseAuth from '@react-native-firebase/auth'

class FBAuthenticationErrorError extends Error {
  constructor(message, code) {
    super(message)
    this.name = 'FBAuthenticationErrorError'
    this.code = code
  }
}
const auth = {
  async signUp(email, password) {
    try {
      const userCredential =
        await firebaseAuth().createUserWithEmailAndPassword(email, password)
      return userCredential
    } catch (error) {
      throw new FBAuthenticationErrorError(error.message, error.code)
    }
  },
  async signIn(email, password) {
    try {
      const userCredential = await firebaseAuth().signInWithEmailAndPassword(
        email,
        password
      )
      return userCredential
    } catch (error) {
      throw new FBAuthenticationErrorError(error.message, error.code)
    }
  },
  async signOut() {
    try {
      await firebaseAuth().signOut()
    } catch (error) {
      throw new FBAuthenticationErrorError(error.message, error.code)
    }
  },
}
Object.freeze(auth)
export default auth