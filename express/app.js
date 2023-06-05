const express = require('express');
const app = express();
const axios = require('axios');
const {PORT, IP, API_QUESTION_TOKEN} = require('../env');
const {saveDataAsJSON, transformData} = require('./fileUtils');
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
    limit: 10,
  };

  /* This code block is making an asynchronous HTTP GET request to an API endpoint using the axios
 library. It is passing in the API endpoint URL and a set of parameters as options for the request.
 If the request is successful, it sends the response data back to the client as a JSON object. If
 the request fails, it catches the error and logs it to the console, then sends an error response to
 the client with a 500 status code and an error message. This is a common pattern for handling
 errors in asynchronous code. */
  try {
    const response = await axios.get(apiUrl, {params});
    res.json(response.data);
    const transformedData = transformData(response.data);
    saveDataAsJSON(transformedData, './data/questions.json');
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({error: 'An error occurred while fetching the questions.'});
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Express app listening on http://${IP}:${PORT}/api/questions`);
});

module.exports = app;
