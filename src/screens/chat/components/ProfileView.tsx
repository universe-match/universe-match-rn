import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {getWidth, colors, getHeight} from '../../../constants/Index';
import RemoveIcon from '../../../assets/images/common/remove.png';
import big_man from '../../../assets/images/test/big_man.png';

const ProfileView = ({onClose}: any) => {
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
          <Image source={big_man} style={styles.photo} />
          <Text style={styles.profileInfo}>
            고려대학교/경영학과/ESFJ/AB형/174CM
          </Text>
          <View style={styles.introduces}>
            <Text style={styles.introduce}>자기소개:</Text>
            <Text style={styles.introduceDetail}>
              축구를 좋아하는 24살 남자입니다! 취미는 영화보기입니당!
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
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    //top: 1,
    bottom: 0,
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
