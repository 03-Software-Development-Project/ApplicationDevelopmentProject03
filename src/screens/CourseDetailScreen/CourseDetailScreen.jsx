import React, {useEffect, useState} from 'react'
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import styles from './styles'
import {color, typography} from '../../../constants'

function CourseDetailScreen() {
  return (
    <SafeAreaView style={[styles.container]}>
      <Image
        source={require('../../assets/img/Slide01.png')}
        style={styles.courseImage}
      />
      <View
        style={{
          top: 50,
          left: 0,
          right: 0,
          height: 48,
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity>
          <Image
            style={{width: 40, height: 40}}
            source={require('../../assets/icons/@back_icon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{width: 40, height: 40}}
            source={require('../../assets/icons/@save_icon.png')}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.courseTitle}>
        UI Design Fundamental - 6 Step to Start Designing Interface
      </Text>
      <Text style={styles.courseDescription}>
        Facilisis in purus et id sit feugiat. Eu nulla vitae aliquet cursus volutpat tortor sapien,
        quis dignissim. Tincidunt amet id in enim.
      </Text>
      <Text style={styles.sectionTitle}>Course Overview </Text>
      <View style={{paddingHorizontal: 20}}>
        <View style={{flexDirection: 'row', paddingVertical: 8}}>
          <Image
            source={require('../../assets/icons/coursefeature_01.png')}
            style={styles.courseFeatureimage}
          />
          <Text style={styles.couseFeatureText}>03 Chapters included</Text>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 8}}>
          <Image
            source={require('../../assets/icons/coursefeature_02.png')}
            style={styles.courseFeatureimage}
          />
          <Text style={styles.couseFeatureText}>Quiz with multiple questions</Text>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 8}}>
          <Image
            source={require('../../assets/icons/coursefeature_03.png')}
            style={styles.courseFeatureimage}
          />
          <Text style={styles.couseFeatureText}>245 people joined this course</Text>
        </View>
      </View>
      <View style={{marginVertical: 8, borderWidth: 0.7, borderColor: color['Greyscale.200']}} />
      <Text style={styles.sectionTitle}>Chapter </Text>
      <TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{borderRadius: 90, overflow: 'hidden'}}>
            <Text style={styles.chapterNum}>01</Text>
          </View>
          <View style={{flex: 1, paddingHorizontal: 8}}>
            <Text style={styles.chapterTitle}> Chapter name 01</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../assets/icons/@next_icon.png')}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{borderRadius: 90, overflow: 'hidden'}}>
            <Text style={styles.chapterNum}>02</Text>
          </View>
          <View style={{flex: 1, paddingHorizontal: 8}}>
            <Text style={styles.chapterTitle}> Chapter name 02</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../assets/icons/@next_icon.png')}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{borderRadius: 90, overflow: 'hidden'}}>
            <Text style={styles.chapterNum}>03</Text>
          </View>
          <View style={{flex: 1, paddingHorizontal: 8}}>
            <Text style={styles.chapterTitle}> Chapter name 03</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../assets/icons/@next_icon.png')}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CourseDetailScreen
