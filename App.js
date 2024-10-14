import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccoutScreen from './Screens/AccountScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AccountScreen"  screenOptions={{headerShown:false}}>
          <Stack.Screen name='AccountScreen'component={AccoutScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
