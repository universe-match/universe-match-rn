import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Chat} from './Index';
import {getWidth} from '../../../constants/Index';

const Chats = ({messages, user}: any) => {
  return (
    <View style={styles.messages}>
      {messages.length > 0 &&
        messages.map((item: any) => (
          <Chat
            id={item.id}
            username={item.username}
            gender={''}
            message={item.message}
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
