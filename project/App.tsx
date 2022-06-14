// expo install expo-web-browser expo-auth-session expo-random
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button, AsyncStorage } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import pay from './pay';
import login from './login';
import HomeScreen from './screens/home';

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="login" 
        component={login}
        options={{
          headerShown: false,  
        }} 
      />
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
      <Stack.Screen 
        name="pay" 
        component={pay}
        options={{
          headerShown: false,  
        }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;