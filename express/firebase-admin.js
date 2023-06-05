const admin = require('firebase-admin');
const serviceAccount = require('./react-native-project-5704c-firebase-adminsdk-zp6q5-d1c17a79a8.json'); // Path to the private key file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

module.exports = {admin, db};
