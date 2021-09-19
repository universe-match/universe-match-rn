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

const App = () => {
  return (
    <NavigationContainer>
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
              tabBarIcon: () => (
                <Image style={styles.tinyLogo} source={image} />
              ),
            }}
            component={component}
          />
        ))}
      </Tab.Navigator>
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
