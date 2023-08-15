import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles'

function CommonButton(props) {
  const {
    size,
    text,
    textColor,
    bgColor,
    margin,
    onPress,
    disabled = false,
  } = props
  const buttonStyle = [styles.button]
  const buttonTextStyle = [styles.buttonText]
  if (size) buttonStyle.push(styles.size(size))
  if (textColor) buttonTextStyle.push(styles.textColor(textColor))
  if (bgColor) buttonStyle.push(styles.bgColor(bgColor))
  if (margin) buttonStyle.push(styles.margin(margin.split(' ')))
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}>
      <Text style={buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CommonButton
