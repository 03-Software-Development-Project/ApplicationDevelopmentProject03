import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import QuestionComponent from '../../components/questionComponent/questionComponent';
const questionData = require('../../../express/data/questions.json');
const Stack = createNativeStackNavigator();

class Question extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {questionData.map(question => (
            <Stack.Screen
              key={question.id}
              name={`Question${question.id}`}
              options={{title: `Question ${question.id}`}}>
              {props => <QuestionComponent {...props} question={question} />}
            </Stack.Screen>
          ))}
        </Stack.Navigator>
      </NavigationContainer>
      // <ScrollView>
      //   <View>
      //     {questionData.map(question => (
      //       <QuestionComponent question={question} key={question.id} />
      //     ))}
      //   </View>
      // </ScrollView>
    );
  }
}
export default Question;
const styles = StyleSheet.create({});
