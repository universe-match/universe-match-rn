import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import {height, width, colors} from '../../constants/Index';

interface InputButton {
  inputValue: string;
  setInputValue: Function;
  buttonText: string;
  placeholder: string;
  onPress: Function;
  isPassword: boolean;
  style: object;
}

const InputButton = ({
  inputValue,
  setInputValue,
  buttonText,
  placeholder,
  onPress,
  isPassword = false,
  style,
}: InputButton) => {
  return (
    <View style={{...styles.wrapper, ...style}}>
      <TextInput
        style={styles.input}
        secureTextEntry={isPassword}
        placeholder={placeholder}
        onChangeText={value => setInputValue(value)}
        defaultValue={inputValue}
        placeholderTextColor="#858585"
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}>
        <Text
          style={{
            fontSize: 13,
            color: colors.white,
            lineHeight: 45,
            textAlign: 'center',
          }}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {display: 'flex', flexDirection: 'row', height: 45},
  input: {
    flex: 7,
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderColor: '#5EDEB4',
    backgroundColor: 'rgba(94, 222, 180, 0.17)',
    textAlign: 'left',
    paddingLeft: 30,
  },
  button: {
    flex: 3,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#5EDEB4',
  },
});

export default InputButton;
