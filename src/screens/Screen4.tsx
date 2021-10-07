import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Profile from './Profile';
import SignIn from './SignIn';
import Setting from './Setting';
import SignUp from './signUp/SignUp';

const Screen4 = ({navigation}: any) => {
  return (
    <SafeAreaView>
      {/* <Profile /> */}
      <Setting navigation={navigation} />
    </SafeAreaView>
  );
};

export default Screen4;
