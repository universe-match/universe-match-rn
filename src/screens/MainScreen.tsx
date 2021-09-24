import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import GroupScreen from './GroupScreen';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import group from '../assets/images/bottomTab/group.png';
import chat from '../assets/images/bottomTab/chat.png';
import friends from '../assets/images/bottomTab/friends.png';
import myInfo from '../assets/images/bottomTab/myInfo.png';
import {getHeight, colors} from '../constants/Index';

const Tab = createBottomTabNavigator();
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
const MainScreen = () => {
  return (
    <Tab.Navigator
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
            tabBarIcon: () => <Image source={image} />,
          }}
          component={component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainScreen;
