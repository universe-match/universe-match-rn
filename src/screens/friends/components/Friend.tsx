import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image} from 'react-native';
import {getWidth, colors, getHeight} from '../../../constants/Index';
import man from '../../../assets/images/test/man.png';
import check from '../../../assets/images/friend/check.png';
import friendDelete from '../../../assets/images/friend/delete.png';

const Friend = ({profileName, age, mbti, school}: any) => {
  return (
    <SafeAreaView style={styles.containers}>
      <View style={styles.friendInfos}>
        <Image style={styles.manPhoto} source={man} />
        <View style={styles.profileText}>
          <Text>이름: {profileName}</Text>
          <Text>나이: {age}</Text>
          <Text>MBTI: {mbti}</Text>
          <Text>학교: {school}</Text>
        </View>
        <View>
          <Image style={styles.delete} source={friendDelete} />
          <Image style={styles.check} source={check} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containers: {
    display: 'flex',
    backgroundColor: colors.white,
    borderColor: colors.green,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    width: getWidth(600),
    height: getHeight(193),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5,
  },
  friendInfos: {
    flexDirection: 'row',
    marginLeft: getWidth(45),
    marginTop: getHeight(35),
  },
  manPhoto: {
    borderRadius: 100,
    height: getWidth(144),
    width: getWidth(150),
    marginLeft: 5,
    borderWidth: 1,
    borderColor: colors.stroke,
  },
  profileText: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: getWidth(40),
    paddingRight: getWidth(78),
    marginTop: getHeight(13),
  },
  delete: {
    width: getWidth(77),
    height: getHeight(60),
    marginBottom: getWidth(10),
  },
  check: {
    width: getWidth(77),
    height: getHeight(60),
  },
});

export default Friend;
