const express = require('express');
const app = express();
const axios = require('axios');
const {PORT, IP, API_QUESTION_TOKEN} = require('../env');
const {saveDataAsJSON, transformData, splitName} = require('./fileUtils');

app.get('/api/questions', async (req, res) => {
  /* This code block is defining the API endpoint URL and a set of parameters for making an HTTP GET
request to the Quiz API. The `apiUrl` variable is set to the URL of the Quiz API endpoint for
retrieving questions. The `params` object contains two properties: `apiKey` and `limit`. The
`apiKey` property is set to the value of the `API_QUESTION_TOKEN` environment variable, which is
used to authenticate the request to the Quiz API. The `limit` property is set to 10, which specifies
the maximum number of questions to retrieve from the API. These parameters are passed as options to
the `axios.get()` method to make the HTTP GET request to the Quiz API endpoint. */
  const apiUrl = 'https://quizapi.io/api/v1/questions';
  const params = {
    apiKey: API_QUESTION_TOKEN,
    limit: 100,
  };

  /* This code block is making an HTTP GET request to the Quiz API endpoint for retrieving questions.
  It uses the `axios` library to make the request and passes the API endpoint URL and a set of
  parameters as options to the `axios.get()` method. The `params` object contains two properties:
  `apiKey` and `limit`. The `apiKey` property is set to the value of the `API_QUESTION_TOKEN`
  environment variable, which is used to authenticate the request to the Quiz API. The `limit`
  property is set to 10, which specifies the maximum number of questions to retrieve from the API. */
  try {
    const response = await axios.get(apiUrl, {params});
    res.json(response.data);
    console.log(response.data);
    const transformedData = transformData(response.data);
    saveDataAsJSON(transformedData, './data/questions.json');
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({error: 'An error occurred while fetching the questions.'});
  }
});

/* This code block defines an API endpoint for retrieving user data from an external API. It uses the
`axios` library to make an HTTP GET request to the `https://dummyapi.online/api/users` endpoint and
retrieves user data. The retrieved data is then saved as a JSON file using the `saveDataAsJSON()`
function from the `fileUtils` module. Finally, the user data is sent as a JSON response to the
client making the request. If an error occurs during the request, a 500 status code and an error
message are sent as the response. */
app.get('/api/users', async (req, res) => {
  const apiUrl = 'https://dummyapi.online/api/users';

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
    saveDataAsJSON(response.data, './data/users.json');
    console.log(response.data);
  } catch (error) {
    res.status(500).json({error: 'An error occurred while fetching the users'});
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Express app listening on http://${IP}:${PORT}/api/questions`);
});

module.exports = app;
