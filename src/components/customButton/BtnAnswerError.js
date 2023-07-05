import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {typography, color} from '../../../constants'
import React, {Component} from 'react'
export class BtnAnswerError extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.button}>
        <View style={styles.cancelIcon}>
          <Text style={styles.textAnswer}>C. {'<div>'}</Text>
          <View style={{paddingVertical: 20}}>
            <Image
              source={require('../../assets/icons/cancelCC.png')}
              style={{resizeMode: 'cover', height: 20, width: 20}}></Image>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default BtnAnswerError

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: color['Danger.100'],
    borderColor: color['Danger.500'],
    color: color['Danger.500'],
    borderWidth: 1,
    borderRadius: 12,
  },
  textAnswer: {
    color: color['Danger.500'],
    marginLeft: 16,
    ...typography['body.large.medium'],
    paddingVertical: 20,
  },
  cancelIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
