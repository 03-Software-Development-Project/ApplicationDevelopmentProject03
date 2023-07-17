import React from 'react'
import {View, Text, ImageBackground, Image} from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useDispatch, useSelector} from 'react-redux'
import {signOut, dismissError, errorSelector} from './HomeDrawerScreenViewModel'
import styles from './styles'
import {SharedErrorModalComponent} from '../../components/shared'

function IconCreator(name) {
  return function Icon(props) {
    const {color, size} = {...props}
    return (
      <Ionicons
        name={name}
        size={size}
        color={color}
      />
    )
  }
}

function CustomDrawerItem(props) {
  const {label, iconName, onPress} = {...props}
  return (
    <DrawerItem
      style={[styles.drawerFooterItem, styles.drawerFooterFirstItem]}
      label={label}
      labelStyle={styles.drawerFooterItemLabel}
      allowFontScaling
      icon={IconCreator(iconName)}
      inactiveBackgroundColor="#EEEEEE"
      inactiveTintColor="#333"
      onPress={onPress}
    />
  )
}

function HomeDrawerScreen(props) {
  const dispatch = useDispatch()
  const error = useSelector(errorSelector)
  const {state, navigation, descriptors} = {...props}
  return (
    <View style={styles.drawer}>
      <View style={styles.drawerHeader}>
        {/* <ImageBackground
          source={require('../../../assets/img/Slide01.png')}
          style={styles.drawerHeaderBackgroundImage}> */}
        <DrawerContentScrollView
          state={state}
          navigation={navigation}
          descriptors={descriptors}
          scrollEnabled={false}
          contentContainerStyle={styles.drawerHeaderContent}>
          <Image
            source={require('../../assets/img/Category01.png')}
            style={styles.drawerHeaderContentAvatar}
          />
          <Text style={styles.drawerHeadrContentNameText}>John Doe</Text>
          <Text style={styles.drawerHeadrContentEmailText}>
            johndoe@gmail.com
          </Text>
        </DrawerContentScrollView>
        {/* </ImageBackground> */}
      </View>

      <View style={styles.drawerBody}>
        <DrawerContentScrollView
          state={state}
          navigation={navigation}
          descriptors={descriptors}
          scrollEnabled={false}
          contentContainerStyle={styles.drawerBodyContent}>
          <View style={styles.drawerBodyContentOptionList}>
            <DrawerItemList
              state={state}
              navigation={navigation}
              descriptors={descriptors}
            />
          </View>
        </DrawerContentScrollView>
      </View>

      <View style={styles.drawerFooter}>
        <CustomDrawerItem
          label="Tell a Friend"
          iconName="share-social-outline"
          onPress={() => {}}
        />
        <CustomDrawerItem
          label="Sign out"
          iconName="log-out-outline"
          onPress={() => {
            dispatch(signOut())
          }}
        />
      </View>
      <SharedErrorModalComponent
        error={error}
        onClose={() => {
          dispatch(dismissError())
        }}
      />
    </View>
  )
}

export default HomeDrawerScreen
