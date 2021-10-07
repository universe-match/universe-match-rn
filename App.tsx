import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import CreateGroup from './src/screens/groups/components/modal/CreateGroup';
import MainScreen from './src/screens/MainScreen';
import SignUp from './src/screens/signUp/SignUp';
import SignIn from './src/screens/SignIn';
import MultiStep from './src/screens/signUp/MultiStep';
import Chatting from './src/screens/chat/components/Chatting';
import Profile from './src/screens/Profile';

const Stack = createStackNavigator();

const App = () => {
  const [isToken, setIsToken] = useState('');
  const token = AsyncStorage.getItem('accessToken', (err, result: any) => {
    setIsToken(result);
    return result;
  });

  axios.defaults.baseURL = 'http://192.168.35.78:9090/';
  axios.interceptors.request.use(async function (config) {
    const token = await AsyncStorage.getItem('accessToken');
    console.log('token==', token);
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isToken ? (
          <Stack.Screen name="Main1" component={MainScreen} />
        ) : (
          <Stack.Screen name="SignIn1" component={SignIn} />
        )}

        <Stack.Screen name="SignUp" component={MultiStep} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="CreateGroup" component={CreateGroup} />
        <Stack.Screen name="Chatting" component={Chatting} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
