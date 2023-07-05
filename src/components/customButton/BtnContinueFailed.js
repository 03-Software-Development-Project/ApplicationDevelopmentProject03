import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {typography, color} from '../../../constants'
import React, {Component} from 'react'
export class BtnContinueFailed extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.button}>
        <Text style={[typography['body.large.semibold'], {color: color['Primary.800']}]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default BtnContinueFailed

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 12,
    marginBottom: 32,
  },
})
