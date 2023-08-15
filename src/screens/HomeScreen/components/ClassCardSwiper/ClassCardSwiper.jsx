import React from 'react'
import {View, Text, Image} from 'react-native'
import Swiper from 'react-native-swiper'
import styles from './styles'

function ClassCardSwiper(props) {
  const {classes} = props

  return (
    <Swiper
      style={styles.swiper}
      paginationStyle={styles.pagination}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      loop
      autoplay
      showsButtons={false}>
      {(classes ?? []).map(($class) => (
        <View
          style={styles.item}
          key={$class.id}>
          <Image
            style={styles.thumbnail}
            source={{uri: $class.photoURL}}
          />
          <View style={styles.content}>
            <Text
              style={styles.id}
              numberOfLines={1}>
              {$class.id}
            </Text>
            <Text
              style={styles.title}
              numberOfLines={1}>
              {$class.name}
            </Text>
          </View>
        </View>
      ))}
    </Swiper>
  )
}

export default ClassCardSwiper
