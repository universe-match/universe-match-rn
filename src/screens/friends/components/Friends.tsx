import React from 'react';
import {FlatList} from 'react-native';
import {RequestFriendsInfo, RequestFriend} from './Index';

const Friends = ({friend}: any) => {
  const renderFriends = ({item}: any) => (
    <RequestFriend
      profileName={item.profileName}
      age={item.age}
      mbti={item.mbti}
      school={item.school}
    />
  );

  return (
    <>
      <RequestFriendsInfo />
      <FlatList
        data={friend}
        renderItem={renderFriends}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default Friends;
