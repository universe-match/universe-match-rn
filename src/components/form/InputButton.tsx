import React, {ReactNode} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../constants/Index';

interface InputButton {
  inputValue: string;
  setInputValue: Function;
  buttonContent: ReactNode | string;
  placeholder: string;
  onPress(value: string): void;
  isPassword?: boolean;
  isEditable?: boolean;
  style?: object;
  inputStyle?: object;
  buttonStyle?: object;
}

const InputButton = ({
  inputValue,
  setInputValue,
  buttonContent,
  placeholder,
  onPress,
  isPassword = false,
  isEditable = true,
  style,
}: InputButton) => {
  return (
    <View style={[styles.wrapper, style]}>
      <TextInput
        style={styles.input}
        secureTextEntry={isPassword}
        placeholder={placeholder}
        onChangeText={value => setInputValue(value)}
        defaultValue={inputValue}
        placeholderTextColor={colors.gray4}
        editable={isEditable}
        autoFocus={true}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => {
          onPress('');
        }}>
        {typeof buttonContent === 'string' ? (
          <Text style={styles.textContent}>{buttonContent}</Text>
        ) : (
          <View style={styles.content}>{buttonContent}</View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {display: 'flex', flexDirection: 'row', height: getHeight(76)},
  input: {
    flex: 7,
    width: getWidth(413),
    borderWidth: getWidth(1),
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderColor: colors.green,
    backgroundColor: colors.lightGreen,
    textAlign: 'left',
    paddingLeft: 30,
    fontSize: getWidth(20),
    fontFamily: fonts.light,
  },
  button: {
    flex: 3,
    width: getWidth(166),
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: colors.green,
  },
  textContent: {
    fontSize: getWidth(20),
    fontFamily: fonts.light,
    color: colors.white,
    lineHeight: 45,
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default InputButton;
