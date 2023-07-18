import React, {useEffect} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useSelector} from 'react-redux'
import {isAppDebugModeOnSelector} from './ClassDetailScreenViewModel'
import {color} from '../../constants'
import styles from './styles'
import {SharedDebugDrawerComponent} from '../../components/shared'

function ClassDetailScreen({navigation}) {
  const isAppDebugModeOn = useSelector(isAppDebugModeOnSelector)
  useEffect(() => {}, [])
  return (
    <SafeAreaView style={[styles.container]}>
      {isAppDebugModeOn ? (
        <SharedDebugDrawerComponent navigation={navigation} />
      ) : null}
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
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer()
          }}>
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
        Facilisis in purus et id sit feugiat. Eu nulla vitae aliquet cursus
        volutpat tortor sapien, quis dignissim. Tincidunt amet id in enim.
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
          <Text style={styles.couseFeatureText}>
            Quiz with multiple questions
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 8}}>
          <Image
            source={require('../../assets/icons/coursefeature_03.png')}
            style={styles.courseFeatureimage}
          />
          <Text style={styles.couseFeatureText}>
            245 people joined this course
          </Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 8,
          borderWidth: 0.7,
          borderColor: color['Greyscale.200'],
        }}
      />
      <Text style={styles.sectionTitle}>Chapter </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Question')
        }}>
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
          <Image
            style={{width: 40, height: 40}}
            source={require('../../assets/icons/@next_icon.png')}
          />
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
          <Image
            style={{width: 40, height: 40}}
            source={require('../../assets/icons/@next_icon.png')}
          />
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
          <Image
            style={{width: 40, height: 40}}
            source={require('../../assets/icons/@next_icon.png')}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default ClassDetailScreen
