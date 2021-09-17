import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../../../constants/Index';
import Ratio_img1 from '../../../../assets/images/group/ratio_img1.png';
import Ratio_img2 from '../../../../assets/images/group/ratio_img2.png';

const Ratio = () => {
  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.titleText}>비율</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>동성</Text>
          <Image source={Ratio_img1} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>이성</Text>
          <Image source={Ratio_img2} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'column',
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
  buttonText: {
    fontSize: getWidth(30),
  },
  image: {
    marginLeft: getWidth(32),
  },
});

export default Ratio;
