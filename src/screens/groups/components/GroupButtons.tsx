import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, getHeight, getWidth} from '../../../constants/Index';

const GroupButtons = ({checkIn}: any) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.5} style={styles.heartButton}>
        <Text style={styles.buttonText}>찜하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.InButton}
        onPress={checkIn}>
        <Text style={styles.buttonText}>참여하기</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  heartButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 10.9153,
    width: getWidth(237),
    height: getHeight(92),
    top: getWidth(180),
    left: getWidth(100),
  },
  InButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 10.9153,
    width: getWidth(237),
    height: getHeight(92),
    top: getWidth(180),
    left: getWidth(380),
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: getWidth(30),
  },
});

export default GroupButtons;
