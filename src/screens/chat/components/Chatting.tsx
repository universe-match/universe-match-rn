import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Chats, ChatKeyborad} from './Index';
import {getWidth, colors, getHeight} from '../../../constants/Index';

// 가 데이터
const DATA = [
  {
    id: '1',
    nickname: '김민수',
    gender: 'man',
    message: '안녕하세요1',
  },
  {
    id: '2',
    nickname: '김은지',
    gender: 'woman',
    message: '안녕하세요2',
  },
  {
    id: '3',
    nickname: '나',
    gender: 'man',
    message: '안녕하세요3',
  },
];

const Chatting = ({navigation}: any) => {
  const [messages, setMessages] = useState(DATA);

  // 메시지 전송 버튼 클릭 시 컴포넌트 리렌더링
  const sendMesage = ({id, nickname, gender, message}: any) => {
    setMessages([...messages, {id, nickname, gender, message}]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Chats messages={messages} />
      </ScrollView>
      <ChatKeyborad sendMesage={sendMesage} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: getWidth(100),
  },
  profileInfo: {
    flexDirection: 'row',
  },
  manPhoto: {
    borderRadius: 100,
    height: getWidth(80),
    width: getWidth(80),
    marginLeft: 5,
    borderWidth: 1,
    borderColor: colors.stroke,
  },
  womanPhoto: {
    borderRadius: 100,
    height: getWidth(80),
    width: getWidth(80),
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#FFBAD6',
  },
  messages: {
    marginBottom: getWidth(52),
  },
  message: {
    width: getWidth(614),
    marginLeft: getWidth(49),
    marginBottom: getWidth(58),
  },
  text: {
    height: getHeight(71),
    left: getWidth(120),
    textAlignVertical: 'center',
    color: colors.white,
    fontSize: getWidth(30),
  },
  image: {
    width: getWidth(44),
    height: getHeight(44),
    marginLeft: getWidth(32),
  },
  textArea: {
    flexDirection: 'row',
  },
  input: {
    width: getWidth(484),
    height: getHeight(68),
    marginLeft: getWidth(15),
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

export default Chatting;
