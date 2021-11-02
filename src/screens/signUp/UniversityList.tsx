import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../constants/Index';

const UniversityList = ({onClose, setName, universeList}: any) => {
  const handlePress = (item: any) => {
    if (item.id !== '') {
      setName(item.name);

      //onClose();
    }
  };
  return (
    <View style={styles.dialog}>
      <ScrollView style={{height: getHeight(300)}}>
        {universeList.length > 0 &&
          universeList.map((item: any) => (
            <View style={styles.item}>
              <View style={styles.universityWrapper}>
                <Text style={styles.name} key={item.id}>
                  {item.name}
                </Text>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity
                  key={item.id}
                  style={styles.button}
                  onPress={() => handlePress(item)}>
                  <Text style={styles.buttonText}>선택</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  dialog: {
    top: getWidth(250),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    left: getWidth(0),
  },
  universityWrapper: {
    width: getWidth(370),
    borderColor: colors.green,
    borderWidth: 1,
    justifyContent: 'center',
    padding: getWidth(10),
  },
  name: {
    padding: getWidth(10),
  },
  buttonWrapper: {
    borderColor: colors.green,
    borderWidth: 1,
    padding: getWidth(10),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 5,
    width: getWidth(100),
    height: getHeight(40),
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.bold,
  },
});

export default UniversityList;
