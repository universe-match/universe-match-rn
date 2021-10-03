import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {getHeight, getWidth, colors} from '../../../../constants/Index';
import Same from '../../../../assets/images/group/same_sex.png';
import Opposite from '../../../../assets/images/group/opposite_sex.png';

const Ratio = ({setGenderKind}: any) => {
  const [isPress, setIsPress] = useState(null);

  const handleClick = (values: any) => {
    setGenderKind(values);
    setIsPress(values);
  };

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.titleText}>비율</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={
            isPress === 'same'
              ? {...styles.button, ...styles.button_active}
              : styles.button
          }
          onPress={() => handleClick('same')}>
          <Text style={styles.buttonText}>동성</Text>
          <Image source={Same} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity
          style={
            isPress === 'opposite'
              ? {...styles.button, ...styles.button_active}
              : styles.button
          }
          onPress={() => handleClick('opposite')}>
          <Text style={styles.buttonText}>이성</Text>
          <Image source={Opposite} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'column',
    marginBottom: getWidth(14),
  },
  titleText: {
    fontSize: getWidth(30),
  },
  card: {
    marginBottom: getWidth(40),
  },
  buttons: {
    flexDirection: 'row',
    paddingTop: getWidth(14),
    marginLeft: getWidth(40),
  },
  button: {
    flexDirection: 'row',
    marginRight: getWidth(22),
    width: getWidth(250),
    height: getHeight(96),
    borderRadius: 8,
    borderColor: colors.green,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_active: {
    backgroundColor: 'rgba(94, 222, 180, 0.31);',
  },
  buttonText: {
    fontSize: getWidth(30),
  },
  image: {
    marginLeft: getWidth(32),
    width: getWidth(55),
    height: getHeight(55),
  },
});

export default Ratio;
