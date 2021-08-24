import React from 'react';
import {StyleSheet, Image, SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GroupScreen from './src/screens/GroupScreen';
import Screen2 from './src/screens/Screen2';
import Screen3 from './src/screens/Screen3';
import Screen4 from './src/screens/Screen4';

import chat from './src/assets/images/bottomTab/chat.png';
import group from './src/assets/images/bottomTab/group.png';
import myInfo from './src/assets/images/bottomTab/myInfo.png';
import friends from './src/assets/images/bottomTab/friends.png';

import {height, width, colors} from './src/constants/Index';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {fontSize: 18},
            activeTintColor: colors.focusTabBar,
            inactiveTintColor: 'black',
            style: {height: height * 70},
          }}>
          <Tab.Screen
            name="Screen1"
            options={{
              tabBarLabel: '그룹',
              tabBarIcon: ({color, size}) => (
                <Image style={styles.tinyLogo} source={group} />
              ),
            }}
            component={GroupScreen}
          />
          <Tab.Screen
            name="Screen2"
            options={{
              tabBarLabel: '채팅',
              tabBarIcon: ({color, size}) => (
                <Image style={styles.tinyLogo} source={chat} />
              ),
            }}
            component={Screen2}
          />
          <Tab.Screen
            name="Screen3"
            options={{
              tabBarLabel: '친구',
              tabBarIcon: ({color, size}) => (
                <Image
                  resizeMode={'cover'}
                  style={{height: height * 25, width: width * 40}}
                  source={friends}
                />
              ),
            }}
            component={Screen3}
          />
          <Tab.Screen
            name="Screen4"
            options={{
              tabBarLabel: '계정',
              tabBarIcon: ({color, size}) => (
                <Image style={styles.tinyLogo} source={myInfo} />
              ),
            }}
            component={Screen4}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: width * 20,
    height: height * 20,
  },
});
export default App;
