import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const Auth = {
  async signUp(email, password) {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password)
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
      const userCredential = await auth().signInWithEmailAndPassword(email, password)
      return userCredential
    } catch (error) {
      throw new Error('Failed to sign in')
    }
  },
  async signOut() {
    try {
      const message = auth()
        .signOut()
        .then(() => 'User signed out!')
      return message
    } catch (error) {
      throw new Error('Failed to sign out')
    }
  },
}
Object.freeze(Auth)

const Firestore = {
  async insertStudent(
    id,
    classRef,
    imageUrl,
    firstName,
    lastName,
    phoneNumber,
    gender,
    birthdate,
    address
  ) {
    try {
      const docRef = firestore().collection('students').doc(id)
      await docRef.set({
        class: classRef && {ref: classRef},
        imageUrl,
        firstName,
        lastName,
        phoneNumber,
        gender,
        birthdate,
        address,
      })
      return docRef
    } catch (error) {
      throw new Error(`(method) insertStudent\n${error}\n`)
    }
  },

  async getUser(studentID) {
    try {
      const doc = await firestore().collection('students').doc(studentID).get()
      if (doc.exists()) {
        return doc
      }
      throw new Error('(method) getUser: No such document!')
    } catch (error) {
      throw new Error(`(method) getUser\n${error}\n`)
    }
  },
}
Object.freeze(Firestore)

const Storage = {}
Object.freeze(Storage)

const FirebaseGateway = {
  ...Firestore,
  ...Auth,
  ...Storage,
}
export default FirebaseGateway
