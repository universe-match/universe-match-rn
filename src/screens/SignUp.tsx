import React, {useCallback, useState} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../constants/Index';
import InputButton from '../components/form/InputButton';
import BackIcon from '../assets/images/common/back.png';
import RemoveIcon from '../assets/images/common/remove.png';

const SignUp = () => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = useCallback((value: string): void => {
    console.log(value);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.back} source={BackIcon} />
          <Image source={RemoveIcon} style={styles.remove} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>회원가입</Text>
        </View>
        <View style={styles.signUp}>
          <View style={{marginBottom: getHeight(37)}}>
            <InputButton
              placeholder="이름을 입력해주세요"
              buttonContent="확인"
              setInputValue={setName}
              inputValue={name}
              onPress={onPress}
            />
          </View>
          <View style={{marginBottom: getHeight(37)}}>
            <InputButton
              placeholder="생년월일을 입력해주세요"
              buttonContent="확인"
              setInputValue={setBirth}
              inputValue={birth}
              onPress={onPress}
            />
          </View>
          <View style={{marginBottom: getHeight(37)}}>
            <InputButton
              placeholder="닉네임을 입력해주세요"
              buttonContent="중복확인"
              setInputValue={setNickname}
              inputValue={nickname}
              onPress={onPress}
            />
            {/* 경고 */}
            <Text style={styles.warn}>사용중인 닉네임 입니다</Text>
          </View>
          <View style={{marginBottom: getHeight(37)}}>
            <InputButton
              placeholder="이메일을 입력해주세요"
              buttonContent="확인"
              setInputValue={setEmail}
              inputValue={email}
              onPress={onPress}
            />
          </View>
          <View>
            <InputButton
              placeholder="비밀번호를 입력해주세요"
              buttonContent="확인"
              setInputValue={setPassword}
              inputValue={password}
              onPress={onPress}
              isPassword={true}
            />
          </View>
        </View>
      </View>
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
  },
  header: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    top: getHeight(79),
  },
  back: {width: getWidth(15), height: getHeight(23)},
  remove: {
    width: getWidth(22),
    height: getHeight(22),
    position: 'absolute',
    right: 0,
  },
  title: {
    position: 'absolute',
    width: '80%',
    top: getHeight(143),
    left: getWidth(137),
  },
  titleText: {
    fontFamily: fonts.bold,
    fontWeight: '400',
    fontSize: getWidth(30),
  },
  warn: {
    color: colors.green,
    left: getWidth(50),
    top: getHeight(85),
    position: 'absolute',
    fontSize: getWidth(16),
    lineHeight: getHeight(20),
    height: getHeight(20),
  },
  signUp: {
    paddingTop: getHeight(351),
    width: '80%',
  },
});

export default SignUp;
