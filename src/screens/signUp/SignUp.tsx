import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../constants/Index';
import InputButton from '../../components/form/InputButton';
import BackIcon from '../../assets/images/common/back.png';
import RemoveIcon from '../../assets/images/common/remove.png';
import axios from 'axios';

const SignUp = ({
  goToSignIn,
  nextStep,
  userid,
  setUserid,
  age,
  setAge,
  nickname,
  setNickname,
  email,
  setEmail,
  password,
  setPassword,
}: any) => {
  const CheckUserId = (): void => {
    axios
      .get(`/api/user/${userid}`)
      .then(function (response) {
        console.log('response==', response);
        Alert.alert(response.data);
      })
      .catch(function (error) {
        if (error.response.data.status === 400) {
          Alert.alert(error.response.data.message);
        }
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goToSignIn}>
              <Image style={styles.back} source={BackIcon} />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={goToSignIn}>
            <Image source={RemoveIcon} style={styles.remove} />
          </TouchableOpacity> */}
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>회원가입</Text>
          </View>
          <View style={styles.signUp}>
            <View style={{marginBottom: getHeight(37)}}>
              <InputButton
                placeholder="아이디를 입력해주세요"
                buttonContent="중복확인"
                setInputValue={setUserid}
                inputValue={userid}
                onPress={CheckUserId}
              />
            </View>
            <View style={{marginBottom: getHeight(37)}}>
              <InputButton
                placeholder="생년월일을 입력해주세요"
                buttonContent=""
                setInputValue={setAge}
                inputValue={age}
                onPress={() => {}}
              />
            </View>
            <View style={{marginBottom: getHeight(37)}}>
              <InputButton
                placeholder="닉네임을 입력해주세요"
                buttonContent="중복확인"
                setInputValue={setNickname}
                inputValue={nickname}
                onPress={() => {}}
              />
              {/* 경고 */}
              <Text style={styles.warn}>사용중인 닉네임 입니다</Text>
            </View>
            <View style={{marginBottom: getHeight(37)}}>
              <InputButton
                placeholder="이메일을 입력해주세요"
                buttonContent=""
                setInputValue={setEmail}
                inputValue={email}
                onPress={() => {}}
              />
            </View>
            <View style={{marginBottom: getHeight(37)}}>
              <InputButton
                placeholder="비밀번호를 입력해주세요"
                buttonContent=""
                setInputValue={setPassword}
                inputValue={password}
                onPress={() => {}}
                isPassword={true}
              />
            </View>
            <View>
              <Button
                onPress={nextStep}
                title="다음"
                color={colors.green}
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </View>
      </ScrollView>
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
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
});

export default SignUp;
