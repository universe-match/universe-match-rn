import React, {useCallback, useState} from 'react';

import {SafeAreaView, View, StyleSheet, Image} from 'react-native';
import {height, width, colors} from '../constants/Index';
import InputButton from '../components/form/InputButton';
import BackIcon from '../assets/images/common/back.png';
import RemoveIcon from '../assets/images/common/remove.png';

const SignUp = () => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = useCallback(value => {
    console.log(value);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={BackIcon} />
          <Image
            source={RemoveIcon}
            style={{
              position: 'absolute',
              right: 0,
            }}
          />
        </View>
        <View style={styles.login}>
          <InputButton
            placeholder="이름을 입력해주세요"
            buttonText="확인"
            setInputValue={setName}
            onPress={onPress}
            style={{marginBottom: 20}}
          />
          <InputButton
            placeholder="생년월일을 입력해주세요"
            buttonText="확인"
            setInputValue={setBirth}
            onPress={onPress}
            style={{marginBottom: 20}}
          />
          <InputButton
            placeholder="닉네임을 입력해주세요"
            buttonText="중복확인"
            setInputValue={setNickname}
            onPress={onPress}
            style={{marginBottom: 20}}
          />
          <InputButton
            placeholder="이메일을 입력해주세요"
            buttonText="확인"
            setInputValue={setEmail}
            onPress={onPress}
            style={{marginBottom: 20}}
          />
          <InputButton
            placeholder="비밀번호를 입력해주세요"
            buttonText="확인"
            setInputValue={setPassword}
            onPress={onPress}
            isPassword={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    top: height * 30,
  },
  login: {
    width: '80%',
  },
});

export default SignUp;
