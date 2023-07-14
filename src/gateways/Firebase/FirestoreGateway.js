import firestore from '@react-native-firebase/firestore'

class CloudFirestoreError extends Error {
  constructor(err) {
    super(err.message)
    this.name = 'CloudFirestoreError'
    this.code = err.code
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
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async getStudent(studentID) {
    try {
      const doc = await firestore().collection('students').doc(studentID).get()
      if (doc.exists) {
        return doc
      }
      throw new CloudFirestoreError('No such student!', 'no-doc')
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async getClasses(limit) {
    try {
      const querySnapshot = await firestore()
        .collection('classes')
        .orderBy('createdDate')
        .limit(limit)
        .get()
      if (!querySnapshot.empty) {
        return querySnapshot.docs.map((doc) => doc.data())
      }
      throw new CloudFirestoreError(
        '"classes" collection is empty of non-exist',
        'no-docs'
      )
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },
}
Object.freeze(db)
export default db
