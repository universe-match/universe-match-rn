import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {getWidth, colors} from '../../../constants/Index';

const RequestFriendsInfo = () => {
  return <Text style={styles.requestText}>“친구요청이 총 2건있습니다”</Text>;
};

const styles = StyleSheet.create({
  requestText: {
    marginTop: getWidth(53),
    marginBottom: getWidth(37),
    alignItems: 'center',
    textAlign: 'center',
    fontSize: getWidth(36),
    color: colors.black2,
  },
});

export default RequestFriendsInfo;
