const express = require('express');
const app = express();
const admin = require('firebase-admin');
const serviceAccount = require('./react-native-project-5704c-firebase-adminsdk-zp6q5-d1c17a79a8.json'); // Path to the private key file
const {PORT} = require('../env');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

app.use(express.json());

// Example route to get data from Firestore
app.get('/api/data', (req, res) => {
  const collectionRef = db.collection('testing'); // Replace with the name of your collection
  collectionRef
    .get()
    .then(snapshot => {
      const data = [];
      snapshot.forEach(doc => {
        data.push(doc.data());
      });
      res.json(data);
    })
    .catch(error => {
      console.error('Error getting documents: ', error);
      res.status(500).json({error: 'Failed to retrieve data.'});
    });
});

// Example route to add data to Firestore
app.post('/api/data', (req, res) => {
  console.log(req.body);
  const collectionRef = db.collection('testing'); // Replace with the name of your collection
  const newData = req.body;

  // Ensure newData is a valid JavaScript object
  if (
    typeof newData === 'object' &&
    !Array.isArray(newData) &&
    newData !== null
  ) {
    collectionRef
      .add(newData)
      .then(() => {
        res.status(200).json({message: 'Data added successfully.'});
      })
      .catch(error => {
        console.error('Error adding data: ', error);
        res.status(500).json({error: 'Failed to add data.'});
      });
  } else {
    res.status(400).json({error: 'Invalid data format.'});
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(
    `Express app listening on http://192.168.100.26:${PORT}/api/data`,
  );
});

module.exports = app;
