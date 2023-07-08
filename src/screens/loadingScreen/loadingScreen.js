import {useNavigation, useRoute} from '@react-navigation/native'
import {useEffect, useState} from 'react'
import {StyleSheet} from 'react-native'
import {getLimitedQuestions} from '../../screen/question/model/questionModel'

function Loading() {
  const route = useRoute()
  const {dataChapterId} = route.params
  const {dataSubjectId} = route.params
  const {dataUserClassId} = route.params

  const [chapterId, setChapterId] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    const getQuestion = async () => {
      const {dataRef, subDataRef} = await getLimitedQuestions(
        dataUserClassId,
        dataSubjectId,
        dataChapterId
      )
      console.log(
        `this is the questionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn ${JSON.stringify(
          dataRef
        )}`
      )
      navigation.navigate('Question', {
        dataUserClassId,
        dataSubjectId,
        dataChapterId,
      })
    }

    getQuestion()
  }, [])
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    borderBottomWidth: 1,
    padding: 10,
  },
})

export default Loading
