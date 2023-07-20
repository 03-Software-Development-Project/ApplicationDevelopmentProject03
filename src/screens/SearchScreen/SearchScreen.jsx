import React from 'react'
import {View, Text, TextInput} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {SafeAreaView} from 'react-native-safe-area-context'
import styles from './styles'
import {color} from '../../constants'

function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Ionicons
          name="search"
          size={30}
          color="black"
        />
        <TextInput
          placeholder="Looking for any courses?"
          style={{
            flex: 1,
            marginLeft: 4,
            color: color['Greyscale.600'],
          }}
        />
        <Text style={{color: color['info.500']}}>Cancel</Text>
      </View>
      <Text style={styles.sectionTitle}>Top Searches </Text>
      <View
        style={{
          paddingHorizontal: 16,
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            borderRadius: 99,
            overflow: 'hidden',
            marginRight: 8,
            marginTop: 8,
          }}>
          <Text style={styles.searchSuggestion}> UI Design</Text>
        </View>
        <View
          style={{
            borderRadius: 99,
            overflow: 'hidden',
            marginRight: 8,
            marginTop: 8,
          }}>
          <Text style={styles.searchSuggestion}> UI Design</Text>
        </View>
        <View
          style={{
            borderRadius: 99,
            overflow: 'hidden',
            marginRight: 8,
            marginTop: 8,
          }}>
          <Text style={styles.searchSuggestion}> UI Design</Text>
        </View>
        <View
          style={{
            borderRadius: 99,
            overflow: 'hidden',
            marginRight: 8,
            marginTop: 8,
          }}>
          <Text style={styles.searchSuggestion}> UI Design</Text>
        </View>
        <View
          style={{
            borderRadius: 99,
            overflow: 'hidden',
            marginRight: 8,
            marginTop: 8,
          }}>
          <Text style={styles.searchSuggestion}> UI Design</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default SearchScreen
