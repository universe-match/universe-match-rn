import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import Profile from './Profile'
import SignIn from './SignIn'
import Setting from './Setting'
import SignUp from './SignUp'
import StudentSignUp from './StudentSignUp'

const Screen4 = () => {
    return (
        <SafeAreaView>
            
            <StudentSignUp />
        </SafeAreaView>
    )
}

export default Screen4
