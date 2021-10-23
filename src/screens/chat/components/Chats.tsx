import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Chat} from './Index';
import {getWidth} from '../../../constants/Index';

const Chats = ({messages, user, setShowDialog, setOtherUserId}: any) => {
  console.log('messages=', messages);
  return (
    <View style={styles.messages}>
      {messages.length > 0 &&
        messages.map((item: any) => (
          <Chat
            id={item.id}
            username={item.username}
            gender={''}
            userKey={item.userKey}
            message={item.message}
            profileUrl={item.profileUrl}
            user={user}
            setShowDialog={setShowDialog}
            setOtherUserId={setOtherUserId}
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
