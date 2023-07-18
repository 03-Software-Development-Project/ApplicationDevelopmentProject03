import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './styles'
import viewModel from './ChapterDetailScreenViewModel'

function ChapterDetailScreen({navigator}) {
  const [data, setData] = useState('')
  useEffect(() => {
    // Perform any initialization logic or data fetching
    // using the view model
    viewModel.initialize()
    // Pass the setData function to the view model
    viewModel.setUpdateData(setData)
  }, [])
  // Example function that can be called from the view model
  const handlePress = () => {
    viewModel.doSomething()
    navigator.navigate('')
  }
  return (
    <View style={styles.container}>
      <Text>ChapterDetailScreen</Text>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.button}>
        <Text style={styles.buttonText}>Do Something</Text>
      </TouchableOpacity>
      <Text>{data}</Text>
    </View>
  )
}
export default ChapterDetailScreen
