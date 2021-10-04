import React from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
import {Friend, AddFriendButton} from './Index';
import setting from '../../../assets/images/friend/setting.png';
import {getWidth, colors, getHeight} from '../../../constants/Index';

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
      <View style={styles.friendsInfo}>
        <Text style={styles.myfriend}>김민수님의 친구</Text>
        <View style={styles.friendNumber}>
          <Text style={styles.friendNumberText}>총 8명</Text>
          <Image style={styles.image} source={setting} />
        </View>
      </View>
      <FlatList
        data={friend}
        renderItem={renderFriends}
        keyExtractor={item => item.id}
      />
      <AddFriendButton />
    </>
  );
};

const styles = StyleSheet.create({
  friendsInfo: {
    marginLeft: getWidth(60),
    marginTop: getHeight(40),
    marginBottom: getHeight(10),
    flexDirection: 'row',
  },
  myfriend: {
    fontSize: getWidth(30),
    color: colors.black2,
  },
  friendNumber: {
    flexDirection: 'row',
    marginLeft: getWidth(250),
  },
  friendNumberText: {
    fontSize: getWidth(30),
    color: '#767F88',
  },
  image: {
    width: getWidth(30),
    height: getHeight(26),
    marginLeft: getWidth(10),
  },
});

export default Friends;
