import React, {useState} from 'react';

import {SafeAreaView, View, StyleSheet} from 'react-native';
import {height, width, colors} from '../constants/Index';
import Button from '../components/form/Button';
import Input from '../components/form/Input';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.login}>
          <Input
            placeholder="아이디를 입력해주세요"
            setValue={id => setId(id)}
            value={id}
            style={{marginBottom: 10}}
          />
          <Input
            placeholder="비밀번호를 입력해주세요"
            isPassword={true}
            setValue={password => setPassword(password)}
            value={password}
            style={{marginBottom: 20}}
          />
          <Button title="로그인" />
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
  login: {
    width: '70%',
  },
});

export default Login;
