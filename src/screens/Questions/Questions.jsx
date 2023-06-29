import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {ScrollView} from 'react-native'
import {typography, color} from '../../../constants'
import {SafeAreaView} from 'react-native-safe-area-context'
import styles from './styles'
import Swiper from 'react-native-swiper'
import {Dimensions} from 'react-native'
import {SharedClasscardComponent} from '../../components/shared'
import BtnAnswerError from '../../components/customButton/BtnAnswerError'
import BtnAnswerSuccess from '../../components/customButton/BtnAnswerSuccess'

const Questions = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backgroundHeadColor}>
        <View style={styles.headerView}>
          <View style={{flex: 1}}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/back_btn.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 2}}>
            <Text style={[typography['body.large.semibold'], {color: 'white'}]}>
              Counting: Quiz 2
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.question}>
        <Text
          style={[
            typography['body.xlarge.medium'],
            {paddingVertical: 32},
            {paddingHorizontal: 20},
          ]}>
          Which tag is used to define the main heading in HTML?
        </Text>
      </View>

      <Text style={[typography['body.large.bold'], {paddingVertical: 20}, {marginLeft: 20}]}>
        Choose 1 answer:
      </Text>
      <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
        <View style={{paddingVertical: 8}}>
          <TouchableOpacity style={styles.buttonAnswer}>
            <Text style={styles.textAnswer}>A. {'<h1>'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingVertical: 8}}>
          <TouchableOpacity style={styles.buttonAnswer}>
            <Text style={styles.textAnswer}>B. {'<p>'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingVertical: 8}}>
          <BtnAnswerError style={styles.buttonAnswerError}>C. {'<div>'}</BtnAnswerError>
        </View>
        <View style={{paddingVertical: 8}}>
          <BtnAnswerSuccess style={styles.buttonAnswerSuccess}>D. {'<span>'}</BtnAnswerSuccess>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default Questions
