import firebase from "../../../../firebase.js";

export const fetchDataChapter = async (dataUserClassId, dataSubjectId) => {
    try {
        const response = await firebase
            .firestore()
            .collection('classes')
            .doc(dataUserClassId)
            .collection('subjects')
            .doc(dataSubjectId)
            .collection('chapters')
            .get()
        const dataRef = response.docs.map((doc) => doc.data())
        const dataIdRef = response.docs.map((doc) => doc.id)

        return { dataRef, dataIdRef }

    } catch (error) {
        console.log(error)
    }
}