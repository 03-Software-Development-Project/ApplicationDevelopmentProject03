import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useSelector} from 'react-redux'
import {
  totalQuestionsSelector,
  correctQuestionsSelector,
  wrongQuestionsSelector,
  totalPointsSelector,
} from './QuizResultScreenViewModel'
import img from '../../assets/img'
import styles from './styles'

function QuizResultScreen({route, navigation}) {
  const {headerTitle} = route.params
  const totalQuestions = useSelector(totalQuestionsSelector)
  const correctQuestions = useSelector(correctQuestionsSelector)
  const wrongQuestions = useSelector(wrongQuestionsSelector)
  const totalPoints = useSelector(totalPointsSelector)
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
            <Text style={styles.headerTitle}>{headerTitle}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Image
            style={styles.bodyHeaderImage}
            source={correctQuestions >= wrongQuestions ? img.prize : img.failed}
          />

          <Text style={styles.bodyTitle}>
            {correctQuestions >= wrongQuestions ? 'Quiz Passed' : 'Quiz Failed'}
          </Text>
          <Text style={styles.bodyText}>TOTAL QUESTIONS</Text>
          <Text style={styles.bodyHighlightedText}>
            {totalQuestions} QUESTIONS
          </Text>
          <Text style={styles.bodyText}>CORRECT ANSWERS</Text>
          <Text style={styles.bodyHighlightedText}>
            {correctQuestions} ANSWERS
          </Text>
          <Text style={styles.bodyText}>WRONG ANSWERS</Text>
          <Text style={styles.bodyHighlightedText}>
            {wrongQuestions} QUESTIONS
          </Text>
          <Text style={styles.bodyText}>OVERALL</Text>
          <Text style={styles.bodyHighlightedText}>
            {correctQuestions}/{totalQuestions} correct - {totalPoints} pts
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => {
              navigation.navigate({
                name: 'ChapterDetail',
                merge: true,
              })
            }}>
            <Text style={styles.footerButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
export default QuizResultScreen
