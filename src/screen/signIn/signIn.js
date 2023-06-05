import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import CustomInput from '../../components/customInput/customInput';
import CustomButton from '../../components/customButton/custromButton';
import firebase from '../../../firebase';
import validator from 'validator';
/* The `SignIn` class component defines a method `signInWithEmailAndPassword` that is triggered when
the user presses the "Login" button, and it renders a form with email and password inputs and a
login button. */
class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  /* `signInWithEmailAndPassword` is a method that is defined within the `SignIn` class component. It is
 an asynchronous function that is triggered when the user presses the "Login" button. */

  signInWithEmailAndPassword = async () => {
    const {email, password} = this.state;

    if (email === '' || password === '') {
      console.error('Email or password is empty');
      return;
    }

    if (!validator.isEmail(email)) {
      console.error('Invalid email format');
      return;
    }
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.warn('Signed in successfully!');
      // Redirect to the home page or perform any necessary actions
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sign In</Text>
        <CustomInput
          placeholder="Enter your email"
          onChangeText={text => this.setState({email: text})}
        />
        <CustomInput
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={text => this.setState({password: text})}
        />
        <CustomButton onPress={this.signInWithEmailAndPassword} text="Login" />
      </View>
    );
  }
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    marginVertical: 10,
  },
});
