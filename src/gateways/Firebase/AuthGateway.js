import firebaseAuth from '@react-native-firebase/auth'

const auth = {
  async signUp(email, password) {
    try {
      const userCredential = await firebaseAuth().createUserWithEmailAndPassword(email, password)
      return userCredential
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('That email address is already in use!')
      }
      if (error.code === 'auth/invalid-email') {
        throw new Error('That email address is invalid!')
      }
      throw error
    }
  },
  async signIn(email, password) {
    try {
      const userCredential = await firebaseAuth().signInWithEmailAndPassword(email, password)
      return userCredential
    } catch (error) {
      throw new Error('Failed to sign in')
    }
  },
  async signOut() {
    try {
      const message = await firebaseAuth()
        .signOut()
        .then(() => 'User signed out')
      return message
    } catch (error) {
      throw new Error('Failed to sign out')
    }
  },
}
Object.freeze(auth)
export default auth
