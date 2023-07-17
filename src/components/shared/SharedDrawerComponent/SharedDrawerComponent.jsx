import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

function DrawerItemIconCreator(defaultIconName) {
  return function DrawerItemIcon(props) {
    const {color, size} = {...props}

    return (
      <Ionicons
        name={defaultIconName}
        size={size}
        color={color}
      />
    )
  }
}

function SharedDrawerComponent(props) {
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
            source={require('../../../assets/img/Category01.png')}
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
        <DrawerItem
          style={[styles.drawerFooterItem, styles.drawerFooterFirstItem]}
          label="Tell a Friend"
          labelStyle={styles.drawerFooterItemLabel}
          allowFontScaling
          icon={DrawerItemIconCreator('share-social-outline')}
          inactiveBackgroundColor="#EEEEEE"
          inactiveTintColor="#333"
          onPress={() => {}}
        />
        <DrawerItem
          style={[styles.drawerFooterItem, styles.drawerFooterLastItem]}
          label="Sign out"
          labelStyle={styles.drawerFooterItemLabel}
          allowFontScaling
          icon={DrawerItemIconCreator('log-out-outline')}
          inactiveBackgroundColor="#EEEEEE"
          inactiveTintColor="#333"
          onPress={() => {}}
        />
      </View>
    </View>
  )
}

export default SharedDrawerComponent
