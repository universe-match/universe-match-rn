import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {height, width, colors} from '../../constants/Index';

interface Input {
  value: string;
  setValue: Function;
  placeholder: string;
  isPassword: boolean;
  style: object;
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
      style={{
        width: '100%',
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#858585',
        textAlign: 'center',
        ...style,
      }}
      secureTextEntry={isPassword}
      placeholder={placeholder}
      onChangeText={value => setValue(value)}
      defaultValue={value}
    />
  );
};

export default Input;
