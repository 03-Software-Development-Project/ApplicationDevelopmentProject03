/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import {StyleSheet, View, Text, Button} from 'react-native'
import SignIn from './src/screen/signIn/signIn'
import Home from './src/screen/home/home'

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}
function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator()

function App() {
  const [num1, setNum1] = useState('0')
  const [num2, setNum2] = useState('0')
  const [result, setResult] = useState('')
  const handleAverage = () => {
    const sum = parseFloat(num1) / (parseFloat(num2) * parseFloat(num2))
    console.log(num1, num2)
    setResult(sum.toString())
  }
  return (
    // <View style={styles.root}>
    //   <SignIn />
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
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
})

export default App
