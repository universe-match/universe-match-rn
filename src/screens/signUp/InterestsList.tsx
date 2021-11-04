import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {getHeight, getWidth, colors} from '../../constants/Index';

const InterestsList = ({interestedList, onTouch}: any) => {
  return (
    <View style={styles.content}>
      {interestedList.map((item: any) => (
        <TouchableOpacity
          style={
            item.selected
              ? {...styles.button, ...styles.button_active}
              : styles.button
          }
          onPress={() => onTouch(item.id)}>
          <Text
            key={item.id}
            style={
              item.selected
                ? {...styles.text, ...styles.text_active}
                : styles.text
            }>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: getWidth(100),
    height: getHeight(60),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.black,
    marginRight: getWidth(20),
    marginBottom: getWidth(30),
    padding: getWidth(20),
  },
  button_active: {
    backgroundColor: colors.black,
  },
  text: {
    color: colors.black,
  },
  text_active: {
    color: colors.white,
  },
});

export default InterestsList;
