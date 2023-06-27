import firestore from '@react-native-firebase/firestore'

class CloudFirestoreError extends Error {
  constructor(message, code) {
    super(message)
    this.name = 'CloudFirestoreError'
    this.code = code
  }
}
const db = {
  async insertStudent(
    studentID,
    firstName,
    lastName,
    _class,
    gender,
    birthdate,
    address
  ) {
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
      throw new CloudFirestoreError(error)
    }
  },

  async getStudent(studentID) {
    try {
      const doc = await firestore().collection('students').doc(studentID).get()
      if (doc.exists()) {
        return doc
      }
      throw new CloudFirestoreError('No such document!', '')
    } catch (error) {
      throw new CloudFirestoreError(error.message, error.code)
    }
  },
}
Object.freeze(db)
export default db
