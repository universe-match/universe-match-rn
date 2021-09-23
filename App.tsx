import React from 'react';
import {StyleSheet, Image} from 'react-native';

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

import {getHeight, getWidth, colors} from './src/constants/Index';
import {createStackNavigator} from '@react-navigation/stack';

import CreateGroup from './src/screens/groups/components/modal/CreateGroup';
import Invitation from './src/screens/groups/components/modal/Invitation';
import MainScreen from './src/screens/MainScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const tabs = [
  {
    name: 'Screen1',
    label: '그룹',
    image: group,
    component: GroupScreen,
  },
  {
    name: 'Screen2',
    label: '채팅',
    image: chat,
    component: Screen2,
  },
  {
    name: 'Screen3',
    label: '친구',
    image: friends,
    component: Screen3,
  },
  {
    name: 'Screen4',
    label: '계정',
    image: myInfo,
    component: Screen4,
  },
];

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 15},
          activeTintColor: colors.focusTabBar,
          inactiveTintColor: 'black',
          style: {height: getHeight(110)},
        }}>
        {tabs.map(({name, label, image, component}) => (
          <Tab.Screen
            key={name}
            name={name}
            options={{
              tabBarLabel: `${label}`,
              tabBarIcon: () => (
                <Image style={styles.tinyLogo} source={image} />
              ),
            }}
            component={component}
          />
        ))}
      </Tab.Navigator> */}
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="CreateGroup" component={CreateGroup} />
        <Stack.Screen name="Invitation" component={Invitation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: getWidth(40),
    height: getHeight(40),
  },
});
export default App;
