import React, {useEffect} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useDispatch, useSelector} from 'react-redux'
import {
  loadStudentClass,
  studentClassSelector,
} from './ClassDetailScreenViewModel'
import img from '../../assets/img'
import styles from './styles'
import {SharedHeader} from '../../components/shared'

function SubjectItem(props) {
  const {subjectName, subjectDesc, onPress} = props
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.lowerBodySubjectItem}>
      <Ionicons
        style={styles.lowerBodySubjectItemIcon}
        name="library-outline"
      />
      <View style={styles.lowerBodySubjectItemTextView}>
        <Text
          numberOfLines={1}
          style={styles.lowerBodySubjectName}>
          {subjectName}
        </Text>
        <Text
          numberOfLines={2}
          style={styles.lowerBodySubjectDesc}>
          {subjectDesc}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

function ClassDetailScreen({navigation}) {
  const dispatch = useDispatch()
  const studentClass = useSelector(studentClassSelector)

  const openSideDrawer = () => {
    navigation.openDrawer()
  }

  useEffect(() => {
    const fetchData = async () => {
      dispatch(loadStudentClass())
    }
    fetchData()
  }, [dispatch])

  return (
    <View style={styles.container}>
      <SafeAreaView
        edges={['left, right']}
        style={styles.outerTopSafeArea}>
        <Image
          style={styles.backgroundImage}
          source={img.background}
        />
        <SafeAreaView
          edges={['top']}
          style={styles.innerTopSafeArea}>
          <SharedHeader
            title=""
            preset="transparent"
            btns={{
              left: {
                iconName: 'menu',
                onPress: openSideDrawer,
              },
            }}
          />
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView
        edges={['left', 'right']}
        style={styles.body}>
        <View style={styles.upperBody}>
          <Text style={styles.upperBodyTitle}>{studentClass.name}</Text>
          <Text style={styles.upperBodyText}>Mã lớp: {studentClass.id}</Text>
        </View>
        <View style={styles.middleBody}>
          <Text style={styles.middleBodyTitle}>Mô tả lớp học</Text>
          <Text
            numberOfLines={6}
            style={styles.middleBodyText}>
            {studentClass.description}
          </Text>
        </View>
        <View style={styles.lowerBody}>
          <Text style={styles.lowerBodyTitle}>Các môn có trong lớp học</Text>
          <ScrollView style={styles.lowerBodySrollViewContainer}>
            <View style={styles.lowerBodySrollViewContent}>
              {(studentClass.subjects || []).map((subject, index) => (
                <SubjectItem
                  key={subject.id}
                  subjectName={subject.idname}
                  subjectDesc={subject.description}
                  onPress={() => {
                    navigation.navigate('SubjectDetail', {
                      headerTitle: studentClass.name,
                      subjectIndex: index,
                      subjectRefPath: subject.refPath,
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
export default ClassDetailScreen
