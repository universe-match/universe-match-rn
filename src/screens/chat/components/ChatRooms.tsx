import React from 'react';
import {FlatList,View} from 'react-native';
import {ChatRoom} from './Index';

const ChatRooms = ({chatList, navigation}: any) => {
  const renderChat = ({item, idx}: any) => (
    <View key={idx}>
      <ChatRoom
        id={item.id}
        title={item.matchRoomResponse.title}
        area={item.matchRoomResponse.place}
        fromDate={item.matchRoomResponse.fromDate}
        toDate={item.matchRoomResponse.toDate}
        matchingList={item.matchRoomResponse.matchingList}
        navigation={navigation}
      />
    </View>
    // 테스트용
    // <ChatRoom
    //   title={item.title}
    //   area={item.place}
    //   fromDate={item.fromDate}
    //   toDate={item.toDate}
    //   navigation={navigation}
    //   //matchingList={item.matchRoomResponse.matchingList}
    // />
  );

  return (
    <FlatList
      data={chatList}
      renderItem={renderChat}
      keyExtractor={item => item.id}
    />
  );
};

export default ChatRooms;
