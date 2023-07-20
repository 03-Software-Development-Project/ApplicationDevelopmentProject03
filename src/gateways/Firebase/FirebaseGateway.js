import auth from './AuthGateway'
import db from './FirestoreGateway'
import storage from './StorageGateway'

const FirebaseGateway = {
  ...auth,
  ...db,
  ...storage,
}
export default FirebaseGateway
