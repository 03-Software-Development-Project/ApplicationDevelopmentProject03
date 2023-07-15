import firestore from '@react-native-firebase/firestore'

class CloudFirestoreError extends Error {
  constructor(err) {
    super(err.message)
    this.name = 'CloudFirestoreError'
    this.code = err.code
  }
}
const db = {
  async getStudent(studentID) {
    try {
      const doc = await firestore().collection('students').doc(studentID).get()
      if (doc.exists) {
        return doc.data()
      }
      throw new CloudFirestoreError('No such student!', 'no-doc')
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async getSujectsOfClass(classRefPath) {
    try {
      const querySnapshot = await firestore()
        .doc(classRefPath)
        .collection('subjects')
        .orderBy('name')
        .get()
      if (!querySnapshot.empty) {
        return querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
      }
      throw new CloudFirestoreError(
        `"subjects" collection of the "${classRefPath}" class is non-existent`,
        'no-docs'
      )
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
        return querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
      }
      throw new CloudFirestoreError(
        '"classes" collection is non-existent',
        'no-docs'
      )
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },
}
Object.freeze(db)
export default db
