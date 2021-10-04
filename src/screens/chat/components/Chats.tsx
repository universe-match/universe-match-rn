import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Chat} from './Index';
import {getWidth} from '../../../constants/Index';

const Chats = ({messages}: any) => {
  return (
    <View style={styles.messages}>
      {messages.map(({id, nickname, gender, message}: any) => (
        <Chat key={id} nickname={nickname} gender={gender} message={message} />
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
