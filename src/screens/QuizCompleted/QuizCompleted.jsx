import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {typography, color} from '../../../constants'
import {SafeAreaView} from 'react-native-safe-area-context'
import styles from './styles'
import BtnContinue from '../../components/customButton/BtnContinue'
import Swiper from 'react-native-swiper'
import {Dimensions} from 'react-native'
import {SharedClasscardComponent} from '../../components/shared'
const QuizCompleted = () => {
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
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/icons/prize.png')}
            style={styles.imagePrize}
          />
        </View>
        <View style={styles.mainView}>
          <View style={styles.timeQuiz}>
            <Text style={[typography['heading.h3'], {color: 'white'}]}>Quiz Completed </Text>
          </View>
          <View style={styles.subMainView}>
            <View style={styles.textQuizCompleted}>
              <Text style={[typography['body.medium.medium'], {color: 'white'}]}>
                {'TOTAL QUESTIONS'.toUpperCase()}
              </Text>
              <Text style={[typography['body.xlarge.bold'], {color: 'white'}, {marginTop: 4}]}>
                5 {'questions'.toUpperCase()}
              </Text>
            </View>
            <View style={styles.textQuizCompleted}>
              <Text style={[typography['body.medium.medium'], {color: 'white'}]}>
                {'CORRECT ANSWER'.toUpperCase()}
              </Text>
              <Text style={[typography['body.xlarge.bold'], {color: 'white'}, {marginTop: 4}]}>
                4 {'questions'.toUpperCase()}
              </Text>
            </View>
            <View style={styles.textQuizCompleted}>
              <Text style={[typography['body.medium.medium'], {color: 'white'}]}>
                {'WRONG ANSWER'.toUpperCase()}
              </Text>
              <Text style={[typography['body.xlarge.bold'], {color: 'white'}, {marginTop: 4}]}>
                1 {'questions'.toUpperCase()}
              </Text>
            </View>
            <View style={styles.textQuizCompleted}>
              <Text style={[typography['body.medium.medium'], {color: 'white'}]}>
                {'OVERALL'.toUpperCase()}
              </Text>
              <Text style={[typography['body.xlarge.bold'], {color: 'white'}, {marginTop: 4}]}>
                4/5 correct - 12 pts
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomView}>
          <BtnContinue
            text="Continue"
            onPress={this.handleButtonPress}></BtnContinue>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default QuizCompleted
