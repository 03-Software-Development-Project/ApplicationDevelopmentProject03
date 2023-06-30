import { Text, StyleSheet, View, Alert, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { fetchDataClass, fetchSubCollectionData, handleJoinClass, checkUpdateUser, getDataUser } from './components/handle';
import PopupWithTextInput from './popup';


const JoinClass = () => {
  const [data, setData] = useState([]);
  const [subData, setSubData] = useState([]);
  const [docId, setDocId] = useState('');
  const [dataId, setDataId] = useState([]);
  const [dataUserClassId, setDataUserClassId] = useState('');
  const [dataUserDetailsClass, setDataUserDetailsClass] = useState([])
  const [code, setCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [userClass, setUserClass] = useState('');

  const navigation = useNavigation();

  //Fetch Data Collection và ID document của class
  useEffect(() => {
    const handleCheckUserClass = async () => {
      checkUpdateUser((updatedUserClass) => {
        setUserClass(updatedUserClass);
        fetchDataUser()
        //console.log(updatedUserClass)
      });
    };

    const fetchDataUser = async () => {
      const dataRef = await getDataUser();
      setDataUserClassId(dataRef.class.classId)
      setDataUserDetailsClass(dataRef.class.detailsClass)
    };

    const fetchData = async () => {
      const { dataRef, subDataRef } = await fetchDataClass();
      setData(dataRef)
      setSubData(subDataRef)
    };

    handleCheckUserClass();
    fetchDataUser();
    fetchData();
  }, []);

  //Lấy data và keyCode của class 
  const selectClass = async (index) => {
    const selectedData = data[index];
    const selectedDocId = subData[index];
    setDocId(selectedDocId)
    setDataId(selectedData)
    console.log("Selected Doc ID:", selectedDocId);
    //console.log("Selected Data:", selectedData);

    if (selectedDocId) {
      try {
        const subCollectionData = await fetchSubCollectionData(selectedDocId)
        console.log(subCollectionData);
        setCode(subCollectionData)
      } catch (error) {
        console.error(error);
      }
    };
  }

  //Xử lý 2 onPress
  const handleOnPress = (index) => {
    const selectedDocId = subData[index];
    console.log(selectedDocId)
    console.log(dataUserClassId)
    if (dataUserClassId === undefined) {
      selectClass(index);
      openModal();
    }
    else {
      if (selectedDocId && selectedDocId === dataUserClassId) {
        navigation.navigate('Subject', { dataUserClassId });
      }
      else {
        Alert.alert(
        'Thông báo !',
        'Bạn đã thuộc lớp ' + dataUserDetailsClass.name,
        [
          { text: 'Đóng', onPress: () => console.log('Đóng thông báo') }
        ]
      );
      }

    }
  }

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handlePopupSubmit = (value) => {
    //get data user
    handleJoinClass(value, code, dataId, docId)

    // Lưu giá trị đã nhập vào state
    setInputValue(value);

    // Đóng popup
    closeModal();
    
  };

  return (
    <View>
      {data.map((item, index) => (
        <Text
          key={index}
          onPress={() => handleOnPress(index)} 
          style={styles.text}>{item.name}</Text>
      ))}
      
      <PopupWithTextInput visible={modalVisible}
        onClose={closeModal}
        onSubmit={handlePopupSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
  },
});

export default JoinClass;
