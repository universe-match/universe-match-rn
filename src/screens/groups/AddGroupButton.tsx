import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../constants/Index';
import plus from '../../assets/images/common/plus.png';

const AddGroupButton = () => {
  const clickHandler = () => {};

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={clickHandler}
      style={styles.touchableOpacityStyle}>
      <Image source={plus} style={styles.floatingButtonStyle} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 50,
    backgroundColor: colors.green,
    borderRadius: 50,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});

export default AddGroupButton;
