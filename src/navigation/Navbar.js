import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Sections from '../screens/Sections'
import Card from '../screens/Card'
import Personal from '../screens/Personal'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const val = useSelector(state => state.counter.val)
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    if (route.name === 'Home') {
                        iconName = 'home'
                        color = focused ? "#00f" : "#999"
                        size = focused ? 30 : 28
                    }
                    if (route.name === 'Sections') {
                        iconName = 'md-apps'
                        color = focused ? "#00f" : "#999"
                        size = focused ? 30 : 28
                    }
                    if (route.name === 'Card') {
                        iconName = 'ios-cart'
                        color = focused ? "#00f" : "#999"
                        size = focused ? 30 : 28
                    }
                    if (route.name === 'Personal') {
                        iconName = 'person-sharp'
                        color = focused ? "#00f" : "#999"
                        size = focused ? 30 : 28
                    }
                    return <Ionicons color={ color } name={ iconName } size={ size } />
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingBottom: 15,
                }
            })}
        >
            <Tab.Screen name='Home' component={ Home } options={{ title: ''}} />
            <Tab.Screen name='Sections' component={ Sections } />

            <Tab.Screen 
                name='Card' 
                component={ Card }
                options={{
                    title: '',
                    tabBarBadge: <Text>{val <= 0 ? 0 : val}</Text>
                }}
            />
            <Tab.Screen name='Personal' component={ Personal } />
        </Tab.Navigator>
    )
}