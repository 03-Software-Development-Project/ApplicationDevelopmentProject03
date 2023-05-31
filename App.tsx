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
import Register from './src/screen/register';
import Home from './src/components/home/home';
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
    <Stack.Navigator>
      <Stack.Screen name="Home" component={SignIn} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <View style={styles.root}>
      <SignIn />
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
