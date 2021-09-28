import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {getWidth, getHeight, colors} from '../../../constants/Index';
import {ChatOutPopup} from './Index';

const ChatButtons = () => {
  const [isShowDialog, setShowDialog] = useState(false);

  const handlePress = (flag: any) => {
    setShowDialog(flag);
  };
  return (
    <>
      <TouchableOpacity activeOpacity={0.5} style={styles.chatButton}>
        <Text style={styles.chatButtonText}>채팅하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.outButton}
        onPress={handlePress}>
        <Text style={styles.chatButtonText}>나가기</Text>
      </TouchableOpacity>
      {isShowDialog && (
        <ChatOutPopup
          onClose={() => {
            setShowDialog(false);
          }}
        />
      )}
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
    top: getWidth(318),
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
    top: getWidth(318),
    left: getWidth(380),
  },
  chatButtonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: getWidth(30),
  },
});

export default ChatButtons;
