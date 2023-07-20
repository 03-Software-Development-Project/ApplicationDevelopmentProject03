import React, {useEffect} from 'react'
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useDispatch, useSelector} from 'react-redux'
import {
  currentSubjectSelector,
  loadCurrentSubject,
} from './SubjectDetailScreenViewModel'
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

function SubjectDetailScreen({route, navigation}) {
  const {headerTitle, subjectIndex, subjectRefPath} = route.params
  const dispatch = useDispatch()
  /*
  currentSubjectSelector truy xuất môn học được bấm vào của lớp học viên hay môn học hiện tại
  Khi screen được khởi tạo thì sẽ thiết lập chỉ mục của môn học hiện tại, tải môn học hiện tại và các chương của nó (nếu đã có thì tải lại)
  Do hoạt động trên ở trên chỉ được diễn ra khi screen này khởi tạo chứ không đc thực hiện trước, cùng với việc lần truy xuất môn học hiện tại đầu tiên lại diễn ra trước hoạt động này (lúc này chưa thiết lập chỉ mục của môn học hiện tại)
  => Nên dữ liệu trả về sẽ là object rỗng (cần sử dụng các phương pháp khi thao tác object rỗng)
  */
  const subject = useSelector(currentSubjectSelector)
  const subjectOverview = [
    {
      id: 1,
      text: `${(subject.numberOfChapters || 0).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })} Chapters included`,
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

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(loadCurrentSubject(subjectIndex, subjectRefPath))
    }
    fetchData()
  }, [dispatch, subjectIndex, subjectRefPath])
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
          <View style={styles.bodyCard}>
            <Image
              source={img.card}
              style={styles.bodyCardImage}
            />
          </View>
          <Text style={styles.bodySubjectTitle}>{subject.name}</Text>
          <Text
            numberOfLines={6}
            style={styles.bodySubjectDesc}>
            {subject.description}
          </Text>

          <View style={styles.bodySubjectOverview}>
            <Text style={styles.bodySubjectOverviewTitle}>Course Overview</Text>
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
              {(subject.chapters || []).map((chapter, index) => (
                <ChapterItem
                  key={chapter.id}
                  chapterOrd={chapter.ord}
                  chapterName={chapter.name}
                  chapterDesc={chapter.description}
                  onPress={() => {
                    navigation.navigate('ChapterDetail', {
                      headerTitle: subject.name,
                      subjectIndex,
                      chapterIndex: index,
                      chapterRefPath: chapter.refPath,
                    })
                  }}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  )
}
export default SubjectDetailScreen
