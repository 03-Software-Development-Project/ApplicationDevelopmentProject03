import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

import {FlatList} from 'react-native'
import {typography, color} from '../../../constants'
import {SafeAreaView} from 'react-native-safe-area-context'
import ClassCard from '../../components/classCard/classCard'
import {useState} from 'react'
import {Modal} from 'react-native'
import {Button} from 'react-native'

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedClass, setSelectedClass] = useState(null)

  const classes = [
    {
      id: '1',
      image: require('../../assets/img/courseimage_01.png'),
      courseID: 'LIFESTYLE101',
      courseTitle: 'Mastering a Healthy and Balanced Lifestyle for Optimal Well-being',
      courseDate: '2023-06-05',
    },
    {
      id: '2',
      image: require('../../assets/img/courseimage_02.png'),
      courseID: 'CODING202',
      courseTitle: 'Comprehensive Coding: From Fundamentals to Advanced Techniques',
      courseDate: '2023-06-07',
    },
    {
      id: '3',
      image: require('../../assets/img/courseimage_03.png'),
      courseID: 'MEDITATE303',
      courseTitle: 'Meditation and Mindfulness: Cultivating Inner Peace and Clarity',
      courseDate: '2023-06-10',
    },
    {
      id: '4',
      image: require('../../assets/img/courseimage_04.png'),
      courseID: 'GUITAR404',
      courseTitle: 'Unleashing Your Inner Rockstar: Guitar Techniques and Musical Theory',
      courseDate: '2023-06-12',
    },
    {
      id: '5',
      image: require('../../assets/img/courseimage_05.png'),
      courseID: 'ARTISTRY505',
      courseTitle: 'The Artistic Journey: Exploring Boundless Creativity and Self-Expression',
      courseDate: '2023-06-15',
    },
  ]

  const handlePress = (classItem) => {
    setSelectedClass(classItem)
    setModalVisible(true)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerView}>
        <Text style={[typography['heading.h3'], {fontWeight: 700}, {flex: 1}]}>Explore</Text>
        <Image
          source={require('../../assets/icons/@2x_search_icon.png')}
          style={styles.image}
        />
      </View>
      {/* --------------------- */}
      <View style={styles.childView}>
        <FlatList
          data={classes}
          renderItem={({item}) => (
            <ClassCard
              image={item.image}
              courseID={item.courseID}
              courseTitle={item.courseTitle}
              courseDate={item.courseDate}
              onPress={() => handlePress(item)}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{selectedClass?.courseTitle}</Text>
              <Text style={styles.modalText}>{selectedClass?.courseDate}</Text>
              <Button
                title="Close"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 50,
  },
  childView: {
    margintop: 20,
    flex: 1,
  },
  headerView: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
})

export default HomeScreen
