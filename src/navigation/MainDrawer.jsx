import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {HomeScreen, ClassDetailScreen, HomeDrawerScreen} from '../screens'

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
    <HomeDrawerScreen
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
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: 'Home',
          drawerIcon: DrawerItemIconCreator('home', 'home-outline'),
        }}
      />
      <Drawer.Screen
        name="ClassDetail"
        component={ClassDetailScreen}
        options={{
          drawerLabel: 'Your class',
          drawerIcon: DrawerItemIconCreator('person', 'person-outline'),
        }}
      />
    </Drawer.Navigator>
  )
}

export default MainDrawer
