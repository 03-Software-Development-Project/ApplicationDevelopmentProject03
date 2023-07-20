import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useDispatch} from 'react-redux'
import {quitExamAttempt} from './QuizStartingScreenViewModel'
import styles from './styles'

function QuizStartingScreen({route, navigation}) {
  const {headerTitle} = route.params
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerBackButton}
            onPress={async () => {
              await dispatch(quitExamAttempt())
              navigation.goBack()
            }}>
            <Ionicons
              name="chevron-back"
              style={styles.headerBackButtonIcon}
            />
          </TouchableOpacity>
          <View style={styles.headerTitleView}>
            <Text style={styles.headerTitle}>{headerTitle}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyTitle}>Time for a quiz?</Text>
          <Text style={styles.bodyText}>
            That’s right. Test your chapter skills in a challenge! Put
            everything you’ve learned to the test and show what you know.
          </Text>
          <View style={styles.bodyTextView}>
            <Ionicons
              style={styles.bodyTextViewIcon}
              name="reader"
            />
            <Text style={styles.bodyText}>
              5 questions - Multiple Difficulty ranking
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => {
              navigation.navigate('Question', {currentQuestionIndex: 0})
            }}>
            <Text style={styles.footerButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
export default QuizStartingScreen
