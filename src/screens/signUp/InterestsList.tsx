import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../constants/Index';

const InterestsList = ({interestedList}: any) => {
  return (
    <View style={styles.content}>
      {interestedList.map((item: any) => (
        <TouchableOpacity style={styles.button}>
          <Text key={item.id}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  button: {
    alignItems: 'center',
    minWidth: getWidth(100),
    height: getHeight(60),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.black,
    marginRight: getWidth(20),
    marginBottom: getWidth(30),
    justifyContent: 'center',
  },
  button_active: {
    backgroundColor: colors.black,
  },
});

export default InterestsList;
