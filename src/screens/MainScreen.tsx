import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GroupScreen, ChatScreen, FriendScreen, MyInfoScreen} from './Index';
import group from '../assets/images/bottomTab/group.png';
import group_active from '../assets/images/bottomTab/group_active.png';
import chat from '../assets/images/bottomTab/chat.png';
import chat_active from '../assets/images/bottomTab/chat_active.png';
import friends from '../assets/images/bottomTab/friends.png';
import friends_active from '../assets/images/bottomTab/friends_active.png';
import myInfo from '../assets/images/bottomTab/myInfo.png';
import myInfo_active from '../assets/images/bottomTab/myInfo_active.png';
import {getHeight, colors} from '../constants/Index';

const Tab = createBottomTabNavigator();
const tabs = [
  {
    name: 'GroupScreen',
    label: '그룹',
    image: group,
    image_active: group_active,
    component: GroupScreen,
  },
  {
    name: 'ChatScreen',
    label: '채팅',
    image: chat,
    image_active: chat_active,
    component: ChatScreen,
  },
  // {
  //   name: 'FriendScreen',
  //   label: '친구',
  //   image: friends,
  //   image_active: friends_active,
  //   component: FriendScreen,
  // },
  {
    name: 'MyInfoScreen',
    label: '계정',
    image: myInfo,
    image_active: myInfo_active,
    component: MyInfoScreen,
  },
];
const MainScreen = ({navigation, route}: any) => {
  const res = AsyncStorage.getItem('accessToken', (err, result: any) => {
    return result;
  });
  res.then(token => {
    if (token === null || token === '') {
      navigation.navigate('SignIn');
    }
  });

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 15},
        activeTintColor: colors.focusTabBar,
        inactiveTintColor: 'black',
        style: {height: getHeight(110)},
      }}>
      {tabs.map(({name, label, image, image_active, component}) => (
        <Tab.Screen
          key={name}
          name={name}
          options={{
            unmountOnBlur: true,
            tabBarLabel: `${label}`,
            tabBarIcon: ({focused}) => {
              return <Image source={focused ? image_active : image} />;
            },
          }}
          component={component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainScreen;
