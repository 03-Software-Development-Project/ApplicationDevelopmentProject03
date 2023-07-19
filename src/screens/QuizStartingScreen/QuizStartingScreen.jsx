import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'

function QuizStartingScreen({navigation}) {
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
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
export default QuizStartingScreen
