/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './src/screen/signIn';
import Home from './src/screen/home/home';
import {StyleSheet, View} from 'react-native';

// const Stack = createStackNavigator();
// const AppStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Login" component={LoginScreen} />
//     {/* Add other screens to the stack if needed */}
//     {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
//   </Stack.Navigator>
// );

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  );
}

function App(): JSX.Element {
  return (
    <View style={styles.root}>
      <MyStack />
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={SignIn} />
    //     {/* Add other screens to the stack if needed */}
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    marginHorizontal: 15,
  },
});

export default App;
