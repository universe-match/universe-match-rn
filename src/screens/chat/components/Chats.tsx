import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Chat} from './Index';
import {getWidth} from '../../../constants/Index';

const Chats = ({messages, user}: any) => {
  return (
    <View style={styles.messages}>
      {messages.map(({id, username, gender, message}: any) => (
        <Chat
          id={id}
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
    marginBottom: getWidth(92),
  },
});

export default Chats;
