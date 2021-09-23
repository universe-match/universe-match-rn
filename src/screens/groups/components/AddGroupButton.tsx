import React, {useState} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../constants/Index';
import plus from '../../../assets/images/common/plus.png';
import CreateGroup from './modal/CreateGroup';

const AddGroupButton = ({navigation}: any) => {
  const [isShowDialog, setShowDialog] = useState(false);

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
      {/* {isShowDialog && (
        <CreateGroup
          onClose={() => {
            setShowDialog(false);
          }}
        />
      )} */}
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
