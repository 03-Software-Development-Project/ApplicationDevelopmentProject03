import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {signUpUser} from '../../components/function/fileUtils';

export class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp() {
    const {email, password} = this.state;
    signUpUser(email, password);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={style.container}>
        <TextInput
          style={style.textInput}
          placeholder="Email"
          value={this.state.email}
          onChangeText={text => this.setState({email: text})}
        />
        <TextInput
          style={style.textInput}
          placeholder="Password"
          value={this.state.password}
          onChangeText={text => this.setState({password: text})}
        />
        <TouchableOpacity
          style={[style.button, style.textInput]}
          onPress={this.handleSignUp}>
          <Text style={style.text}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text>Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  textInput: {
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },

  button: {
    backgroundColor: '#5fd5f6',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontWeight: '700',
    fontSize: 20,
  },
});

export default RegisterScreen;
