import React from 'react'
import {View, TouchableOpacity, Image, Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'

function SharedClassCard(props) {
  const {$class, onPress} = props

  return (
    <TouchableOpacity
      style={styles.classCard}
      onPress={() => {
        onPress($class.id)
      }}>
      <Image
        source={{
          uri: $class.photoURL,
        }}
        style={styles.thumbnail}
      />
      <View style={styles.content}>
        <Text
          style={styles.title}
          numberOfLines={1}>
          {$class.name}
        </Text>
        <View style={styles.dateView}>
          <Ionicons
            style={styles.dateIcon}
            name="calendar-outline"
          />
          <Text
            style={styles.date}
            numberOfLines={1}>
            {$class.createdDate}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default SharedClassCard
