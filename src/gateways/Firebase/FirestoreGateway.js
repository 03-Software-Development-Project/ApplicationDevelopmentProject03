import firestore from '@react-native-firebase/firestore'

class FirestoreError extends Error {
  constructor(error) {
    super(`${error.code}: ${error.message}`)
    this.name = 'FirestoreError'
  }
}
const db = {
  async insertStudent(studentID, firstName, lastName, _class, gender, birthdate, address) {
    try {
      const docRef = firestore().collection('students').doc(studentID)
      await docRef.set({
        firstName,
        lastName,
        class: _class,
        gender,
        birthdate,
        address,
      })
      return docRef
    } catch (error) {
      throw new FirestoreError(error)
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
      throw new FirestoreError(error)
    }
  },
}
Object.freeze(db)
export default db
