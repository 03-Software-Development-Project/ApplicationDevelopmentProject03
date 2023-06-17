import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import React, {Component} from 'react'

export class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.button}>
        <Text style={[textbutton, {color: color['Greyscale.50']}, {fontWeight: 'bold'}]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: '100%',
    backgroundColor: color['Greyscale.900'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 24,
  },
})
