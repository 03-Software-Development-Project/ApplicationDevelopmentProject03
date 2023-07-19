import React from 'react'
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import img from '../../assets/img'
import styles from './styles'

function SubjectOverviewItem(props) {
  const {key, text, iconName} = {...props}
  return (
    <View
      key={key}
      style={styles.bodySubjectOverviewItem}>
      <Ionicons
        name={iconName}
        style={styles.bodySubjectOverviewItemIcon}
      />
      <Text style={styles.bodySubjectOverviewItemText}>{text}</Text>
    </View>
  )
}

function ChapterItem(props) {
  const {key, chapterOrd, chapterName, chapterDesc, onPress} = {...props}
  return (
    <TouchableOpacity
      key={key}
      onPress={onPress}
      style={styles.footerChapterItem}>
      <Ionicons
        style={styles.footerChapterItemIcon}
        name="book-outline"
      />
      <View style={styles.footerChapterItemTextView}>
        <Text
          numberOfLines={1}
          style={styles.footerChapterName}>
          {chapterOrd}. {chapterName}
        </Text>
        <Text
          numberOfLines={2}
          style={styles.footerChapterDesc}>
          {chapterDesc}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

function SubjectDetailScreen({navigation}) {
  const subjectOverview = [
    {
      id: 1,
      text: '03 Chapters included',
      iconName: 'library-outline',
    },
    {
      id: 2,
      text: 'Quiz with multiple questions',
      iconName: 'list-outline',
    },
    {
      id: 3,
      text: '245 people joined this course',
      iconName: 'people-outline',
    },
  ]

  const chapters = [
    {id: 1, name: 'Chương 1', description: 'Mô tả', onPress: () => {}},
    {id: 2, name: 'Chương 2', description: 'Mô tả', onPress: () => {}},
    {id: 3, name: 'Chương 3', description: 'Mô tả', onPress: () => {}},
    {id: 4, name: 'Chương 1', description: 'Mô tả', onPress: () => {}},
    {id: 5, name: 'Chương 2', description: 'Mô tả', onPress: () => {}},
    {id: 6, name: 'Chương 3', description: 'Mô tả', onPress: () => {}},
    {id: 7, name: 'Chương 1', description: 'Mô tả', onPress: () => {}},
    {id: 8, name: 'Chương 2', description: 'Mô tả', onPress: () => {}},
    {id: 9, name: 'Chương 3', description: 'Mô tả', onPress: () => {}},
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
          <View style={styles.bodyCard}>
            <Image
              source={img.card}
              style={styles.bodyCardImage}
            />
          </View>
          <Text style={styles.bodySubjectTitle}>
            UI Design Fundamental - 6 Step to Start Designing Interface
          </Text>
          <Text style={styles.bodySubjectDesc}>
            Facilisis in purus et id sit feugiat. Eu nulla vitae aliquet cursus
            volutpat tortor sapien, quis dignissim. Tincidunt amet id in enim.
          </Text>

          <View style={styles.bodySubjectOverview}>
            <Text style={styles.bodySubjectOverviewTitle}>
              Course Overview{' '}
            </Text>
            {subjectOverview.map((info) => (
              <SubjectOverviewItem
                key={info.id}
                text={info.text}
                iconName={info.iconName}
              />
            ))}
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerTitleView}>
            <Text style={styles.footerTitle}>Chapter</Text>
          </View>
          <ScrollView style={styles.footerSrollViewContainer}>
            <View style={styles.footerSrollViewContent}>
              {chapters.map((chapter, index) => (
                <ChapterItem
                  key={chapter.id}
                  chapterOrd={index + 1}
                  chapterName={chapter.name}
                  chapterDesc={chapter.description}
                  onPress={chapter.onPress}
                />
              ))}
            </View>
          </ScrollView>
          {/* <Text style={styles.sectionTitle}>Chapter </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Question')
          }}>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{borderRadius: 90, overflow: 'hidden'}}>
              <Text style={styles.chapterNum}>01</Text>
            </View>
            <View style={{flex: 1, paddingHorizontal: 8}}>
              <Text style={styles.chapterTitle}> Chapter name 01</Text>
            </View>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../assets/icons/@next_icon.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{borderRadius: 90, overflow: 'hidden'}}>
              <Text style={styles.chapterNum}>02</Text>
            </View>
            <View style={{flex: 1, paddingHorizontal: 8}}>
              <Text style={styles.chapterTitle}> Chapter name 02</Text>
            </View>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../assets/icons/@next_icon.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{borderRadius: 90, overflow: 'hidden'}}>
              <Text style={styles.chapterNum}>03</Text>
            </View>
            <View style={{flex: 1, paddingHorizontal: 8}}>
              <Text style={styles.chapterTitle}> Chapter name 03</Text>
            </View>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../assets/icons/@next_icon.png')}
            />
          </View>
        </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    </View>
  )
}
export default SubjectDetailScreen
