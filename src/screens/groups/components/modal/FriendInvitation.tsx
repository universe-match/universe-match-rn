import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Invitation from '../../../../assets/images/group/invitation.png';
import {getWidth, getHeight} from '../../../../constants/Index';

const FriendInvitation = () => {
  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.titleText}>친구초대</Text>
        <Image source={Invitation} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: getWidth(30),
    paddingRight: getWidth(20),
  },
  card: {
    marginBottom: getWidth(40),
  },
  image: {
    marginLeft: getWidth(32),
    width: getWidth(43),
    height: getHeight(31),
  },
});

export default FriendInvitation;
