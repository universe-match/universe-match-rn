import React, {useState, useEffect, useRef, ElementType} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Chats, ChatKeyborad} from './Index';
import {getWidth, colors, getHeight} from '../../../constants/Index';
import axios from 'axios';

// 가 데이터
const DATA = [
  {
    id: '1',
    username: '김민수',
    gender: 'man',
    message: '안녕하세요1',
  },
  {
    id: '2',
    username: '김은지',
    gender: 'woman',
    message: '안녕하세요2',
  },
  {
    id: '3',
    username: '나',
    gender: 'man',
    message: '안녕하세요3',
  },
];

const Chatting = ({route, navigation}: any) => {
  const scrollViewRef = useRef<ElementType>();
  const {itemId} = route.params;
  const [user, setUser] = useState<any>([]);
  // const [input, setInput] = useState({text: '', height: 40});
  const [messages, setMessages] = useState(DATA);
  const ws = new WebSocket(`ws://3.34.191.212:9090/ws/chat/${itemId}`);

  // 메시지 전송 버튼 클릭 시 컴포넌트 리렌더링
  // const sendMesage = ({id, nickname, gender, message}: any) => {
  //   setMessages([...messages, {id, nickname, gender, message}]);
  // };

  useEffect(() => {
    // 메세지 수신
    ws.onmessage = evt => {
      // console.log('edata',e.data)
      const data = JSON.parse(evt.data);
      setMessages((prevItems: any) => [...prevItems, data]);
    };
  }, []);

  const sendMesage = (msg: string) => {
    if (msg !== undefined || msg !== '') {
      ws.send(
        JSON.stringify({
          username: user.nickname,
          message: msg,
          sessionId: '',
          // sessionId 어떻게 보낼것인지
          chatroomId: itemId,
          type: 'message',
        }),
      );
    }
    // setInput({text: '', height: 40});
  };
  const getMyInfo = async () => {
    try {
      await axios.get('/api/user/myinfo').then((response: any) => {
        setUser(response.data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    // 에러 발생시
    ws.onerror = e => {
      console.log(e.message);
    };
    // 소켓 연결 해제
    ws.onclose = e => {
      console.log(e.code, e.reason);
    };
  }, []);
  useEffect(() => {
    getMyInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        onContentSizeChange={() => {
          scrollViewRef.current.scrollToEnd({animated: true});
        }}>
        <Chats messages={messages} user={user} />
      </ScrollView>
      <View style={styles.bottomContainer}>
        <ChatKeyborad sendMesage={sendMesage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: getWidth(100),
    height: '100%',
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
  bottomContainer: {
    backgroundColor: colors.white,
    position: 'relative',
    bottom: 60,
    left: 0,
    right: 0,
  },
});

export default Chatting