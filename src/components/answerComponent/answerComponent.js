import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
class AnswerComponent extends Component {
  render() {
    const {answers} = this.props;
    const handlePress = () => {
      const {id} = this.props.answers;
      console.warn('Clicked Answer', `ID: ${id}`);
    };
    return (
      <View style={styles.answerContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.answerText}>
            {answers.id}: {answers.text}
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
