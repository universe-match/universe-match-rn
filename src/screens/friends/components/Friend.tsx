import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {getWidth, colors} from '../../../constants/Index';
import man from '../../../assets/images/test/man.png';

const Friend = ({profileName, age, mbti, school}: any) => {
  return (
    <View style={styles.friendInfos}>
      <Image style={styles.manPhoto} source={man} />
      <Text>이름: {profileName}</Text>
      <Text>나이: {age}</Text>
      <Text>MBTI: {mbti}</Text>
      <Text>학교: {school}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  friendInfos: {
    backgroundColor: colors.white,
    borderColor: colors.green,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    width: getWidth(600),
  },
  manPhoto: {
    borderRadius: 100,
    height: getWidth(120),
    width: getWidth(120),
    marginLeft: 5,
    borderWidth: 1,
    borderColor: colors.stroke,
  },
});

export default Friend;
