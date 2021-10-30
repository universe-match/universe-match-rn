import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {getWidth, colors, getHeight} from '../../../constants/Index';
import {Chatting, ProfileView} from './Index';
import man from '../../../assets/images/test/man.png';

const Chat = ({
  id,
  username,
  gender,
  userKey,
  message,
  profileUrl,
  user,
  setShowDialog,
  setOtherUserId,
}: any) => {
  // const [isShowDialog, setShowDialog] = useState(false);
  const handleClick = (id: string) => {
    setShowDialog(true);
    setOtherUserId(id);
  };
  if (userKey === user.id) {
    return (
      <View style={styles.myMessage} key={id}>
        {message !== undefined && (
          <LinearGradient
            useAngle={true}
            angle={90}
            colors={['#72EDC4', '#5EDEB4']}
            style={{
              borderRadius: getWidth(32),
            }}>
            <Text style={styles.text}>{message}</Text>
          </LinearGradient>
        )}
      </View>
    );
  } else if (userKey === 0) {
    return (
      <>
        <View>
          <View style={styles.profileInfo}></View>
          <View style={{backgroundColor: 'gray'}}>
            <Text style={styles.text}>{message}</Text>
          </View>
        </View>
        {/* {isShowDialog && (
          <ProfileView
            onClose={() => {
              setShowDialog(false);
            }}
            userPhoto={man}
          />
        )} */}
      </>
    );
  } else {
    return (
      <>
        <View style={styles.message}>
          <TouchableOpacity onPress={() => handleClick(userKey)}>
            <View style={styles.profileInfo}>
              <Image
                source={{uri: profileUrl === '' ? '' : profileUrl}}
                style={
                  gender === 'M'
                    ? styles.photo
                    : {...styles.photo, ...styles.womanPhoto}
                }
              />
              <Text>{username}</Text>
            </View>
          </TouchableOpacity>
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
        {/* {isShowDialog && (
          <ProfileView
            onClose={() => {
              setShowDialog(false);
            }}
            userPhoto={man}
          />
        )} */}
      </>
    );
  }
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
