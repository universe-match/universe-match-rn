import React from 'react';
import {View} from 'react-native';
import {Chats} from '../components/Index';
import {colors} from '../../../constants/Index';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '서울에서 만나요!',
    nickname: '김민수',
    area: '서울시',
    age: '24',
    date: '8월9~20일',
  },
];

const ChatContainers = () => {
  return (
    <View style={{backgroundColor: colors.white}}>
      <Chats chats={DATA} />
    </View>
  );
};
export default ChatContainers;
