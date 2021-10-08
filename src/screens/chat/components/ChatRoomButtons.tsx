import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {getWidth, getHeight, colors} from '../../../constants/Index';
import {ChatOutPopup} from './Index';

const ChatRoomButtons = ({navigation, id}: any) => {
  const [isShowDialog, setShowDialog] = useState(false);

  console.log('id=====', id);
  const handlePress = (flag: any) => {
    setShowDialog(flag);
  };
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.chatButton}
        onPress={() => {
          navigation.navigate('Chatting', {
            itemId: id,
          });
        }}>
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

export default ChatRoomButtons;
