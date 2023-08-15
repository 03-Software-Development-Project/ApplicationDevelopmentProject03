import React, {useState} from 'react'
import {TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'

function CommonToggleButton(props) {
  const {
    iconNames,
    iconColor,
    bgColor,
    margin,
    initialState = false,
    onToggle = () => {},
  } = props

  const [isActive, setActivity] = useState(initialState)

  const btnStyle = [styles.btn]
  const btnIconStyle = [styles.btnIcon]
  if (iconColor) btnIconStyle.push(styles.iconColor(iconColor))
  if (bgColor) btnStyle.push(styles.bgColor(bgColor))
  if (margin) btnStyle.push(styles.margin(margin.split(' ')))

  const toggleState = () => {
    setActivity(!isActive)
    onToggle(isActive)
  }

  return (
    <TouchableOpacity
      style={btnStyle}
      onPress={toggleState}>
      <Ionicons
        style={btnIconStyle}
        name={isActive ? iconNames[1] : iconNames[0]}
      />
    </TouchableOpacity>
  )
}

export default CommonToggleButton
