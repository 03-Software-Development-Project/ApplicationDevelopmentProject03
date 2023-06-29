import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {typography, color} from '../../../constants'
import {SafeAreaView} from 'react-native-safe-area-context'
import styles from './styles'
import BtnGetStarted from '../../components/customButton/BtnGetStart'
import Swiper from 'react-native-swiper'
import {Dimensions} from 'react-native'
import {SharedClasscardComponent} from '../../components/shared'
const CountingQuiz = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
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
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
        <View style={styles.mainView}>
          <View style={styles.timeQuiz}>
            <Text style={[typography['heading.h3'], {color: 'white'}]}>Time for a quiz?</Text>
          </View>
          <View style={styles.descriptionQuiz}>
            <Text style={[typography['body.medium.regular'], {color: 'white'}]}>
              That’s right. Test your chapter skills in a challenge! Put everything you’ve learned
              to the test and show what you know.
            </Text>
          </View>

          <View style={styles.totalQuiz}>
            <Image
              source={require('../../assets/icons/imagecountQuiz.png')}
              style={styles.imageFeature}
            />
            <Text style={[typography['body.medium.regular'], {color: 'white'}]}>
              5 questions - Multiple Difficulty ranking
            </Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <BtnGetStarted
            text="Get Started"
            onPress={this.handleButtonPress}></BtnGetStarted>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CountingQuiz
