/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './src/screen/signIn';
import Home from './src/screen/home/home';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import Register from './src/screen/register';

// const AppStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Login" component={LoginScreen} />
//     {/* Add other screens to the stack if needed */}
//     {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
//   </Stack.Navigator>
// );

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           /* 1. Navigate to the Details route with params */
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           });
//         }}
//       />
//     </View>
//   );
// }

// function DetailsScreen({route, navigation}) {
//   /* 2. Get the param */
//   const {itemId, otherParam} = route.params;
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }
// const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [num1, setNum1] = useState('0');
  const [num2, setNum2] = useState('0');
  const [result, setResult] = useState('');
  const handleAverage = () => {
    const sum = parseFloat(num1) / (parseFloat(num2) * parseFloat(num2));
    console.log(num1, num2);
    setResult(sum.toString());
  };
  return (
    // <View style={styles.root}>
    //   <SignIn />
    // </View>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Details" component={DetailsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <View style={styles.root}>
      <Text style={styles.textInputLabel}>Weight (KG)</Text>
      <TextInput
        style={styles.input}
        placeholder="0"
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
      />
      <Text style={styles.textInputLabel}>HEIGHT (CM)</Text>
      <TextInput
        style={styles.input}
        placeholder="0"
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
      />
      {result ? <Text style={styles.center}>Result: {result}</Text> : null}
      <Button title="Compute" onPress={handleAverage} />
    </View>
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
