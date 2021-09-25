import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../../constants/Index';

const ChatProgressBar = () => {
  return (
    <View style={styles.progressBar}>
      <View style={[styles.absoluteFill, {width: '75%'}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 15,
    width: '90%',
    backgroundColor: 'rgba(176, 186, 195, 0.45)',
    borderColor: 'rgba(176, 186, 195, 0.45)',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  absoluteFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.green,
  },
});

export default ChatProgressBar;
