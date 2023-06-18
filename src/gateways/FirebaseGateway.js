import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

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
  async insertStudent(firstName, lastName, classRef, phoneNumber, gender, birthdate, address) {
    try {
      const docRef = await firestore()
        .collection('students')
        .add({
          firstName,
          lastName,
          class: classRef && {[classRef.id]: {self: true}},
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
  async insertExamAttempt(studentRef, state, examRef, subjectRef, classRef, startDate, endDate) {
    try {
      const docRef = await studentRef.collection('examAttempts').add({
        state,
        exam: examRef && {[examRef.id]: {self: true}},
        subject: subjectRef && {[subjectRef.id]: {self: true}},
        class: classRef && {[classRef.id]: {self: true}},
        startDate,
        endDate,
      })
      return docRef
    } catch (error) {
      throw new Error(`(method) insertExamAttempt\n${error}\n`)
    }
  },

  async insertExamAttemptQuestion(
    examAttemptRef,
    ord,
    score,
    isCorrect,
    content,
    level,
    solutionA,
    solutionB,
    solutionC,
    solutionD,
    rightSolution,
    classRef,
    subjectRef,
    chapterRef
  ) {
    try {
      const docRef = await examAttemptRef.collection('questions').add({
        ord,
        score,
        isCorrect,
        content,
        level,
        solutionA,
        solutionB,
        solutionC,
        solutionD,
        rightSolution,
        classRef: classRef && {[classRef.id]: {self: true}},
        subjectRef: subjectRef && {[subjectRef.id]: {self: true}},
        chapterRef: chapterRef && {[chapterRef.id]: {self: true}},
      })
      return docRef
    } catch (error) {
      throw new Error(`(method) insertExamAttemptQuestion\n${error}\n`)
    }
  },

  async insertClass(name, description, createdDate, joinCode) {
    try {
      const docRef = await firestore().collection('classes').add({
        name,
        description,
        createdDate,
      })
      await docRef.collection('privateData').doc('document').set({
        joinCode,
      })
      return docRef
    } catch (error) {
      throw new Error(`(method) insertClass\n${error}\n`)
    }
  },

  async insertSubject(classRef, name, description) {
    try {
      const docRef = await classRef.collection('subjects').add({
        name,
        description,
      })
      return docRef
    } catch (error) {
      throw new Error(`(method) insertSubject\n${error}\n`)
    }
  },

  async insertChapter(subjectRef, name, description, ord) {
    try {
      const docRef = await subjectRef.collection('chapters').add({
        name,
        description,
        ord,
      })
      return docRef
    } catch (error) {
      throw new Error(`(method) insertChapter\n${error}\n`)
    }
  },

  async insertChapterQuestion(
    chapterRef,
    content,
    level,
    solutionA,
    solutionB,
    solutionC,
    solutionD,
    rightSolution
  ) {
    try {
      const docRef = await chapterRef.collection('questions').add({
        content,
        level,
        solutionA,
        solutionB,
        solutionC,
        solutionD,
        rightSolution,
      })
      return docRef
    } catch (error) {
      throw new Error(`(method) insertChapterQuestion\n${error}\n`)
    }
  },

  async insertExam(subjectRef, name, description, level, duration) {
    try {
      const docRef = await subjectRef.collection('exams').add({
        name,
        description,
        level,
        duration,
      })
      return docRef
    } catch (error) {
      throw new Error(`(method) insertChapterQuestion\n${error}\n`)
    }
  },

  async insertExamQuestion(
    examRef,
    ord,
    score,
    content,
    level,
    solutionA,
    solutionB,
    solutionC,
    solutionD,
    rightSolution,
    classRef,
    subjectRef,
    chapterRef
  ) {
    try {
      const docRef = await examRef.collection('questions').add({
        ord,
        score,
        content,
        level,
        solutionA,
        solutionB,
        solutionC,
        solutionD,
        rightSolution,
        classRef: classRef && {[classRef.id]: {self: true}},
        subjectRef: subjectRef && {[subjectRef.id]: {self: true}},
        chapterRef: chapterRef && {[chapterRef.id]: {self: true}},
      })
      return docRef
    } catch (error) {
      throw new Error(`(method) insertExamQuestion\n${error}\n`)
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
