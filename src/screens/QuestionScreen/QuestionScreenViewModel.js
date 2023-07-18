class QuestionScreenViewModel {
  updateData = null

  // constructor() {}
  // Your view model initialization code here

  setUpdateData(updateData) {
    // Set the updateData function from the screen component
    this.updateData = updateData
  }

  doSomething() {
    // Example function that performs some action
    // You can add your own functionality here
    // Update the data state in the screen component
    const newData = 'New data from view model'
    this.updateData(newData)
  }
}

export default new QuestionScreenViewModel()
