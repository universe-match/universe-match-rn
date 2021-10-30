import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {fonts, getHeight, getWidth, colors} from '../../constants/Index';
import InputButton from '../../components/form/InputButton';
import Input from '../../components/form/Input';
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
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];
  const [userIdCheck, setUserIdCheck] = useState('');
  const [nicknameCheck, setNicknameCheck] = useState('');
  const [emailCheck, setEmailCheck] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const CheckUserId = (): void => {
    if (!userid) {
      setUserIdCheck('아이디를 입력해 주세요.');
    } else if (!/^[A-za-z0-9]{4,10}$/.test(userid)) {
      setUserIdCheck('4~10자 영문 대 소문자, 숫자를 사용하세요.');
    }

    axios
      .get(`/api/user/${userid}`)
      .then(function (response) {
        console.log('response==', response);
        Alert.alert(response.data);
        setUserIdCheck('사용 가능한 아이디입니다.');
      })
      .catch(function (error) {
        if (error.response.data.status === 400) {
          Alert.alert(error.response.data.message);
          setUserIdCheck('중복된 아이디입니다.');
        }
      });
  };

  const CheckNickname = (): void => {
    if (!nickname) {
      setNicknameCheck('닉네임을 입력해 주세요.');
    } else {
      setUserIdCheck('사용 가능한 닉네임입니다.');
    }
  };

  const CheckEmail = (): void => {
    if (!email) {
      setEmailCheck('이메일을 입력해 주세요.');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailCheck('이메일을 올바르게 입력해 주세요.');
    }
  };

  const CheckPassword = (): void => {
    if (!password) {
      setPasswordCheck('비밀번호를 입력해 주세요.');
    } else if (
      !/^((?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*\W)|(?=.*\d)(?=.*\W)).{6,}$/.test(
        password,
      )
    ) {
      setPasswordCheck(
        '비밀번호는 영문, 숫자, 특수문자중 2가지 포함 6글자 이상이어야 합니다',
      );
    } else {
      setUserIdCheck('사용 가능한 비밀번호입니다.');
    }
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
              {/* 경고 */}
              <Text style={styles.warn}>{userIdCheck}</Text>
            </View>
            <View style={styles.birthDay}>
              <TextInput
                placeholder="년(4자)"
                value={year}
                onChangeText={value => setYear(value)}
                keyboardType="numeric"
                style={styles.birthdayInput}
              />
              <SelectDropdown
                buttonStyle={styles.dropdownButton}
                buttonTextStyle={styles.dropdownButtonText}
                rowStyle={styles.dropdownRow}
                rowTextStyle={styles.dropdownRowText}
                defaultButtonText={'월'}
                data={months}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                  setMonth(selectedItem);
                }}
                buttonTextAfterSelection={selectedItem => {
                  return selectedItem;
                }}
                rowTextForSelection={item => {
                  return item;
                }}
              />
              <TextInput
                placeholder="일"
                value={day}
                onChangeText={value => setDay(value)}
                keyboardType="numeric"
                style={styles.birthdayInput}
              />
            </View>
            <View style={{marginBottom: getHeight(37)}}>
              <InputButton
                placeholder="닉네임을 입력해주세요"
                buttonContent="확인"
                setInputValue={setNickname}
                inputValue={nickname}
                onPress={CheckNickname}
              />
              {/* 경고 */}
              <Text style={styles.warn}>{nicknameCheck}</Text>
            </View>
            <View style={{marginBottom: getHeight(37)}}>
              <InputButton
                placeholder="이메일을 입력해주세요"
                buttonContent="확인"
                setInputValue={setEmail}
                inputValue={email}
                onPress={CheckEmail}
              />
              {/* 경고 */}
              <Text style={styles.warn}>{emailCheck}</Text>
            </View>
            <View style={{marginBottom: getHeight(37)}}>
              <InputButton
                placeholder="비밀번호를 입력해주세요"
                buttonContent="확인"
                setInputValue={setPassword}
                inputValue={password}
                onPress={CheckPassword}
                isPassword={true}
              />
              {/* 경고 */}
              <Text style={styles.warn}>{passwordCheck}</Text>
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
  birthDay: {
    flexDirection: 'row',
    marginBottom: getHeight(37),
  },
  birthdayInput: {
    width: getWidth(180),
    borderWidth: getWidth(1),
    borderRadius: 25,
    borderColor: colors.green,
    backgroundColor: colors.lightGreen,
    textAlign: 'left',
    paddingLeft: getWidth(30),
    fontSize: getWidth(20),
    fontFamily: fonts.light,
  },
  dropdownButton: {
    width: getWidth(170),
    height: getHeight(70),
    marginRight: getWidth(20),
    marginLeft: getWidth(20),
    backgroundColor: colors.lightGreen,
    borderRadius: 25,
    borderWidth: getWidth(1),
    borderColor: colors.green,
  },
  dropdownButtonText: {
    color: colors.black,
    textAlign: 'left',
    paddingLeft: 10,
    fontSize: getWidth(20),
    fontFamily: fonts.light,
  },
  dropdownRow: {
    backgroundColor: colors.lightGreen,
    borderBottomColor: colors.green,
  },
  dropdownRowText: {
    textAlign: 'left',
  },
});

export default SignUp;
