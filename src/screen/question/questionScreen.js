import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {QUESTION_LIMIT} from '../../../env';
import QuestionComponent from '../../components/questionComponent/questionComponent';
/* `handleAnswerSelect` is a method defined in the `QuestionComponent` class. It takes in a
`selectedAnswerId` parameter and logs it to the console. It then calls the `onAnswerSelect` function
that is passed as a prop to the `QuestionComponent`, passing in the `selectedAnswerId` as an
argument. This function is used to handle the selection of an answer by the user and pass the
selected answer ID back up to the parent component. */
const questionData = require('../../../express/data/questions.json');

// Randomize the question data
const shuffledQuestions = questionData.sort(() => Math.random() - 0.5);

// Limit the number of questions to 11
const limitedQuestions = shuffledQuestions.slice(0, QUESTION_LIMIT);
class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
    };
  }

  /* `handleAnswerSelect` is a function that is called when a user selects an answer to a question. It
takes in the `selectedAnswerId` as a parameter, which is the ID of the answer that the user
selected. */
  handleAnswerSelect = selectedAnswerId => {
    const {currentQuestionIndex} = this.state;
    console.log('currentQuestionIndex;', currentQuestionIndex);
    // Navigate to the next question or home screen
    if (currentQuestionIndex < limitedQuestions.length - 1) {
      this.setState({currentQuestionIndex: currentQuestionIndex + 1});
    } else {
      // All questions answered, navigate to the home screen
      this.props.navigation.navigate('Home'); // Replace 'Home' with the desired screen name
      this.setState({currentQuestionIndex: 0});
    }
  };

  render() {
    const {currentQuestionIndex} = this.state;
    console.log(currentQuestionIndex.length);
    return (
      <View style={styles.container}>
        {currentQuestionIndex < limitedQuestions.length && (
          <QuestionComponent
            question={limitedQuestions[currentQuestionIndex]}
            onAnswerSelect={this.handleAnswerSelect}
          />
        )}
      </View>
    );
  }
}
export default QuestionScreen;
const styles = StyleSheet.create({});
