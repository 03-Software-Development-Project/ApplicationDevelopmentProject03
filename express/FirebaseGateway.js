const {initializeApp, cert} = require('firebase-admin/app')
const {getFirestore, FieldValue} = require('firebase-admin/firestore')
const {getAuth} = require('firebase-admin/auth')
const serviceAccount = require('./serviceAccountKey.json')

initializeApp({
  credential: cert(serviceAccount),
})

const firestore = getFirestore()
const firebaseAuth = getAuth()

const auth = {
  async deleteAllUsers(nextPageToken) {
    try {
      const listUsersResult = await firebaseAuth.listUsers(1000, nextPageToken)
      const uids = listUsersResult.users.map((userRecord) => userRecord.uid)
      const result = [await firebaseAuth.deleteUsers(uids)]
      if (!listUsersResult.pageToken) {
        return result
      }
      result.concat(await auth.deleteAllUsers(listUsersResult.pageToken))
      return result
    } catch (error) {
      throw new Error(`(method) auth.deleteAllUsers\n${error} ${error.code}\n`)
    }
  },

  async createUser(
    email,
    emailVerified,
    phoneNumber,
    password,
    displayName,
    photoURL,
    disabled
  ) {
    try {
      const user = await firebaseAuth.createUser({
        email,
        emailVerified,
        phoneNumber,
        password,
        displayName,
        photoURL,
        disabled,
      })
      return user
    } catch (error) {
      throw new Error(`(method) auth.createUser\n${error} ${error.code}\n`)
    }
  },
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
      const docRef = firestore.collection('students').doc(studentID)
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
      throw new Error(`(method) db.insertStudent\n${error} ${error.code}\n`)
    }
  },

  async insertClass(
    classID,
    photoURL,
    name,
    description,
    joinCode,
    numberOfSubjects,
    createdDate = FieldValue.serverTimestamp()
  ) {
    try {
      const docRef = firestore.collection('classes').doc(classID)
      await docRef.set({
        photoURL,
        name,
        description,
        numberOfSubjects,
        createdDate,
      })
      await docRef.collection('privateData').doc('document').set({
        joinCode,
      })
      return docRef
    } catch (error) {
      throw new Error(`(method) db.insertClass\n${error} ${error.code}\n`)
    }
  },

  async insertSubject(
    subjectID,
    name,
    description,
    numberOfChapters,
    classRefPath
  ) {
    try {
      const docRef = firestore
        .doc(classRefPath)
        .collection('subjects')
        .doc(subjectID)
      await docRef.set({
        name,
        description,
        numberOfChapters,
      })
      return docRef
    } catch (error) {
      throw new Error(`(method) db.insertSubject\n${error} ${error.code}\n`)
    }
  },

  async insertChapter(
    chapterID,
    ord,
    name,
    description,
    numberOfQuestions,
    subjectRefPath
  ) {
    try {
      const docRef = firestore
        .doc(subjectRefPath)
        .collection('chapters')
        .doc(chapterID)
      await docRef.set({
        ord,
        name,
        description,
        numberOfQuestions,
      })
      return docRef
    } catch (error) {
      throw new Error(`(method) db.insertChapter\n${error} ${error.code}\n`)
    }
  },

  async insertQuestion(
    questionID,
    difficulty,
    content,
    solutionA,
    solutionB,
    solutionC,
    solutionD,
    rightSolution,
    chapterRefPath
  ) {
    try {
      const docRef = firestore
        .doc(chapterRefPath)
        .collection('questions')
        .doc(questionID)
      await docRef.set({
        difficulty,
        question: content,
        answers: [
          {
            id: 'A',
            text: solutionA,
          },
          {
            id: 'B',
            text: solutionB,
          },
          {
            id: 'C',
            text: solutionC,
          },
          {
            id: 'D',
            text: solutionD,
          },
        ],
        correctAnswer: rightSolution.replace('solution', ''),
      })
      return docRef
    } catch (error) {
      throw new Error(`(method) db.insertQuestion\n${error} ${error.code}\n`)
    }
  },
}

