import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {HomeScreen, ClassDetailScreen} from '../screens'

const Drawer = createDrawerNavigator()
function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        name="ClassDetail"
        component={ClassDetailScreen}
      />
    </Drawer.Navigator>
  )
}

export default HomeDrawer
