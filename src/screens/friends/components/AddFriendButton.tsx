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
    position: 'absolute',
    flexDirection: 'row',
    width: getWidth(388),
    height: getHeight(92),
    top: getWidth(1047),
    left: getWidth(166),
    backgroundColor: colors.green,
    borderRadius: getWidth(31),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: getWidth(36),
    marginRight: getWidth(10),
  },
  image: {
    width: getWidth(35),
    height: getHeight(25),
  },
});

export default AddFriendButton;
