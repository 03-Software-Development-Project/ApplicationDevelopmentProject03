import {useNavigation} from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import {Alert, StyleSheet, Text, View} from 'react-native'
import {getLimitedQuestions} from '../../screen/question/model/questionModel'
import {
  checkUpdateUser,
  fetchDataClass,
  fetchSubCollectionData,
  getDataUser,
  handleJoinClass,
} from './components/handle'
import PopupWithTextInput from './popup'

Text

function JoinClass() {
  const [data, setData] = useState([])
  const [subData, setSubData] = useState([])
  const [docId, setDocId] = useState('')
  const [dataId, setDataId] = useState([])
  const [dataUserClassId, setDataUserClassId] = useState('')
  const [dataUserDetailsClass, setDataUserDetailsClass] = useState([])
  const [code, setCode] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [userClass, setUserClass] = useState('')

  const navigation = useNavigation()

  // Fetch Data Collection và ID document của class
  useEffect(() => {
    const fetchDataQuestion = async () => {
      const {dataRef, subDataRef} = await getLimitedQuestions()
      console.log(dataRef)
    }
    const handleCheckUserClass = async () => {
      checkUpdateUser((updatedUserClass) => {
        setUserClass(updatedUserClass)
        fetchDataUser()
        // console.log(updatedUserClass)
      })
    }

    const fetchDataUser = async () => {
      const dataRef = await getDataUser()
      setDataUserClassId(dataRef.class.classId)
      setDataUserDetailsClass(dataRef.class.detailsClass)
    }

    const fetchData = async () => {
      const {dataRef, subDataRef} = await fetchDataClass()
      setData(dataRef)
      setSubData(subDataRef)
    }
    // fetchDataQuestion()
    handleCheckUserClass()
    fetchDataUser()
    fetchData()
  }, [])

  // Lấy data và keyCode của class
  const selectClass = async (index) => {
    const selectedData = data[index]
    const selectedDocId = subData[index]
    setDocId(selectedDocId)
    setDataId(selectedData)
    console.log('Selected Doc ID:', selectedDocId)
    // console.log("Selected Data:", selectedData);

    if (selectedDocId) {
      try {
        const subCollectionData = await fetchSubCollectionData(selectedDocId)
        console.log(subCollectionData)
        setCode(subCollectionData)
      } catch (error) {
        console.error(error)
      }
    }
  }

  // Xử lý 2 onPress
  const handleOnPress = (index) => {
    console.log('this workeddddddddddddddddddddddddddddddddddddd')
    const selectedDocId = subData[index]
    console.log(selectedDocId)
    console.log(dataUserClassId)
    if (dataUserClassId === undefined) {
      selectClass(index)
      openModal()
    } else if (selectedDocId && selectedDocId === dataUserClassId) {
      navigation.navigate('Subject', {dataUserClassId})
    } else {
      Alert.alert(
        'Thông báo !',
        `Bạn đã thuộc lớp ${dataUserDetailsClass.name}`,
        [{text: 'Đóng', onPress: () => console.log('Đóng thông báo')}]
      )
    }
  }

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const handlePopupSubmit = (value) => {
    // get data user
    handleJoinClass(value, code, dataId, docId)

    // Lưu giá trị đã nhập vào state
    setInputValue(value)

    // Đóng popup
    closeModal()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Join class</Text>
      {data.map((item, index) => (
        <View style={styles.dataView}>
          <Text
            key={index}
            onPress={() => handleOnPress(index)}
            style={styles.text}>
            {item.name}
          </Text>
        </View>
      ))}

      <PopupWithTextInput
        visible={modalVisible}
        onClose={closeModal}
        onSubmit={handlePopupSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    marginHorizontal: 12,
  },
  dataView: {
    width: '90%',
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingVertical: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FAFAFA',
  },
})

export default JoinClass
