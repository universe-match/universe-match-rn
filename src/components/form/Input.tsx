import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../constants/Index';

interface Input {
  value: string;
  setValue: Function;
  placeholder: string;
  isPassword?: boolean;
  style?: object;
}

const Input = ({
  value,
  setValue,
  placeholder,
  isPassword = false,
  style,
}: Input) => {
  return (
    <TextInput
      style={[styles.input, style]}
      secureTextEntry={isPassword}
      placeholder={placeholder}
      onChangeText={(v: string) => setValue(v)}
      defaultValue={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: getWidth(470),
    height: getHeight(67),
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.gray4,
    textAlign: 'center',
    fontSize: getWidth(20),
    fontFamily: fonts.light,
  },
});

export default Input;
