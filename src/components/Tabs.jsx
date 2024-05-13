import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import Home from './src/views/Home';
import Login from './src/views/Login';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" size={24} color="black" />
            ),
          }} 
        />
        <Tab.Screen 
          name="Login" 
          component={LoginStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}