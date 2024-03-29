import React from 'react';
import {View} from 'react-native';
import {FriendsRequest, Friends} from '../components/Index';
import {colors} from '../../../constants/Index';

const DATA = [
  {
    id: '58694a0f-3da1-471f-bd96-1455715e292d72',
    profileName: '김민수',
    age: '24',
    mbti: 'ENTJ',
    school: '고려대학교',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455715e292d73',
    profileName: '김민수',
    age: '24',
    mbti: 'ENTJ',
    school: '고려대학교',
  },
];

const FriendContainers = () => {
  return (
    <View style={{backgroundColor: colors.white}}>
      <FriendsRequest friend={DATA} />
      <Friends friend={DATA} />
    </View>
  );
};
export default FriendContainers;
