import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Alert} from 'react-native';
import {ModalPortal} from 'react-native-modals';
import Search from './src/components/groupmatch/Search';
import CreateGroup from './src/screens/groups/components/modal/CreateGroup';
import MainScreen from './src/screens/MainScreen';
import SignUp from './src/screens/signUp/SignUp';
import SignIn from './src/screens/SignIn';
import MultiStep from './src/screens/signUp/MultiStep';
import Chatting from './src/screens/chat/components/Chatting';
import Profile from './src/screens/Profile';
import {Terms, Complaint, Alarm, LeaveOut} from './src/screens/setting/Index';
import jwt_decode from 'jwt-decode';
import messaging from '@react-native-firebase/messaging';

const Stack = createStackNavigator();

const App = () => {
  const [isToken, setIsToken] = useState('');
  const token: any = AsyncStorage.getItem('accessToken', (err, result: any) => {
    setIsToken(result);
    return result;
  });
  if (token) {
    token.then((res: any) => {
      var decodedJwt: any = jwt_decode(res);
      if (decodedJwt.exp * 1000 < Date.now()) {
        AsyncStorage.removeItem('accessToken');
      }
    });
  }
  //axios.defaults.baseURL = 'http://172.30.70.118:9090/';
  axios.defaults.baseURL = 'http://3.34.191.212:9090/';

  axios.interceptors.request.use(async function (config) {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  });
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      // console.log('Authorization status:', authStatus);
    }
  }
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  useEffect(() => {
    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });
    requestUserPermission();
    // return unsubscribe;
  }, []);

  return (
    <>
      <ModalPortal />
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
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="CreateGroup" component={CreateGroup} />
          <Stack.Screen name="Chatting" component={Chatting} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Terms" component={Terms} />
          <Stack.Screen name="Alarm" component={Alarm} />
          <Stack.Screen name="Complaint" component={Complaint} />
          <Stack.Screen name="LeaveOut" component={LeaveOut} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
