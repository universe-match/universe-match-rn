import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {getHeight, getWidth} from '../../../constants/Index';
import plus from '../../../assets/images/common/plus.png';

const AddGroupButton = ({navigation}: any) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('CreateGroup');
        }}
        style={styles.touchableOpacityStyle}>
        <Image source={plus} style={styles.floatingButtonStyle} />
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: getWidth(70),
    bottom: getWidth(150),
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: getWidth(100),
    height: getHeight(100),
  },
});

export default AddGroupButton;
