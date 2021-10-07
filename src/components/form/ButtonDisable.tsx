import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {fonts, getHeight, getWidth, colors} from '../../constants/Index';

interface Button {
  title: string;
  style?: object;
  onPress(): void;
}

const Button = ({title, onPress, style}: Button) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <LinearGradient
        useAngle={true}
        angle={90}
        colors={[colors.gray, colors.gray]}
        style={{
          borderRadius: getWidth(5),
        }}>
        <Text
          style={[
            styles.buttonText,
            {
              lineHeight: style?.height
                ? style.height
                : styles.buttonText.lineHeight,
            },
          ]}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: getWidth(25),
    color: colors.white,
    lineHeight: getHeight(79),
    textAlign: 'center',
    borderRadius: getWidth(5),
  },
});

export default Button;
