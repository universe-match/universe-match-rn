import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {getWidth, colors, getHeight} from '../../../constants/Index';
import RemoveIcon from '../../../assets/images/common/remove.png';
import big_man from '../../../assets/images/test/big_man.png';
import axios from 'axios';

const ProfileView = ({onClose, otherUserId}: any) => {
  const [otherInfo, setOtherInfo] = useState<any>({});

  const getOtherUserInfo = async () => {
    await axios
      .get(`/api/user/otherinfo/${otherUserId}`)
      .then((response: any) => {
        console.log(response);
        setOtherInfo(response.data);
      });
  };
  useEffect(() => {
    getOtherUserInfo();
    console.log('otherInfo=', otherInfo.length);
  }, []);

  return (
    <View style={styles.background}>
      <View style={styles.dialog}>
        <View style={styles.header}>
          <Text style={styles.headerText}>상세 프로필</Text>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={onClose}
            style={styles.closeWrapper}>
            <Image source={RemoveIcon} style={styles.close} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Image
            source={{
              uri:
                Object.keys(otherInfo).length !== 0 &&
                otherInfo.userImages[0].userImage,
            }}
            style={styles.photo}
          />
          <Text style={styles.profileInfo}>
            {Object.keys(otherInfo).length !== 0 && otherInfo.universeName}/
            {Object.keys(otherInfo).length !== 0 && otherInfo.major}/
            {Object.keys(otherInfo).length !== 0 && otherInfo.mbti}
          </Text>
          <View style={styles.introduces}>
            <Text style={styles.introduce}>자기소개:</Text>
            <Text style={styles.introduceDetail}>
              {Object.keys(otherInfo).length !== 0 && otherInfo.introduce}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: colors.black,
    right: 0,
    top: -70,
    //zIndex: 1,
  },
  dialog: {
    backgroundColor: colors.white,
    width: getWidth(720),
    height: getHeight(1080),
    borderRadius: getWidth(10),
  },
  header: {
    flexDirection: 'row',
    top: getHeight(51),
    width: getWidth(720),
    height: getHeight(90),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
  },
  headerText: {
    color: colors.white,
    fontSize: getWidth(30),
  },
  closeWrapper: {
    position: 'absolute',
    right: getWidth(20),
  },
  close: {
    width: getWidth(22),
    height: getHeight(22),
  },
  content: {
    top: getHeight(50),
  },
  photo: {
    width: getWidth(720),
    height: getHeight(720),
  },
  profileInfo: {
    marginTop: getWidth(10),
    textAlign: 'center',
    fontSize: getWidth(30),
  },
  introduces: {
    marginTop: getWidth(40),
    left: getWidth(50),
  },
  introduce: {
    color: '#767F88',
    fontSize: getWidth(30),
  },
  introduceDetail: {
    fontSize: getWidth(30),
  },
});

export default ProfileView;
