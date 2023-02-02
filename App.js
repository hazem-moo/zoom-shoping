import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Navbar from './src/navigation/Navbar'
import { Provider } from 'react-redux'
import store from './src/store/store'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={ store }>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Navbar'>
          <Stack.Screen name='Navbar' component={ Navbar } />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}