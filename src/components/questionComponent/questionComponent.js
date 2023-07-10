import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import AnswerComponent from '../answerComponent/answerComponent'

class QuestionComponent extends Component {
  /* `handleAnswerSelect` is a function that is called when a user selects an answer to a question. It
  takes in the `selectedAnswerId` as a parameter and uses it to find the selected answer from the
  list of answers for the current question. It then logs the selected answer and the difficulty of
  the question, and checks if the selected answer is correct or not by comparing it to the
  `correctAnswer` property of the question. Finally, it calls the `onAnswerSelect` function passed
  down as a prop, passing in the `selectedAnswerId`. */
  handleAnswerSelect = (selectedAnswerId) => {
    const {question, onAnswerSelect} = this.props
    const selectedAnswer = this.findSelectedAnswer(question, selectedAnswerId)

    this.logSelectedAnswerAndDifficulty(selectedAnswer, question)
    this.logAnswerResult(selectedAnswer, question)
    onAnswerSelect(selectedAnswerId)
  }

  findSelectedAnswer = (question, selectedAnswerId) =>
    question.answers.find((answer) => answer.id === selectedAnswerId)

  getQuestionDifficulty = (question) => question.difficulty

  logSelectedAnswerAndDifficulty = (selectedAnswer, question) => {
    const difficulty = this.getQuestionDifficulty(question)
    console.log(`Question difficulty: ${difficulty}`)
    console.log(`Selected answer: ${selectedAnswer.id}`)
    console.log(`Correct answer: ${question.correctAnswer}`)
  }

  logAnswerResult = (selectedAnswer, question) => {
    console.log('============================================================')
    if (selectedAnswer && selectedAnswer.id === question.correctAnswer) {
      console.log('🎉 Correct answer! 🎉')
      console.log('Well done!')
    } else {
      console.log('❌ Wrong answer! ❌')
      console.log('Keep trying!')
    }
    console.log('============================================================')
    // Perform any additional actions for a correct or wrong answer
  }

  render() {
    const {question} = this.props
    return (
      <View
        key={question.id}
        style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
        {question.answers.map((answer) => (
          <AnswerComponent
            key={answer.id}
            answer={answer}
            onAnswerSelect={this.handleAnswerSelect}
          />
        ))}
        {/* <AnswerComponent
          key={question.id}
          answer={question.solutionA}
          onAnswerSelect={this.handleAnswerSelect}
        /> */}
      </View>
    )
  }
}

export default QuestionComponent

const styles = StyleSheet.create({
  questionContainer: {
    marginBottom: 10,

    // backgroundColor: '#F9FAFB',
  },
  questionText: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    lineHeight: 30,
  },
})
