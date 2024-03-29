import React, {ReactNode} from 'react';
import {TouchableOpacity, StyleSheet, Image, Text, View} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../constants/Index';
import RemoveIcon from '../../assets/images/common/remove.png';

interface Dialog {
  title: string;
  onClose(): void;
  content: ReactNode;
}

const Dialog = ({title, onClose, content}: Dialog) => {
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
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.content}>{content}</View>
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
    width: getWidth(620),
    height: getHeight(665),
    borderRadius: getWidth(10),
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
  title: {
    top: getHeight(65),
    fontFamily: fonts.bold,
    fontSize: getWidth(30),
  },
  content: {
    top: getHeight(200),
    width: '100%',
  },
});

export default Dialog;
