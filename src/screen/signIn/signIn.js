import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import CustomInput from '../../components/customInput/customInput';
import CustomButton from '../../components/customButton/custromButton';
const {API_LOGIN} = require('../../../env');
export class SignIn extends Component {
  /**
   *  This is a constructor function that initializes the state with empty username and password fields
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
    // this.forgotPasswordBtn = this.forgotPasswordBtn.bind(this);
  }

  /**
   * This function logs in a user with a validated username and password.
   * @returns Nothing is being returned explicitly in this code. However, the function may return early
   * if the username or password is invalid, in which case it will not proceed to the login attempt. If
   * the login attempt fails, an error will be logged to the console.
   */
  async loginButton() {
    const {username, password} = this.state;
    console.log(username, password);

    if (!this.validateUsername(username)) {
      console.warn('Please enter a valid username.');
      return;
    }

    if (!this.validatePassword(password)) {
      console.warn('Please enter a valid password.');
      return;
    }

    try {
      await this.performLogin(username, password);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  /**
   * The function checks if a given username is not empty or only contains whitespace characters.
   * @param username - The parameter `username` is a string representing a username that needs to be
   * validated.
   * @returns A boolean value (true or false) is being returned.
   */
  validateUsername(username) {
    if (username.trim() === '') {
      return false;
    }
    return true;
  }

  /**
   * The function checks if a password is not empty or only whitespace characters.
   * @param password - The parameter "password" is a string representing a password that needs to be
   * validated.
   * @returns If the password is empty or only contains whitespace characters, the function will return
   * `false`. Otherwise, it will return `true`.
   */
  validatePassword(password) {
    if (password.trim() === '') {
      return false;
    }
    return true;
  }

  /**
   * This is an asynchronous function that performs a login by fetching data from an API and checking if
   * the provided username and password match any user in the data.
   * @param username - The username entered by the user trying to log in.
   * @param password - The password parameter is a string that represents the user's password that they
   * are trying to use to log in.
   */
  async performLogin(username, password) {
    console.log(API_LOGIN);
    const apiLogin = API_LOGIN; //Change to your localhost port here
    const response = await fetch(apiLogin);
    const data = await response.json();

    const foundUser = data.find(
      user =>
        user.username &&
        user.username.toLowerCase() === username.toLowerCase() &&
        user.password === password,
    );

    if (foundUser) {
      console.warn('Login successful!');
      // Redirect to the home page or perform any necessary actions
    } else {
      console.warn('Invalid username or password.');
    }
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
