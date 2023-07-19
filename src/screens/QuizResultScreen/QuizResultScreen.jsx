import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import img from '../../assets/img'
import styles from './styles'

function QuizResultScreen({route, navigation}) {
  const {isQuizPassed} = route.params || {isQuizPassed: true}
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerBackButton}
            onPress={() => {
              navigation.goBack()
            }}>
            <Ionicons
              name="chevron-back"
              style={styles.headerBackButtonIcon}
            />
          </TouchableOpacity>
          <View style={styles.headerTitleView}>
            <Text style={styles.headerTitle}>Quiz 2</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Image
            style={styles.bodyHeaderImage}
            source={isQuizPassed ? img.prize : img.failed}
          />

          <Text style={styles.bodyTitle}>Quiz Passed</Text>
          <Text style={styles.bodyText}>TOTAL QUESTIONS</Text>
          <Text style={styles.bodyHighlightedText}>5 QUESTIONS</Text>
          <Text style={styles.bodyText}>CORRECT ANSWERS</Text>
          <Text style={styles.bodyHighlightedText}>4 ANSWERS</Text>
          <Text style={styles.bodyText}>WRONG ANSWERS</Text>
          <Text style={styles.bodyHighlightedText}>1 QUESTIONS</Text>
          <Text style={styles.bodyText}>OVERALL</Text>
          <Text style={styles.bodyHighlightedText}>4/5 correct - 12 pts</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
export default QuizResultScreen
