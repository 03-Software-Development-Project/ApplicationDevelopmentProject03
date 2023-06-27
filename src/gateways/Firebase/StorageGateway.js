import firebaseStorage from '@react-native-firebase/storage'

class FBCloudStorageError extends Error {
  constructor(message, code) {
    super(message)
    this.name = 'FBCloudStorageError'
    this.code = code
  }
}
const storage = {
  rootDirectoryRef: firebaseStorage().ref(),
  async uploadAFile(file, metadata, directory) {
    try {
      const uploadTask = await this.rootDirectoryRef
        .child(`${directory}/${file.name}`)
        .put(file, metadata)
      const downloadURL = await uploadTask.ref.getDownloadURL()
      return downloadURL
    } catch (error) {
      throw new FBCloudStorageError(error.message, error.code)
    }
  },
}
Object.freeze(storage)

export default storage
