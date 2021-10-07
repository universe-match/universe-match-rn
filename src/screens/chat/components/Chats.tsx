import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Chat} from './Index';
import {getWidth} from '../../../constants/Index';

const Chats = ({messages, user}: any) => {
  console.log('messages===', messages);
  console.log('user====', user);
  return (
    <View style={styles.messages}>
      {messages.map(({id, username, gender, message}: any) => (
        <Chat
          key={id}
          username={username}
          gender={gender}
          message={message}
          user={user}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  messages: {
    marginBottom: getWidth(52),
  },
});

export default Chats;
