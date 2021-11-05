import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import logo from '../assets/images/common/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fonts, getHeight, getWidth, colors} from '../constants/Index';
import Button from '../components/form/Button';
import Input from '../components/form/Input';
import Dialog from '../components/layer/Dialog';
import axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';

const Login = ({navigation}: any) => {
  const [isShowDialog, setShowDialog] = useState(false);
  // const [id, setId] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = () => {
    AsyncStorage.clear();
    axios
      .post('/api/user/signin', {
        userId: userId,
        password: password,
        fcmToken: token,
      })
      .then(function (response) {
        axios
          .get('/api/user/myinfo', {
            headers: {
              Authorization: 'Bearer ' + response.data.token, //the token is a variable which holds the token
            },
          })
          .then(res => {
            if (!res.data.verified) {
              Alert.alert('학생증 인증 진행중입니다.');
            } else {
              AsyncStorage.setItem('accessToken', response.data.token);
              navigation.navigate('Main');
            }
          });
      })
      .catch(function (error) {
        if (error.response.data.status === 400) {
          Alert.alert(error.response.data.message);
        }
      });
  };

  // useEffect(() => {
  //   checkToken()

  // },[])

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    setToken(fcmToken);
  };

  useEffect(() => {
    getFcmToken();
  }, []);

  // useEffect(() => {
  //   registerAppWithFCM()
  //   let msgToken =messaging().getToken()
  //   // remote()
  //   // checkToken()

  //   // Listen to whether the token changes

  //   msgToken.then((item:any)=>{
  //     console.log('token==',item)
  //     setToken(item)
  //   })
  // },[])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} resizeMode="contain" />
        <View style={styles.login}>
          <Input
            placeholder="아이디를 입력해주세요"
            setValue={(value: string) => setUserId(value)}
            value={userId}
            style={{marginBottom: getHeight(12)}}
          />
          <Input
            placeholder="비밀번호를 입력해주세요"
            isPassword={true}
            setValue={(value: string) => setPassword(value)}
            value={password}
            style={{marginBottom: getHeight(25)}}
          />
          <Button title="로그인" onPress={() => handleLogin()} />
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[styles.button, styles.firstButton]}
              onPress={() => {
                setShowDialog(true);
              }}>
              <Text style={styles.buttonText}>아이디 찾기</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>비밀번호 찾기</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              style={[styles.button, styles.lastButton]}
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={styles.buttonText}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {isShowDialog && (
        <Dialog
          title="아이디 찾기"
          onClose={() => {
            setShowDialog(false);
          }}
          content={
            <>
              <Input
                placeholder="이메일 입력"
                setValue={() => {}}
                value=""
                style={styles.dialogInput}
              />
              <Button title="확인" onPress={() => {}} />
            </>
          }
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    width: getWidth(470),
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: getHeight(22),
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: getHeight(22),
    height: getHeight(22),
  },
  firstButton: {
    alignItems: 'flex-end',
    marginLeft: getWidth(10),
  },
  lastButton: {
    alignItems: 'flex-start',
    marginLeft: getWidth(10),
  },
  separator: {
    backgroundColor: colors.gray4,
    width: getWidth(1),
    height: getHeight(22),
  },
  buttonText: {
    fontFamily: fonts.light,
    fontSize: getWidth(24),
    lineHeight: getHeight(22),
    color: colors.gray4,
  },
  dialogInput: {
    marginBottom: getHeight(23),
    width: '100%',
  },
  logo: {
    width: getWidth(161),
    height: getHeight(162),
    marginBottom: getHeight(83),
  },
});

export default Login;
