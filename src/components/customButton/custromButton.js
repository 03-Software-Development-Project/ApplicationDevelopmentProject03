import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import React, {Component} from 'react'

export class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

export default CustomButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3b71f3',
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
})