const dataSampleFunctions = {
  async registerStudent({
    email,
    emailVerified,
    phoneNumber,
    password,
    displayName,
    photoURL,
    disabled,
  }) {
    try {
      const user = await auth.createUser(
        email,
        emailVerified,
        phoneNumber,
        password,
        displayName,
        photoURL,
        disabled
      )
      return user
    } catch (error) {
      throw new Error(
        `(method) dataSampleFunctions.registerStudent\n${error} ${error.code}\n`
      )
    }
  },
  async insertStudent(student, _class) {
    const {studentID, firstName, lastName, gender, birthdate, address} = student
    const {reference} = _class
    try {
      const studentRef = await db.insertStudent(
        studentID,
        firstName,
        lastName,
        {
          reference,
        },
        gender,
        birthdate,
        address
      )
      return studentRef
    } catch (error) {
      throw new Error(
        `(method) dataSampleFunctions.insertStudent\n${error} ${error.code}\n`
      )
    }
  },
  async insertClass({
    classID,
    photoURL,
    name,
    description,
    joinCode,
    numberOfSubjects,
  }) {
    try {
      const classRef = await db.insertClass(
        classID,
        photoURL,
        name,
        description,
        joinCode,
        numberOfSubjects
      )
      return classRef
    } catch (error) {
      throw new Error(
        `(method) dataSampleFunctions.insertClass\n${error} ${error.code}\n`
      )
    }
  },
  async insertSubject(
    {subjectID, name, description, numberOfChapters},
    classRefPath
  ) {
    try {
      const subjectRef = await db.insertSubject(
        subjectID,
        name,
        description,
        numberOfChapters,
        classRefPath
      )
      return subjectRef
    } catch (error) {
      throw new Error(
        `(method) dataSampleFunctions.insertSubject\n${error} ${error.code}\n`
      )
    }
  },

  async insertChapter(
    {chapterID, ord, name, description, numberOfQuestions},
    subjectRefPath
  ) {
    try {
      const chapterRef = await db.insertChapter(
        chapterID,
        ord,
        name,
        description,
        numberOfQuestions,
        subjectRefPath
      )
      return chapterRef
    } catch (error) {
      throw new Error(
        `(method) dataSampleFunctions.insertChapter\n${error} ${error.code}\n`
      )
    }
  },

  async insertQuestion(
    {
      questionID,
      difficulty,
      content,
      solutionA,
      solutionB,
      solutionC,
      solutionD,
      rightSolution,
    },
    chapterRefPath
  ) {
    try {
      const questionRef = await db.insertQuestion(
        questionID,
        difficulty,
        content,
        solutionA,
        solutionB,
        solutionC,
        solutionD,
        rightSolution,
        chapterRefPath
      )
      return questionRef
    } catch (error) {
      throw new Error(
        `(method) dataSampleFunctions.insertQuestion\n${error} ${error.code}\n`
      )
    }
  },

  async insertSampleDataFromJsonData({
    classes,
    subjects,
    chapters,
    questions,
    accounts,
    students,
  }) {
    try {
      await Promise.all(
        classes.map(async (_class) => {
          const classRef = await dataSampleFunctions.insertClass(_class)
          await Promise.all(
            students
              .filter((student) => student.classID === classRef.id)
              .map(async (student) => {
                const user = await dataSampleFunctions.registerStudent(
                  accounts.filter(
                    (account) => account.studentID === student.studentID
                  )[0]
                )
                await dataSampleFunctions.insertStudent(
                  {...student, studentID: user.uid},
                  {reference: classRef}
                )
              })
          )
          await Promise.all(
            subjects
              .filter((subject) => subject.classID === classRef.id)
              .map(async (subject) => {
                const subjectRef = await dataSampleFunctions.insertSubject(
                  subject,
                  classRef.path
                )
                await Promise.all(
                  chapters
                    .filter((chapter) => chapter.subjectID === subjectRef.id)
                    .map(async (chapter) => {
                      const chapterRef =
                        await dataSampleFunctions.insertChapter(
                          chapter,
                          subjectRef.path
                        )
                      await Promise.all(
                        questions
                          .filter(
                            (question) => question.chapterID === chapterRef.id
                          )
                          .map(async (question) => {
                            await dataSampleFunctions.insertQuestion(
                              question,
                              chapterRef.path
                            )
                          })
                      )
                    })
                )
              })
          )
        })
      )
      return 'Success'
    } catch (error) {
      throw new Error(
        `(method) dataSampleFunctions.insertDataSample\n${error} ${error.code}\n`
      )
    }
  },
}

const FirebaseGateway = {
  ...dataSampleFunctions,
  ...auth,
  ...db,
}
Object.freeze(FirebaseGateway)

module.exports = FirebaseGateway
