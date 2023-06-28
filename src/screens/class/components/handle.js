import firebase from '../../../../firebase.js'

export const fetchDataClass = async () => {
    try {
        const response = await firebase.firestore()
            .collection('classes')
            .get();
        const dataRef = response.docs.map((doc) => doc.data());
        const subDataRef = response.docs.map((doc) => doc.id);

        return { dataRef, subDataRef };
    } catch (error) {
        console.error(error);
    }
};

export const fetchSubCollectionData = async (selectedDocId) => {
    try {
        const subCollectionSnapshot = await firebase
            .firestore()
            .collection('classes')
            .doc(selectedDocId)
            .collection('privateData')
            .get();
        const subCollectionData = subCollectionSnapshot.docs.map((doc) => doc.data().joinCode);
        return subCollectionData
    } catch (error) {
        console.error(error);
    }
};

export const handleJoinClass = (code, value, dataID) => {
    //get data user
    firebase.firestore()
        .collection('students')
        //cái này đang set cứng
        .doc('hhhhhhh5')
        .get()
        .then((doc) => {
            //kiểm tra user đã có classId hay chưa
            if (doc.exists) {
                const userData = doc.data();
                const currentClassId = userData.class;

                if (currentClassId) {
                    console.log('User already has classId:', currentClassId);

                } else {
                    //kiểm tra value nhập vào có đúng với keyCode hay không
                    if (value == code) {
                        firebase.firestore()
                            .collection('students')
                            //cái này đang set cứng
                            .doc('hhhhhhh5')
                            .update({
                                class: dataID,
                            })
                            .then(() => {
                                console.log('User updated!');
                            });
                    } else {
                        console.log('Invalid code')
                    }
                }
            }
        });
}

export const checkClassOfUser = async ()  => {
    try {
    const checkDataUser = await firebase
    .firestore()
    .collection('students')
    //cái này đang set cứng
    .doc('hhhhhhh5')
    .get()
        const subCollectionData = checkDataUser.data().class
        return subCollectionData
    } catch (error) {
        console.error(error);
    }
}