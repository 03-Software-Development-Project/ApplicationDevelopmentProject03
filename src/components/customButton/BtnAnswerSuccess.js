import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {typography, color} from '../../constants'

export class BtnAnswerSuccess extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.button}>
        <View style={styles.successIcon}>
          <Text style={styles.textAnswer}>D. {'<span>'}</Text>
          <View style={{paddingVertical: 20}}>
            <Image
              source={require('../../assets/icons/successCC.png')}
              style={{resizeMode: 'cover', height: 20, width: 20}}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default BtnAnswerSuccess

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: color['Success.100'],
    borderColor: color['Success.500'],
    color: color['Success.500'],
    borderWidth: 1,
    borderRadius: 12,
  },
  textAnswer: {
    color: color['Success.500'],
    marginLeft: 16,
    ...typography['body.large.medium'],
    paddingVertical: 20,
  },
  successIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
