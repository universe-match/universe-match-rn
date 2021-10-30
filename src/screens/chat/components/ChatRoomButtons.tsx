import axios from 'axios';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';

import {getWidth, getHeight, colors} from '../../../constants/Index';
import {ChatOutPopup} from './Index';

const ChatRoomButtons = ({navigation, id, getMatchRommList}: any) => {
  const [isShowDialog, setShowDialog] = useState(false);

  const handlePress = (flag: any) => {
    // setShowDialog(flag);
    axios
      .delete(`api/match/${id}`)
      .then((res: any) => {
        Alert.alert('채팅방에서 나가셨습니다');
        getMatchRommList('');
      })
      .catch(error => {
        console.log(error);
      });
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
    top: getWidth(200),
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
    top: getWidth(200),
    left: getWidth(380),
  },
  chatButtonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: getWidth(30),
  },
});

export default ChatRoomButtons;
