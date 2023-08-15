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
      const doc = await firestore().doc(`students/${studentID}`).get()
      if (doc.exists) {
        const student = doc.data()
        if (student.class) {
          student.class.refPath = student.class.reference.path
          delete student.class.reference
        }
        return student
      }
      throw new CloudFirestoreError('No such student!', 'no-doc')
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async getExamAttempt(examAttemptRefPath) {
    try {
      const doc = await firestore().doc(examAttemptRefPath).get()
      if (doc.exists) {
        const examAttempt = doc.data()
        const startDateString = examAttempt.startDate.toDate().toLocaleString()
        examAttempt.id = doc.id
        examAttempt.refPath = doc.ref.path
        examAttempt.startDate = startDateString
        examAttempt.questions = []
        return examAttempt
      }
      throw new CloudFirestoreError('No such exam attempt!', 'no-doc')
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async getClass(classRefPath) {
    try {
      const doc = await firestore().doc(classRefPath).get()
      if (doc.exists) {
        const $class = doc.data()
        const [, createdDateString] = $class.createdDate
          .toDate()
          .toLocaleString()
          .split(',')
        $class.id = doc.id
        $class.refPath = doc.ref.path
        $class.createdDate = createdDateString
        $class.subjects = []
        return $class
      }
      throw new CloudFirestoreError('No such class!', 'no-doc')
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async getSubject(subjectRefPath) {
    try {
      const doc = await firestore().doc(subjectRefPath).get()
      if (doc.exists) {
        const subject = doc.data()
        subject.id = doc.id
        subject.refPath = doc.ref.path
        subject.chapters = []
        return subject
      }
      throw new CloudFirestoreError('No such subject!', 'no-doc')
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async getChapter(chapterRefPath) {
    try {
      const doc = await firestore().doc(chapterRefPath).get()
      if (doc.exists) {
        const chapter = doc.data()
        chapter.id = doc.id
        chapter.refPath = doc.ref.path
        chapter.questions = []
        return chapter
      }
      throw new CloudFirestoreError('No such chapter!', 'no-doc')
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
        return querySnapshot.docs.map((doc) => {
          const subject = doc.data()
          subject.id = doc.id
          subject.refPath = doc.ref.path
          subject.chapters = []
          return subject
        })
      }
      throw new CloudFirestoreError(
        `"subjects" collection of the "${classRefPath}" class is non-existent`,
        'no-docs'
      )
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async getChaptersOfSubject(subjectRefPath) {
    try {
      const querySnapshot = await firestore()
        .doc(subjectRefPath)
        .collection('chapters')
        .orderBy('ord')
        .get()
      if (!querySnapshot.empty) {
        return querySnapshot.docs.map((doc) => {
          const chapter = doc.data()
          chapter.id = doc.id
          chapter.refPath = doc.ref.path
          chapter.questions = []
          return chapter
        })
      }
      throw new CloudFirestoreError(
        `"chapters" collection of the "${subjectRefPath}" subject is non-existent`,
        'no-docs'
      )
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async getQuestionsOfChapter(chapterRefPath) {
    try {
      const querySnapshot = await firestore()
        .doc(chapterRefPath)
        .collection('questions')
        .orderBy('difficulty')
        .get()
      if (!querySnapshot.empty) {
        return querySnapshot.docs.map((doc) => {
          const question = doc.data()
          question.id = doc.id
          question.refPath = doc.ref.path
          return question
        })
      }
      throw new CloudFirestoreError(
        `"questions" collection of the "${chapterRefPath}" chapter is non-existent`,
        'no-docs'
      )
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async getQuestionsOfExamAttempt(examAttemptRefPath) {
    try {
      const querySnapshot = await firestore()
        .doc(examAttemptRefPath)
        .collection('questions')
        .orderBy('difficulty')
        .get()
      if (!querySnapshot.empty) {
        return querySnapshot.docs.map((doc) => {
          const question = doc.data()
          question.id = doc.id
          question.refPath = doc.ref.path
          return question
        })
      }
      throw new CloudFirestoreError(
        `"questions" collection of the "${examAttemptRefPath}" exam attempt is non-existent`,
        'no-docs'
      )
    } catch (err) {
      throw new CloudFirestoreError('123')
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
        return querySnapshot.docs.map((doc) => {
          const $class = doc.data()
          $class.id = doc.id
          $class.createdDate = $class.createdDate.toDate().toLocaleDateString()
          return $class
        })
      }
      throw new CloudFirestoreError(
        '"classes" collection is non-existent',
        'no-collection'
      )
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async createExamAttempt(studentID, questions) {
    try {
      const examAttemptRef = firestore()
        .doc(`students/${studentID}`)
        .collection('examAttempts')
        .doc()
      await examAttemptRef.set({
        startDate: firestore.Timestamp.fromDate(new Date()),
        endDate: null,
      })
      await Promise.all(
        questions.map(async (question) => {
          await examAttemptRef.collection('questions').doc(question.id).set({
            question: question.question,
            difficulty: question.difficulty,
            score: 3,
            answers: question.answers,
            correctAnswer: question.correctAnswer,
            isCorrect: null,
          })
        })
      )
      return examAttemptRef.path
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async deleteExamAttempt(examAttemptRefPath) {
    try {
      await firestore().doc(examAttemptRefPath).delete()
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async updateExamAttemptQuestion(questionRefPath, updateData) {
    try {
      await firestore().doc(questionRefPath).update(updateData)
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async getExamAttemptQuestion(questionRefPath) {
    try {
      const doc = await firestore().doc(questionRefPath).get()
      if (doc.exists) {
        const question = doc.data()
        question.id = doc.id
        question.refPath = doc.ref.path
        return question
      }
      throw new CloudFirestoreError('No such exam attempt question!', 'no-doc')
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },

  async enrollClass(studentRefPath, classRefPath, joinCode) {
    try {
      const classRef = firestore().doc(classRefPath)
      const query = await classRef
        .collection('privateData')
        .where('joinCode', '==', joinCode)
        .count()
        .get()
      const queryReult = query.data()
      if (queryReult.count) {
        await firestore()
          .doc(studentRefPath)
          .update({
            class: {
              reference: classRef,
            },
          })
        return classRef
      }
      throw new CloudFirestoreError({
        message: 'Mã tham gia không đúng',
        code: '[class-enrollment] wrong-join-code',
      })
    } catch (err) {
      throw new CloudFirestoreError(err)
    }
  },
}
Object.freeze(db)
export default db
