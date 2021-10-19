import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Groups} from '../components/Index';
import {colors} from '../../../constants/Index';
import axios from 'axios';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: '서울에서 만나요!',
//     nickname: '김민수',
//     area: '서울시',
//     age: '24',
//     date: '8월9~20일',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: '성남에서 만나요!',
//     nickname: '김은지',
//     area: '서울시',
//     age: '24',
//     date: '8월9~20일',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-1455713e29d72',
//     title: '인천에서 만나요!',
//     nickname: '김민수',
//     area: '서울시',
//     age: '24',
//     date: '8월9~20일',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-1455714e29d72',
//     title: '강남에서 만나요!',
//     nickname: '김은지',
//     age: '24',
//     date: '8월9~20일',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e239d72',
//     title: '구로에서 만나요!',
//     nickname: '김민수',
//     area: '서울시',
//     age: '24',
//     date: '8월9~20일',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-1455715e292d72',
//     title: '동탄에서 만나요!',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-1455741e29d72',
//     title: '수원에서 만나요!',
//   },
// ];

const GroupContainers = () => {
  const [groupList, setGroupList] = useState([]);

  const getMatchRommList = () => {
    axios
      .get('/api/matchroom')
      .then(function (response: any) {
        console.log('response=', response);
        setGroupList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getMatchRommList();
  }, []);

  return (
    <View style={{backgroundColor: colors.white}}>
      <Groups groupList={groupList} />
    </View>
  );
};
export default GroupContainers;
