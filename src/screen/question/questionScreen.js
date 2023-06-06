import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QUESTION_LIMIT} from '../../../env';
import QuestionComponent from '../../components/questionComponent/questionComponent';
const questionData = require('../../../express/data/questions.json');
const Stack = createNativeStackNavigator();
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

  handleAnswerSelect = selectedAnswerId => {
    const {currentQuestionIndex} = this.state;

    // Check if the selected answer is correct
    const currentQuestion = limitedQuestions[currentQuestionIndex];
    const isAnswerCorrect = currentQuestion.correct_answer === selectedAnswerId;

    // Perform necessary actions based on the answer correctness

    // Navigate to the next question or home screen
    if (currentQuestionIndex < limitedQuestions.length - 1) {
      this.setState({currentQuestionIndex: currentQuestionIndex + 1});
    } else {
      // All questions answered, navigate to the home screen
      this.props.navigation.navigate('Home'); // Replace 'Home' with the desired screen name
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
