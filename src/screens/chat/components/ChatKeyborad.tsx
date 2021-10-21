import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {getWidth, colors, getHeight} from '../../../constants/Index';
import plus from '../../../assets/images/chat/chatPlus.png';

const ChatKeyborad = ({sendMesage}: any) => {
  const [text, setText] = useState('');
  // 메시지 전송 시 text 초기화
  const clearMesaage = () => {
    setText('');
  };
  const handlePress = () => {
    if (text !== '') {
      sendMesage(text);
      clearMesaage();
    }
  };

  return (
    <View style={styles.textArea}>
      {/* <Image source={plus} style={styles.image} /> */}
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={value => setText(value)}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>전송</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: getWidth(44),
    height: getHeight(44),
    marginLeft: getWidth(32),
  },
  textArea: {
    flexDirection: 'row',
  },
  input: {
    width: getWidth(610),
    height: getHeight(68),
    marginLeft: getWidth(8),
    borderColor: colors.green,
    borderWidth: 1,
  },
  button: {
    backgroundColor: colors.green,
    width: getWidth(102),
    height: getHeight(68),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: getWidth(30),
  },
});

export default ChatKeyborad;
