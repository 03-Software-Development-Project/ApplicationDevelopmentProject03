const express = require('express');
const app = express();
const admin = require('firebase-admin');
const serviceAccount = require('./react-native-project-5704c-firebase-adminsdk-zp6q5-d1c17a79a8.json'); // Path to the private key file
const {PORT, IP} = require('../env');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

app.use(express.json());

/* ANCHOR This code defines a route for the Express app that listens for GET requests to the '/api/data/guide'
endpoint. When a request is received, it retrieves data from the 'guide' collection in Firestore and
adds it to an array called 'data'. For each document in the 'guide' collection, it also retrieves
all the documents in the 'rate' subcollection and adds them to an array called 'rates'. The 'rates'
array is then added to the 'documentData' object for the current document in the 'guide' collection.
Finally, the 'documentData' object is added to the 'data' array. The 'data' array is then sent as a
JSON response to the client. If there is an error retrieving the data, a 500 error response is sent. */
app.get('/api/data/guide', async (req, res) => {
  try {
    const collectionRef = db.collection('guide');
    const snapshot = await collectionRef.get();

    const data = [];
    for (const doc of snapshot.docs) {
      const documentData = doc.data();

      console.log(documentData);

      const ratingRef = collectionRef.doc(doc.id).collection('rate');
      const ratingSnapshot = await ratingRef.get();

      const rates = [];
      /* ANCHOR `ratingSnapshot.forEach(rateDoc => { rates.push(rateDoc.data()); });` is iterating over each
      document in the `rate` subcollection of the current `guide` document and pushing its data to
      the `rates` array. This is done to retrieve all the ratings associated with the current
      `guide` document and add them to the `documentData` object before pushing it to the `data`
      array. */
      ratingSnapshot.forEach(rateDoc => {
        rates.push(rateDoc.data());
      });

      documentData.rate = rates;
      data.push(documentData);

      console.log(
        `snapshot.size: ${snapshot.size} | data.length: ${data.length}`,
      );
    }

    res.json(data);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({error: 'Failed to retrieve data.'});
  }
});

/* ANCHOR This code defines a route for the Express app that listens for GET requests to the '/api/data'
endpoint. When a request is received, it retrieves data from the Firestore database in the 'testing'
collection and adds it to an array called 'data'. For each document in the 'testing' collection, it
also retrieves all the documents in the 'comment' subcollection and adds them to an array called
'comments'. The 'comments' array is then added to the 'documentData' object for the current document
in the 'testing' collection. Finally, the 'documentData' object is added to the 'data' array. The
'data' array is then sent as a JSON response to the client. If there is an error retrieving the
data, a 500 error response is sent. */
app.get('/api/data', async (req, res) => {
  try {
    const collectionRef = db.collection('testing'); // Replace with the name of your collection
    const snapshot = await collectionRef.get();

    const data = [];
    for (const doc of snapshot.docs) {
      const documentData = doc.data();

      const commentRef = collectionRef.doc(doc.id).collection('comment');
      const commentSnapshot = await commentRef.get();

      const comments = [];
      commentSnapshot.forEach(commentDoc => {
        comments.push(commentDoc.data());
      });

      documentData.comments = comments;
      data.push(documentData);
    }

    res.json(data);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({error: 'Failed to retrieve data.'});
  }
});

// Example route to add data to Firestore
app.post('/api/data', (req, res) => {
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
  console.log(`Express app listening on http://${IP}:${PORT}/api/data`);
});

module.exports = app;
