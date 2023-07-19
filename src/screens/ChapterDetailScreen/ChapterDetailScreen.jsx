import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import img from '../../assets/img'
import styles from './styles'

function ChapterOverviewItem(props) {
  const {key, image, upperText, lowerText} = {...props}
  return (
    <View
      key={key}
      style={styles.bodyChapterOverviewItem}>
      <Image
        style={styles.bodyChapterOverviewItemImage}
        source={image}
      />
      <View style={styles.bodyChapterOverviewItemTextView}>
        <Text style={styles.bodyChapterOverviewItemUpperText}>{upperText}</Text>
        <Text style={styles.bodyChapterOverviewItemLowerText}>{lowerText}</Text>
      </View>
    </View>
  )
}

function ChapterDetailScreen({navigation}) {
  const chapterOverview = [
    {
      id: 1,
      image: img.checklist,
      upperText: '54',
      lowerText: 'Multiple Choice Questions',
    },
    {
      id: 2,
      image: img.medal,
      upperText: '70%',
      lowerText: 'To pass this test',
    },
  ]
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
          <Text style={styles.bodyTitle}>Chương 01: Giới thiệu về môn học</Text>
          <Text style={styles.bodySubtitle}>12k student took this</Text>

          <View style={styles.bodyChapterOverview}>
            {chapterOverview.map((info) => (
              <ChapterOverviewItem
                key={info.id}
                image={info.image}
                upperText={info.upperText}
                lowerText={info.lowerText}
              />
            ))}
          </View>

          <Text style={styles.bodyHeading}>Before you start</Text>

          <Text style={styles.bodyText}>
            {'\u2022'}You must complete this test in one session, make sure your
            Internet is reliable.{'\n'}
            {'\u2022'}One mark awarded for a correct answer. No negative marking
            will be there for wrong answer.{'\n'}
            {'\u2022'}More you give the correct answer more chance to win the
            badge.
          </Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Ôn tổng chương</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
export default ChapterDetailScreen
