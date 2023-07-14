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
  onAuthStateChanged(listener) {
    return firebaseAuth().onAuthStateChanged(listener)
  },
}
Object.freeze(auth)
export default auth
