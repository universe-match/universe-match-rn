import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {ChatRooms} from '../components/Index';
import {colors} from '../../../constants/Index';
import axios from 'axios';

// 테스트를 위한 가데이터
// const DATA1 = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: '서울에서 만나요!',
//     nickname: '김민수',
//     place: '서울시',
//     age: '24',
//     fromDate: '20210101',
//     toDate: '20210121',
//   },
// ];

const ChatContainers = ({navigation}: any) => {
  const [chatList, setChatList] = useState([]);

  const getMatchRommList = () => {
    axios
      .get('/api/chatroom')
      .then(function (response: any) {
        console.log('ff', response.data);
        setChatList(response.data);
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
      <ChatRooms chatList={chatList} navigation={navigation} />
      {/* <ChatRooms chatList={DATA1} navigation={navigation} /> */}
    </View>
  );
};
export default ChatContainers;
