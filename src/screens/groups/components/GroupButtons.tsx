import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import heart from '../../../assets/images/common/heart.png';
import check from '../../../assets/images/common/check.png';

const GroupButtons = () => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.5} style={styles.heartButton}>
        <Image source={heart} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.checkButton}>
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
    width: 77,
    height: 77,
    top: 50,
    left: 280,
  },
  checkButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22.6471,
    width: 77,
    height: 77,
    top: 150,
    left: 280,
  },
});

export default GroupButtons;
