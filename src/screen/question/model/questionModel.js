import firestore from '@react-native-firebase/firestore'

// eslint-disable-next-line import/prefer-default-export
export const getLimitedQuestions = async (
  dataUserClassId,
  dataSubjectId,
  chapterId
) => {
  try {
    const response = await firestore()
      .collection('classes')
      .doc(dataUserClassId)
      .collection('subjects')
      .doc(dataSubjectId)
      .collection('chapters')
      .doc(chapterId)
      .collection('questions')
      .get()
    const dataRef = response.docs.map((doc) => doc.data())
    const subDataRef = response.docs.map((doc) => doc.id)

    return {dataRef, subDataRef}
  } catch (error) {
    console.error(error)
  }
  //   const desiredDifficulty = selectedQuestion.difficulty.toLowerCase()
  //   const filteredQuestions = questionData.filter(
  //     (question) => question.difficulty.toLowerCase() === desiredDifficulty
  //   )
  //   const shuffledQuestions = filteredQuestions.sort(() => Math.random() - 0.5)
  //   const limitedQuestions = shuffledQuestions.slice(0, QUESTION_LIMIT)
  //   console.log(JSON.stringify(limitedQuestions))
  //   return limitedQuestions
}
