import React from 'react';
import {TextInput} from 'react-native';

interface Input {
  value: string;
  setValue: Function;
  placeholder: string;
  isMultiLine?: boolean;
  numberOfLines?: number;
  textAlignVertical?: 'auto' | 'center' | 'top' | 'bottom' | undefined;
  style?: object;
}

const Input = ({
  value,
  setValue,
  placeholder,
  numberOfLines = 4,
  textAlignVertical = 'top',
  style,
}: Input) => {
  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      multiline
      numberOfLines={numberOfLines}
      textAlignVertical={textAlignVertical}
      onChangeText={(v: string) => setValue(v)}
      defaultValue={value}
    />
  );
};

export default Input;
