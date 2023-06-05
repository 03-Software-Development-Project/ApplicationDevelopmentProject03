import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import AnswerComponent from '../answerComponent/answerComponent';

class QuestionComponent extends Component {
  render() {
    const {question} = this.props;

    return (
      <View key={question.id} style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
        {question.answers.map(answer => (
          <AnswerComponent key={answer.id} answers={answer} />
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
