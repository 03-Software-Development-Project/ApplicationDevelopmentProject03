import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import AnswerComponent from '../answerComponent/answerComponent';
import {POINTS} from '../../../env';
class QuestionComponent extends Component {
  /* `handleAnswerSelect` is a method that is called when a user selects an answer to a question. It
takes in the ID of the selected answer as a parameter and logs it to the console. It then calls the
`onAnswerSelect` prop function with the selected answer ID as an argument. This allows the parent
component to handle the selected answer and update the state accordingly. */
  handleAnswerSelect = selectedAnswerId => {
    console.log(selectedAnswerId);
    const {question} = this.props;
    const selectedAnswer = question.answers.find(
      answer => answer.id === selectedAnswerId,
    );
    const difficulty = this.getQuestionDifficulty(question);
    const points = this.getPointFromQuestion(difficulty);

    console.log(`Question difficulty: ${difficulty}`);
    console.log(`Points awarded: ${points}`);

    console.log(`this is selected answer: ${selectedAnswer.id}`);
    console.log(`this is correct_answer: ${question.correct_answer}`);
    // Check if the selected answer is correct
    if (selectedAnswer && selectedAnswer.id === question.correct_answer) {
      console.log('Correct answer!');

      // Perform any additional actions for a correct answer
    } else {
      console.log('Wrong answer!');
      // Perform any additional actions for a wrong answer
    }

    // Call the onAnswerSelect prop function with the TouchableOpacity selected answer ID
    this.props.onAnswerSelect(selectedAnswerId);
  };
  getQuestionDifficulty = question => {
    return question.difficulty;
  };
  getPointFromQuestion = difficulty => {
    let totalPoints = 0;

    switch (difficulty.toLowerCase()) {
      case 'easy':
        totalPoints += POINTS.easy;
        console.log(`the point is ${POINTS.easy}`);
        return totalPoints;
      case 'medium':
        totalPoints += POINTS.medium;
        console.log(`the point is ${POINTS.medium}`);
        return totalPoints;
      case 'hard':
        totalPoints += POINTS.hard;
        console.log(`the point is ${POINTS.eard}`);
        return totalPoints;
      default:
        // Handle invalid difficulty
        return totalPoints;
    }
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
