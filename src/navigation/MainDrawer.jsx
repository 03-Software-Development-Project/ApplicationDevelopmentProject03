import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {MainDrawerScreen} from '../screens'
import HomeStack from './HomeStack'
import ClassDetailStack from './ClassDetailStack'

const Drawer = createDrawerNavigator()

function DrawerItemIconCreator(defaultIconName, focusedIconName) {
  return function DrawerItemIcon(props) {
    const {color, size, focused} = {...props}
    if (focused) {
      return (
        <Ionicons
          name={focusedIconName}
          size={size}
          color={color}
        />
      )
    }
    return (
      <Ionicons
        name={defaultIconName}
        size={size}
        color={color}
      />
    )
  }
}

function DrawerContent(props) {
  const {state, navigation, descriptors} = {...props}
  return (
    <MainDrawerScreen
      state={state}
      navigation={navigation}
      descriptors={descriptors}
    />
  )
}

function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#068FFF',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerAllowFontScaling: true,
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          drawerLabel: 'Home',
          drawerIcon: DrawerItemIconCreator('home', 'home-outline'),
        }}
      />
      <Drawer.Screen
        name="ClassDetailStack"
        component={ClassDetailStack}
        options={{
          drawerLabel: 'Your class',
          drawerIcon: DrawerItemIconCreator('person', 'person-outline'),
        }}
      />
    </Drawer.Navigator>
  )
}

export default MainDrawer
