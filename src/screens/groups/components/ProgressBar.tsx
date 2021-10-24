import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, getHeight, getWidth} from '../../../constants/Index';

const ProgressBar = ({matchRoomLen, peopleLimit}: any) => {
  return (
    <View style={styles.progressBar}>
      <View
        style={[
          styles.absoluteFill,
          {width: (matchRoomLen / peopleLimit) * 100 + '%'},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: getHeight(20),
    width: '90%',
    backgroundColor: 'rgba(176, 186, 195, 0.45)',
    borderColor: 'rgba(176, 186, 195, 0.45)',
    borderWidth: getWidth(2),
    borderRadius: getWidth(18),
    marginLeft: getWidth(20),
    marginBottom: getWidth(20),
    marginTop: getWidth(20),
  },
  absoluteFill: {
    position: 'absolute',
    borderRadius: getWidth(18),
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.green,
  },
});

export default ProgressBar;
