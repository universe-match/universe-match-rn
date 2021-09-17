import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../../../constants/Index';
import {Personnel, Ratio, SelectGroup, SelectDay} from '../Index';
import RemoveIcon from '../../../../assets/images/common/remove.png';

const CreateGroup = ({onClose}: any) => {
  return (
    <View style={styles.background}>
      <View style={styles.dialog}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={onClose}
            style={styles.closeWrapper}>
            <Image source={RemoveIcon} style={styles.close} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Personnel />
          <Ratio />
          <SelectGroup />
          <SelectDay />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#00000040',
  },
  dialog: {
    backgroundColor: colors.white,
    width: getWidth(720),
    height: getHeight(1240),
    paddingLeft: getWidth(63),
    paddingRight: getWidth(63),
  },
  header: {
    alignItems: 'center',
    width: '100%',
    top: getHeight(96),
  },
  closeWrapper: {
    position: 'absolute',
    right: 0,
  },
  close: {
    width: getWidth(22),
    height: getHeight(22),
  },

  content: {
    top: getHeight(200),
    width: '100%',
  },
});

export default CreateGroup;
