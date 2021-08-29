import React from 'react';
import {View} from 'react-native';
import {Groups} from '../components/Index';
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
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '성남에서 만나요!',
    nickname: '김은지',
    area: '서울시',
    age: '24',
    date: '8월9~20일',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455713e29d72',
    title: '인천에서 만나요!',
    nickname: '김민수',
    area: '서울시',
    age: '24',
    date: '8월9~20일',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455714e29d72',
    title: '강남에서 만나요!',
    nickname: '김은지',
    age: '24',
    date: '8월9~20일',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e239d72',
    title: '구로에서 만나요!',
    nickname: '김민수',
    area: '서울시',
    age: '24',
    date: '8월9~20일',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455715e292d72',
    title: '동탄에서 만나요!',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455741e29d72',
    title: '수원에서 만나요!',
  },
];

const GroupContainers = () => {
  return (
    <View style={{backgroundColor: colors.white}}>
      <Groups groups={DATA} />
    </View>
  );
};
export default GroupContainers;
