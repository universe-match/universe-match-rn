import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {colors, getHeight, getWidth} from '../../../constants/Index';
import addFriend from '../../../assets/images/friend/addFriend.png';

const AddFriendButton = () => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {}}
        style={styles.touchableOpacityStyle}>
        <Text style={styles.text}>친구추가</Text>
        <Image source={addFriend} style={styles.image} />
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  touchableOpacityStyle: {
    width: 75,
    height: 75,
    right: 20,
    bottom: 50,
    backgroundColor: colors.green,
    borderRadius: 50,
  },
  text: {},
  image: {
    width: getWidth(35),
    height: getHeight(25),
  },
});

export default AddFriendButton;
