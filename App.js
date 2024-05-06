import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/views/Home';
import Login from './src/views/Login';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="LoginScreen" options={{headerShown: false}} component={Login} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Home">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={Home} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}