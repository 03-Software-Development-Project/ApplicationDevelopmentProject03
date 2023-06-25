const express = require('express')

const XLSX = require('xlsx')
const FBGateway = require('./FirebaseGateway')
require('dotenv').config()

const app = express()
const {PORT} = process.env
app.use(express.json())

app.get('/api/sampleData', async (req, res) => {
  const workbook = XLSX.readFile('/Users/huy/Downloads/DataSample.xlsx')
  const jsonData = workbook.SheetNames.reduce(
    (_jsonData, currentSheetName) => ({
      ..._jsonData,
      [currentSheetName]: XLSX.utils.sheet_to_json(workbook.Sheets[currentSheetName]),
    }),
    {}
  )
  try {
    const result = await FBGateway.insertSampleDataFromJsonData(jsonData)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.get('/api/deleteAllUsers', async (req, res) => {
  try {
    const reuslt = await FBGateway.deleteAllUsers()
    res.status(200).send(reuslt)
  } catch (error) {
    res.status(500).send(error)
  }
})
// Start the Express server
app.listen(PORT, () => {})
module.exports = app
