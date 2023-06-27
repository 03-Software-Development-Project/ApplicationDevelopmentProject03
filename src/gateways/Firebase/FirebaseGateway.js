import auth from './AuthGateway'
import db from './FirestoreGateway'

const FirebaseGateway = {
  ...auth,
  ...db,
}
export default FirebaseGateway
