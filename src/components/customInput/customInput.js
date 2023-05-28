import {StyleSheet, View, TextInput, Text} from 'react-native';
import React, {Component} from 'react';

export class CustomInput extends Component {
  /**
   * ANCHOR This is a React Native component that renders a text input field with a label and displays the
   * input value below it.
   * @returns A React Native component that renders a View containing a TextInput and a Text component.
   * The TextInput has props for value, onChangeText, placeholder, and secureTextEntry, which are
   * passed down from the parent component. The Text component displays the current value of the
   * TextInput.
   */
  render() {
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            placeholder={this.props.placeholder}
            style={styles.input}
            secureTextEntry={this.props.secureTextEntry}
          />
        </View>
        <View>
          <Text>{this.props.value}</Text>
        </View>
      </View>
    );
  }
}

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {},
});
