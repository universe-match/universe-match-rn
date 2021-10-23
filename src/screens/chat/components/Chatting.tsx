import React, {useState, useEffect, useRef, ElementType} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Chats, ChatKeyborad} from './Index';
import {getWidth, colors, getHeight} from '../../../constants/Index';
import axios from 'axios';
import man from '../../../assets/images/test/man.png';
import {ProfileView} from './Index';

const Chatting = ({route, navigation}: any) => {
  const scrollViewRef = useRef<ElementType>();
  const {itemId} = route.params;
  const [user, setUser] = useState<any>([]);
  // const [input, setInput] = useState({text: '', height: 40});
  const [messages, setMessages] = useState('');
  const [isShowDialog, setShowDialog] = useState(false);
  const [otherUserId, setOtherUserId] = useState<string>('');
  const ws = new WebSocket(`ws://192.168.0.54:9090/ws/chat/${itemId}`);

  // 메시지 전송 버튼 클릭 시 컴포넌트 리렌더링
  // const sendMesage = ({id, nickname, gender, message}: any) => {
  //   setMessages([...messages, {id, nickname, gender, message}]);
  // };

  const getPrevData = () => {
    axios
      .get(`/api/chatroom/${itemId}`)
      .then(function (response) {
        console.log('res==>', response);
        setMessages(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    // 메세지 수신
    ws.onmessage = evt => {
      // console.log('edata',e.data)
      const data = JSON.parse(evt.data);
      console.log('data==', data);
      if (data.id !== undefined || data.id !== null) {
        setMessages((prevItems: any) => [...prevItems, data]);
      }
      //
    };
  }, []);

  const sendMesage = (msg: string) => {
    if (msg !== undefined || msg !== '') {
      ws.send(
        JSON.stringify({
          userKey: user.id,
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
    getPrevData();
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
        <Chats
          messages={messages}
          user={user}
          setShowDialog={setShowDialog}
          setOtherUserId={setOtherUserId}
        />
      </ScrollView>
      <View style={styles.bottomContainer}>
        <ChatKeyborad sendMesage={sendMesage} />
      </View>
      {isShowDialog && (
        <ProfileView
          onClose={() => {
            setShowDialog(false);
          }}
          userPhoto={man}
          otherUserId={otherUserId}
        />
      )}
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

export default Chatting;
