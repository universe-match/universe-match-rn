import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {GroupScreen, ChatScreen, FriendScreen, Screen4} from './Index';
import group from '../assets/images/bottomTab/group.png';
import chat from '../assets/images/bottomTab/chat.png';
import friends from '../assets/images/bottomTab/friends.png';
import myInfo from '../assets/images/bottomTab/myInfo.png';
import {getHeight, colors} from '../constants/Index';

const Tab = createBottomTabNavigator();
const tabs = [
  {
    name: 'GroupScreen',
    label: '그룹',
    image: group,
    component: GroupScreen,
  },
  {
    name: 'ChatScreen',
    label: '채팅',
    image: chat,
    component: ChatScreen,
  },
  {
    name: 'FriendScreen',
    label: '친구',
    image: friends,
    component: FriendScreen,
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
