import React, {useState, useEffect, useRef, ElementType} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {Chats, ChatKeyborad} from './Index';
import {getWidth, colors, getHeight} from '../../../constants/Index';
import setting from '../../../assets/images/chat/setting.png';
import axios from 'axios';
import {ProfileView, KickOutPopup} from './Index';
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';

const Chatting = ({route, navigation}: any) => {
  const scrollViewRef = useRef<ElementType>();
  const {itemId} = route.params;
  const [user, setUser] = useState<any>([]);
  const [userId, setUserId] = useState<string>('');
  // const [input, setInput] = useState({text: '', height: 40});
  const [messages, setMessages] = useState<any>('');
  const [isShowDialog, setShowDialog] = useState(false);
  const [isShowKickOutDialog, setShowKickOutDialog] = useState(false);
  const [otherUserId, setOtherUserId] = useState<string>('');
  const ws = new WebSocket(`ws://192.168.0.65:9090/ws/chat/${itemId}`);
  var connected = false;
  var stompClient: any = '';
  // 메시지 전송 버튼 클릭 시 컴포넌트 리렌더링
  // const sendMesage = ({id, nickname, gender, message}: any) => {
  //   setMessages([...messages, {id, nickname, gender, message}]);
  // };
  const handleClick = () => {
    setShowKickOutDialog(true);
  };

  const getPrevData = () => {
    axios
      .get(`/api/chatroom/${itemId}`)
      .then(function (response) {
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
          profileUrl: user.userImages[0].userImage,
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
        setUserId(response.data.id);
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
    stompConnect();
  }, [userId]);
  var socket = new SockJS('http://192.168.0.65:9090/stomp');

  function stompConnect() {
    stompClient = Stomp.over(socket);
    // SockJS와 stomp client를 통해 연결을 시도.
    stompClient.connect({}, function (frame) {
      stompClient.subscribe(`/topic/ban/${userId}`, function (msg: any) {
        console.log('msg', msg);
        if (msg.body === 'ban') {
          Alert.alert('강퇴당하였습니다.');
          navigation.navigate('Main');
        }
      });

      stompClient.subscribe(
        `/topic/chatroom/enter/${itemId}`,
        function (msg: any) {
          const arr = JSON.parse(msg.body);
          setMessages((prevItems: any) => [...prevItems, arr]);
        },
      );
      stompClient.subscribe(
        `/topic/chatroom/exit/${itemId}`,
        function (msg: any) {
          const arr = JSON.parse(msg.body);
          setMessages((prevItems: any) => [...prevItems, arr]);
        },
      );
    });
  }

  const content = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => handleClick()}>
        <Image source={setting} style={styles.setting} />
      </TouchableOpacity>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <ScrollView
          style={{flex: 1}}
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
        <ChatKeyborad sendMesage={sendMesage} />
      </KeyboardAvoidingView>
      {isShowKickOutDialog && (
        <KickOutPopup
          onClose={() => {
            setShowKickOutDialog(false);
          }}
          chatRoomId={route.params.itemId}
        />
      )}
      {isShowDialog && (
        <ProfileView
          onClose={() => {
            setShowDialog(false);
          }}
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
  setting: {
    width: getWidth(42),
    height: getWidth(42),
    left: getWidth(630),
  },
  keyboardAvoidContainer: {
    flex: 1,
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
    // position: 'relative',
    bottom: 60,
    left: 0,
    right: 0,
  },
});

export default Chatting;
