import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { checkUpdateUser, fetchDataClass, fetchSubCollectionData, handleJoinClass } from './components/handle';
import PopupWithTextInput from './popup';


const JoinClass = () => {
  const [data, setData] = useState([]);
  const [subData, setSubData] = useState([]);
  const [docId, setDocId] = useState('');
  const [dataID, setDataID] = useState([])
  const [code, setCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [userClass, setUserClass] = useState('');

  //Fetch Data Collection và ID document của class
  useEffect(() => {
    const fetchData = async () => {
      const { dataRef, subDataRef } = await fetchDataClass();
      setData(dataRef)
      setSubData(subDataRef)
    };

    const handleCheckUserClass = () => {
      checkUpdateUser((updatedUserClass) => {
        setUserClass(updatedUserClass);
      });  
    };

    fetchData();
    handleCheckUserClass();
    
  }, []);

  //Lấy data và keyCode của class 
  const selectClass = async (index) => {
    const selectedData = data[index];
    const selectedDocId = subData[index];
    setDocId(selectedDocId)
    setDataID(selectedData)
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
  const handlePress = (index) => {
    console.log(userClass.name)
    if (userClass == '') {
      selectClass(index);
      openModal()
    } 
    else {
      Alert.alert(
        'Thông báo !',
        'Bạn đã thuộc lớp ' + userClass.name,
        [
          { text: 'Đóng', onPress: () => console.log('Đóng thông báo') }
        ]
      );
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
    handleJoinClass(value, code, dataID)

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
          onPress={() => handlePress(index)} 
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
