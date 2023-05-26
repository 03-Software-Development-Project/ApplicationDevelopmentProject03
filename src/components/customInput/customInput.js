import {StyleSheet, View, TextInput, Text} from 'react-native';
import React, {Component} from 'react';

export class CustomInput extends Component {
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
