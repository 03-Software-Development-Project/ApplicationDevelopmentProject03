import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import AnswerComponent from '../answerComponent/answerComponent';
import {SELECTED_QUESTION_POINTS as selectedQuestion} from '../../../env';
class QuestionComponent extends Component {
  /* `handleAnswerSelect` is a method that is called when a user selects an answer to a question. It
  takes in the ID of the selected answer as a parameter and performs the following actions:
  - Logs the selected answer ID and the difficulty of the question to the console.
  - Calculates the points awarded for the question based on its difficulty using the
  `getPointFromQuestion` method.
  - Checks if the selected answer is correct by comparing its ID to the `correct_answer` property of
  the question object.
  - Logs whether the selected answer is correct or wrong, and the points awarded (if any) to the
  console.
  - Calls the `onAnswerSelect` prop function with the selected answer ID as an argument, allowing
  the parent component to handle the selected answer and update the state accordingly. */
  handleAnswerSelect = selectedAnswerId => {
    console.log(selectedAnswerId);
    const {question} = this.props;
    const selectedAnswer = question.answers.find(
      answer => answer.id === selectedAnswerId,
    );
    const difficulty = this.getQuestionDifficulty(question);
    const points = this.getPointFromQuestion(difficulty);
    console.log(`Question difficulty: ${difficulty}`);
    console.log(`this is selected answer: ${selectedAnswer.id}`);
    console.log(`this is correct_answer: ${question.correct_answer}`);
    // Check if the selected answer is correct
    if (selectedAnswer && selectedAnswer.id === question.correct_answer) {
      console.log('Correct answer!\n');
      console.log(`Points awarded: ${points}`);

      console.log(
        '============================================================',
      );

      // Perform any additional actions for a correct answer
    } else {
      console.log('Wrong answer!\n');
      console.log('No points awarded!');

      console.log(
        '============================================================',
      );

      // Perform any additional actions for a wrong answer
    }

    // Call the onAnswerSelect prop function with the TouchableOpacity selected answer ID
    this.props.onAnswerSelect(selectedAnswerId);
  };
  getQuestionDifficulty = question => {
    return question.difficulty;
  };
  /* `getPointFromQuestion` is a method that takes in a difficulty level as a parameter and returns the
  number of points awarded for a question of that difficulty level. */
  getPointFromQuestion = difficulty => {
    let totalPoints = 0;

    switch (difficulty.toLowerCase()) {
      case 'easy':
        totalPoints += selectedQuestion.point;
        console.log(`the point is ${selectedQuestion}`);
        return totalPoints;
      case 'medium':
        totalPoints += selectedQuestion.point;
        console.log(`the point is ${selectedQuestion}`);
        return totalPoints;
      case 'hard':
        totalPoints += selectedQuestion.point;
        console.log(`the point is ${selectedQuestion}`);
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
