import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import heart from '../../../assets/images/common/heart.png';
import check from '../../../assets/images/common/check.png';
import {getWidth} from '../../../constants/Index';

const GroupButtons = ({checkIn}: any) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.5} style={styles.heartButton}>
        <Image source={heart} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.checkButton}
        onPress={checkIn}>
        <Image source={check} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  heartButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22.6471,
    width: getWidth(150),
    height: getWidth(150),
    top: getWidth(50),
    right: getWidth(120),
  },
  checkButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22.6471,
    width: getWidth(150),
    height: getWidth(150),
    bottom: getWidth(50),
    right: getWidth(120),
  },
});

export default GroupButtons;
