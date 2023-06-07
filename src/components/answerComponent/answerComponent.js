import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
class AnswerComponent extends Component {
  /* `handlePress` is a method that is called when the user presses on an answer. It extracts the
`answer` and `onAnswerSelect` props from the component's props. Then, it calls the `onAnswerSelect`
function with the `answer.id` as an argument, which is a callback function passed down from the
parent component. Finally, it logs the `onAnswerSelect` function to the console. */
  handlePress = () => {
    const {answer, onAnswerSelect} = this.props;
    onAnswerSelect(answer.id);
    console.log(onAnswerSelect);
  };

  render() {
    const {answer} = this.props;

    return (
      <View style={styles.answerContainer}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.answerText}>
            {answer.id}: {answer.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default AnswerComponent;

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
