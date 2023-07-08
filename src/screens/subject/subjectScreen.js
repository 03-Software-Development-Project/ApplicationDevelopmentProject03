import {useNavigation, useRoute} from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {fetchDataSubject} from './components/handle'

function Subject() {
  const route = useRoute()
  const {dataUserClassId} = route.params

  const [subject, setSubject] = useState([])
  const [subjectId, setSubjectId] = useState([])

  const navigation = useNavigation()

  useEffect(() => {
    const getDataSubject = async () => {
      const {dataRef, dataIdRef} = await fetchDataSubject(dataUserClassId)
      setSubject(dataRef)
      setSubjectId(dataIdRef)
      // console.log(dataIdRef)
      // console.log(dataRef)
    }

    getDataSubject()
  }, [])

  const selectSubject = (index) => {
    const dataSubjectId = subjectId[index]
    navigation.navigate('Chapter', {dataSubjectId, dataUserClassId})
    console.log('id môn học: ', dataSubjectId)
  }

  const handleOnPress = (index) => {
    selectSubject(index)
  }

  return (
    <View>
      {subject.map((item, index) => (
        <Text
          key={index}
          onPress={() => handleOnPress(index)}
          style={styles.text}>
          {item.name}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
  },
})

export default Subject
