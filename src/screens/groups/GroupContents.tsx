import React from 'react';
import {FlatList, View} from 'react-native';
import {Groups} from './Index';
import {colors} from '../../constants/Index';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '서울에서 만나요!',
    nickname: '김민수',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '서울에서 만나요!',
    nickname: '김은지',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455713e29d72',
    title: '서울에서 만나요!',
    nickname: '김민수',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455714e29d72',
    title: '서울에서 만나요!',
    nickname: '김은지',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e239d72',
    title: '서울에서 만나요!',
    nickname: '김민수',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455715e292d72',
    title: '서울에서 만나요!',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455741e29d72',
    title: '서울에서 만나요!',
  },
];

const GroupScreen = () => {
  const renderItem = ({item}: any) => (
    <View style={{backgroundColor: colors.white}}>
      <Groups id={item.id} title={item.title} />
    </View>
  );
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
export default GroupScreen;
