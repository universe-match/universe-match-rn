import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../constants/Index';

const Groups = ({interestedList}: any) => {
  return (
    <View>
      {interestedList.map((item: any) => (
        <TouchableOpacity style={styles.button}>
          <Text key={item.id}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: getWidth(150),
    padding: getWidth(20),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.black,
    marginBottom: getWidth(37),
  },
});

export default Groups;
