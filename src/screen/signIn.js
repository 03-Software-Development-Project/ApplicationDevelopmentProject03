import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import CustomInput from '../components/customInput/customInput';
import CustomButton from '../components/customButton/custromButton';
// import dotenv from 'dotenv';
// dotenv.config();

export class SignIn extends Component {
  /**
   * This is a constructor function that initializes the state with empty username and password fields
   * and binds two methods to the component.
   * @param props - props is an object that contains properties passed down from a parent component to
   * this component. It can include data, functions, or other values that are needed by the component.
   * In this case, the constructor is using props to initialize the state of the component with empty
   * strings for the username and password.
   */
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.loginButton = this.loginButton.bind(this);
    this.forgotPasswordBtn = this.forgotPasswordBtn.bind(this);
  }
  /**
   * This function logs in a user by checking their username and password against data retrieved from
   * an API.
   * @returns Nothing is being returned explicitly in this code. However, the function may return early
   * if the username or password is not provided, and it may log a message indicating whether the login
   * was successful or not.
   */
  async loginButton() {
    const {username, password} = this.state;
    console.log(username, password);
    if (username.trim() === '') {
      console.warn('Please enter a username.');
      return;
    }

    if (password.trim() === '') {
      console.warn('Please enter a password.');
      return;
    }

    try {
      const apiLogin = 'http://192.168.1.18:3000/api/data';
      const response = await fetch(apiLogin);
      const data = await response.json();

      const foundUser = data.find(
        user => user.username === username && user.password === password,
      );
      if (foundUser) {
        console.warn('Login successful!');
        // Redirect to the home page or perform any necessary actions
      } else {
        console.warn('Invalid username or password.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  /**
   * The function logs a warning message when the "forgot password" button is pressed.
   */
  forgotPasswordBtn() {
    console.warn('forgot Button pressed!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sign In</Text>
        <CustomInput
          placeholder="Enter your username"
          onChangeText={text => this.setState({username: text})}
        />
        <CustomInput
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={text => this.setState({password: text})}
        />
        <CustomButton onPress={this.loginButton} text="Login" />
        <CustomButton
          onPress={this.forgotPasswordBtn}
          text="Forgot your password?"
        />
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
