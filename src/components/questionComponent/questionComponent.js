import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import AnswerComponent from '../answerComponent/answerComponent';

class QuestionComponent extends Component {
  /* `handleAnswerSelect` is a method that is called when a user selects an answer to a question. It
takes in the ID of the selected answer as a parameter and logs it to the console. It then calls the
`onAnswerSelect` prop function with the selected answer ID as an argument. This allows the parent
component to handle the selected answer and update the state accordingly. */
  handleAnswerSelect = selectedAnswerId => {
    console.log(selectedAnswerId);
    // Call the onAnswerSelect prop function with the TouchableOpacityselected answer ID
    this.props.onAnswerSelect(selectedAnswerId);
  };

  render() {
    const {question} = this.props;

    return (
      <View key={question.id} style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
        {question.answers.map(answer => (
          <AnswerComponent
            key={answer.id}
            answer={answer}
            onAnswerSelect={this.handleAnswerSelect}
          />
        ))}
      </View>
    );
  }
}
export default QuestionComponent;

const styles = StyleSheet.create({
  questionContainer: {
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answerContainer: {
    marginLeft: 10,
  },
  answerText: {
    fontSize: 16,
  },
});
