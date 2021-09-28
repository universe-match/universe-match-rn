import React from 'react';
import {FlatList} from 'react-native';
import Chat from './Chat';

const Chats = ({chats}: any) => {
  const renderGroup = ({item}: any) => (
    <Chat title={item.title} area={item.area} age={item.age} date={item.date} />
  );

  return (
    <FlatList
      data={chats}
      renderItem={renderGroup}
      keyExtractor={item => item.id}
    />
  );
};

export default Chats;
