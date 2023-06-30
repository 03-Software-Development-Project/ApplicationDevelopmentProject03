import { Text, StyleSheet, View, Alert, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { fetchDataChapter } from './components/handle';

const Chapter = () => {
  const route = useRoute();
  const { dataSubjectId } = route.params;
  const { dataUserClassId } = route.params;

  const [chapters, setChapters] = useState([]);
  const [chapterId, setChapterId] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const getDataSubject = async () => {
        const { dataRef, dataIdRef } = await fetchDataChapter(dataUserClassId, dataSubjectId)
        setChapters(dataRef)
        setChapterId(dataIdRef)
        //console.log(dataRef)
    };

    getDataSubject();
  }, []);
  const selectChapter = (index) => {
    const dataChapterId = chapterId[index]
    //navigation.navigate('Question')
    console.log('id chapter: ',dataChapterId)
  }
  
  const handleOnPress = (index) => {
    selectChapter(index)
  }

  return (
    <View>
      {chapters.map((item, index) => (
            <Text key={index} onPress={() => handleOnPress(index)} style={styles.text}>{item.name}</Text>
      ))}
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
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default Chapter;