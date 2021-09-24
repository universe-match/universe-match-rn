import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../constants/Index';
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
    color: 'red',
    width: 50,
    height: 50,
  },
});

export default AddGroupButton;
