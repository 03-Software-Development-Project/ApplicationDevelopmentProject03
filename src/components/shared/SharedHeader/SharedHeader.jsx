import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles, {presets, borderWidth, opacity} from './styles'

function SharedHeader(props) {
  const {title, preset, btns} = props
  let headerStyle = styles.header
  let btnStyle = styles.btn
  let btnIconStyle = styles.btnIcon
  const titleViewStyle = styles.titleView
  let titleStyle = styles.title

  if (preset && presets[preset]) {
    headerStyle = presets[preset].header
    btnStyle = presets[preset].btn
    btnIconStyle = presets[preset].btnIcon
    titleStyle = presets[preset].title
  }

  let leftBtnStyle = [btnStyle]
  let rightBtnStyle = [btnStyle]

  if (!btns?.left) leftBtnStyle.push(opacity(0))
  if (btns?.left?.noBorder) leftBtnStyle.push(borderWidth(0))
  if (!btns?.right) rightBtnStyle.push(opacity(0))
  if (btns?.right?.noBorder) rightBtnStyle.push(borderWidth(0))

  if (leftBtnStyle.length === 1) leftBtnStyle = btnStyle
  if (rightBtnStyle.length === 1) rightBtnStyle = btnStyle

  return (
    <View style={headerStyle}>
      <TouchableOpacity
        style={leftBtnStyle}
        onPress={btns?.left?.onPress || (() => {})}
        disabled={!btns?.left}>
        <Ionicons
          name={btns?.left?.iconName || 'chevron-back'}
          style={btnIconStyle}
        />
      </TouchableOpacity>

      <View style={titleViewStyle}>
        <Text
          numberOfLines={1}
          style={titleStyle}>
          {title}
        </Text>
      </View>

      <TouchableOpacity
        style={rightBtnStyle}
        onPress={btns?.right?.onPress || (() => {})}
        disabled={!btns?.right}>
        <Ionicons
          name={btns?.right?.iconName || 'chevron-forward'}
          style={btnIconStyle}
        />
      </TouchableOpacity>
    </View>
  )
}

export default SharedHeader
