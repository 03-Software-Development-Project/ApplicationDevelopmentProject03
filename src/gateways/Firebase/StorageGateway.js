import firebaseStorage from '@react-native-firebase/storage'

const storage = {
  storageRef: firebaseStorage().ref(),
  async uploadAFile(file, metadata) {
    // Upload file and metadata to the object 'images/mountains.jpg'
    const uploadTask = this.storageRef.child(`images/${file.name}`).put(file, metadata)

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebaseStorage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(`Upload is ${progress}% done`)
        switch (snapshot.state) {
          case firebaseStorage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused')
            break
          case firebaseStorage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running')
            break
          default:
            break
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break
          case 'storage/canceled':
            // User canceled the upload
            break

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break
          default:
            break
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL)
        })
      }
    )
  },
}
Object.freeze(storage)

export default storage
