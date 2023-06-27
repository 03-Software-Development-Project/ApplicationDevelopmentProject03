/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// import SignInScreen from './src/screen/signIn/signInScreen';
// import HomeScreen from './src/screen/home/homeScreen';
// import RegisterScreen from './src/screen/register/registerScreen';
import {StyleSheet, View, Text, Button} from 'react-native';
import QuestionScreen from './src/screen/question/questionScreen';
// import ClassScreen from './src/screen/class/classScreen';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    // <View style={styles.root}>
    //   <Register />
    // </View>
    <View style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Question">
          {/* <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="Question" component={QuestionScreen} />
          {/* <Stack.Screen name="Class" component={ClassScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    // <View style={styles.root}>
    //   <Question />
    // </View>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Details" component={DetailsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F9FBFC',
    marginHorizontal: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textInputLabel: {
    margin: 15,
  },
  center: {
    alignSelf: 'center',
  },
});

export default App;
