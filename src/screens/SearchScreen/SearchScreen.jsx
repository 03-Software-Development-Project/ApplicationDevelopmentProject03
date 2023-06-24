import React, {useEffect, useState} from 'react'
import {View, Image, Text, TouchableOpacity, SafeAreaViewBase, TextInput} from 'react-native'
import styles from './styles'
import viewModel from './SearchScreenViewModel'
import {SafeAreaView} from 'react-native-safe-area-context'
import {color} from '../../../constants'

function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={{width: 40, height: 40}}
          source={require('../../assets/icons/@search_icon.png')}
        />
        <TextInput
          placeholder="Looking for any courses?"
          style={{flex: 1, marginLeft: 4, color: color['Greyscale.600']}}></TextInput>
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
        <View style={{borderRadius: 99, overflow: 'hidden', marginRight: 8, marginTop: 8}}>
          <Text style={styles.searchSuggestion}> UI Design</Text>
        </View>
        <View style={{borderRadius: 99, overflow: 'hidden', marginRight: 8, marginTop: 8}}>
          <Text style={styles.searchSuggestion}> UI Design</Text>
        </View>
        <View style={{borderRadius: 99, overflow: 'hidden', marginRight: 8, marginTop: 8}}>
          <Text style={styles.searchSuggestion}> UI Design</Text>
        </View>
        <View style={{borderRadius: 99, overflow: 'hidden', marginRight: 8, marginTop: 8}}>
          <Text style={styles.searchSuggestion}> UI Design</Text>
        </View>
        <View style={{borderRadius: 99, overflow: 'hidden', marginRight: 8, marginTop: 8}}>
          <Text style={styles.searchSuggestion}> UI Design</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default SearchScreen
