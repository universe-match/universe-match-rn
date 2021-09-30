import React from 'react';
import {SafeAreaView} from 'react-native';
import FriendContainers from './friends/containers/FriendContainers';
import Header from '../components/groupmatch/Header';

const FriendScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <FriendContainers />
    </SafeAreaView>
  );
};

export default FriendScreen;
