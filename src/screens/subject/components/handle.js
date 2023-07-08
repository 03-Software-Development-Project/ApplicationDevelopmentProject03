import firestore from '@react-native-firebase/firestore'

export const fetchDataSubject = async (dataUserClassId) => {
  try {
    const response = await firestore()
      .collection('classes')
      .doc(dataUserClassId)
      .collection('subjects')
      .get()
    const dataRef = response.docs.map((doc) => doc.data())
    const dataIdRef = response.docs.map((doc) => doc.id)
    return {dataRef, dataIdRef}
  } catch (error) {
    console.error(error)
  }
}
