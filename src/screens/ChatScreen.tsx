import React from 'react';
import {SafeAreaView} from 'react-native';
import ChatContainers from './chat/containers/ChatContainers';

const ChatScreen = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <ChatContainers navigation={navigation} />
    </SafeAreaView>
  );
};

export default ChatScreen;
