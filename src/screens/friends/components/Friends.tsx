import React from 'react';
import {FlatList} from 'react-native';
import {RequestFriends, Friend} from './Index';

const Friends = ({friend}: any) => {
  const renderFriends = ({item}: any) => (
    <Friend
      profileName={item.profileName}
      age={item.age}
      mbti={item.mbti}
      school={item.school}
    />
  );

  return (
    <>
      <RequestFriends />
      <FlatList
        data={friend}
        renderItem={renderFriends}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default Friends;
