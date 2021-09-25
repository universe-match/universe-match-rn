import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import ChatContainers from './chat/containers/ChatContainers';
const ChatScreen = () => {
  return (
    <SafeAreaView>
      <ChatContainers />
    </SafeAreaView>
  );
};

export default ChatScreen;
