import React from 'react';
import {FlatList} from 'react-native';
import {FriendsRequestNumber, FriendRequest} from './Index';

const FriendsRequest = ({friend}: any) => {
  const renderFriends = ({item}: any) => (
    <FriendRequest
      profileName={item.profileName}
      age={item.age}
      mbti={item.mbti}
      school={item.school}
    />
  );

  return (
    <>
      <FriendsRequestNumber />
      <FlatList
        data={friend}
        renderItem={renderFriends}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default FriendsRequest;
