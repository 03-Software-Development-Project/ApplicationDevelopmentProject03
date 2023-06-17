import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native'
import {typography, color} from '../../../constants'
import React, {Component} from 'react'
import LinearGradient from 'react-native-linear-gradient'

export class ClassCard extends Component {
  render() {
    const {image, courseID, courseTitle, courseDate, onPress} = this.props

    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.card}>
        <Image
          source={image}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <View style={styles.pill}>
            <Text
              style={[
                typography['body.small.semibold'],
                {fontWeight: 700},
                {color: color['Warning.900']},
              ]}>
              {courseID}
            </Text>
          </View>
          <View style={styles.childView}>
            <Text style={[typography['heading.h6'], {fontWeight: 700}, {color: 'white'}]}>
              {courseTitle}
            </Text>
            <Text style={[typography['body.small.regular'], {marginTop: 4}, {color: 'white'}]}>
              {courseDate}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  card: {
    margin: 10,
    alignItems: 'center',
    height: 360,
    width: 250,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  textContainer: {
    marginLeft: 10,
    marginBottom: 10,
  },
  courseTitle: {
    color: 'white',
  },
  courseDate: {
    fontSize: 16,
    color: 'white',
  },
  pill: {
    backgroundColor: color['Warning.500'],
    borderRadius: 990,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  childView: {
    paddingTop: 4,
  },
})

export default ClassCard
