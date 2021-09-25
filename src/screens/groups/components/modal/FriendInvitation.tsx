import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Invitation from '../../../../assets/images/group/invitation.png';
import {getWidth} from '../../../../constants/Index';

const FriendInvitation = ({onPress}: any) => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.titleText}>친구초대</Text>
          <TouchableOpacity onPress={() => onPress(true)}>
            <Image source={Invitation} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
    </>
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
  },
});

export default FriendInvitation;
