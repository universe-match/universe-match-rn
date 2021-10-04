import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {getWidth, colors, getHeight} from '../../../constants/Index';
import man from '../../../assets/images/test/man.png';
import woman from '../../../assets/images/test/woman.png';

const Chat = ({nickname, gender, message}: any) => {
  if (nickname === '나') {
    return (
      <View style={styles.myMessage}>
        <LinearGradient
          useAngle={true}
          angle={90}
          colors={['#72EDC4', '#5EDEB4']}
          style={{
            borderRadius: getWidth(32),
          }}>
          <Text style={styles.text}>{message}</Text>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.message}>
      <View style={styles.profileInfo}>
        <Image
          source={man}
          style={
            gender === 'man'
              ? styles.photo
              : {...styles.photo, ...styles.womanPhoto}
          }
        />
        <Text>{nickname}</Text>
      </View>
      <LinearGradient
        useAngle={true}
        angle={90}
        colors={
          gender === 'man' ? ['#A1C4FF', '#75A4F4'] : ['#FFD8E8', '#FFBAD6']
        }
        style={{
          borderRadius: getWidth(32),
        }}>
        <Text style={styles.text}>{message}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
  },
  photo: {
    borderRadius: 100,
    height: getWidth(80),
    width: getWidth(80),
    marginLeft: 5,
    borderWidth: 1,
    borderColor: colors.stroke,
  },
  womanPhoto: {
    borderColor: '#FFBAD6',
  },
  message: {
    alignSelf: 'flex-start',
    marginBottom: getWidth(20),
    marginLeft: getWidth(49),
  },
  myMessage: {
    alignSelf: 'flex-end',
    marginBottom: getWidth(20),
    marginRight: getWidth(41),
  },
  text: {
    padding: getWidth(20),
    textAlignVertical: 'center',
    color: colors.white,
    fontSize: getWidth(30),
  },
  image: {
    width: getWidth(44),
    height: getHeight(44),
    marginLeft: getWidth(32),
  },
  textArea: {
    flexDirection: 'row',
  },
});

export default Chat;
