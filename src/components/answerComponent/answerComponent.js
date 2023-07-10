import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

class AnswerComponent extends Component {
  /* `handlePress` is a method that is called when the user presses on an answer. It extracts the
`answer` and `onAnswerSelect` props from the component's props. Then, it calls the `onAnswerSelect`
function with the `answer.id` as an argument, which is a callback function passed down from the
parent component. Finally, it logs the `onAnswerSelect` function to the console. */
  handlePress = () => {
    const {answer, onAnswerSelect} = this.props
    onAnswerSelect(answer.id)
  }

  render() {
    const {answer} = this.props

    return (
      <View style={styles.answerContainer}>
        <TouchableOpacity
          onPress={this.handlePress}
          style={styles.touchableOpacityContainer}>
          <Text style={styles.answerText}>
            {answer.id}. {answer.text}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default AnswerComponent

const styles = StyleSheet.create({
  touchableOpacityContainer: {marginLeft: 10},
  questionContainer: {
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answerContainer: {
    margin: 10,
    paddingVertical: 18,
    backgroundColor: '#F9FAFB',
    borderRadius: 5,
    color: '#E5E7EB',
  },
  answerText: {
    fontSize: 16,
  },
})
