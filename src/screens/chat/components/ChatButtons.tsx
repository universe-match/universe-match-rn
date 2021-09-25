import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {getWidth, getHeight, colors} from '../../../constants/Index';

const ChatButtons = () => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.5} style={styles.chatButton}>
        <Text style={styles.chatButtonText}>채팅하기</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.outButton}>
        <Text style={styles.chatButtonText}>나가기</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  chatButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 10.9153,
    width: getWidth(237),
    height: getHeight(92),
    top: getWidth(170),
    left: getWidth(100),
  },
  outButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 10.9153,
    width: getWidth(237),
    height: getHeight(92),
    top: getWidth(170),
    left: getWidth(380),
  },
  chatButtonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: getWidth(30),
  },
});

export default ChatButtons;
