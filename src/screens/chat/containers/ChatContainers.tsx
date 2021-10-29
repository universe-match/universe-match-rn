import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {ChatRooms} from '../components/Index';
import {colors} from '../../../constants/Index';
import axios from 'axios';

const ChatContainers = ({navigation}: any) => {
  const [chatList, setChatList] = useState([]);

  const getMatchRommList = () => {
    axios
      .get('/api/chatroom')
      .then(function (response: any) {
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
    </View>
  );
};
export default ChatContainers;
