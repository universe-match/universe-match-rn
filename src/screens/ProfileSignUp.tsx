import React, {useCallback} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {launchImageLibrary} from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../constants/Index';
import Button from '../components/form/Button';
import MultiLineInput from '../components/form/MultiLineInput';
import InputButton from '../components/form/InputButton';
import BackIcon from '../assets/images/common/back.png';
import CameraIcon from '../assets/images/common/camera.png';
import RemoveIcon from '../assets/images/common/remove.png';

const SignUp = () => {
  const onPress = useCallback(value => {
    console.log(value);
  }, []);

  const loadLibrary = useCallback(() => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        if (response?.errorCode) {
          console.log('LaunchImageLibrary Error: ', response.errorMessage);
        } else {
          console.log(response.assets);
          // setImageSource(response.assets[0].uri);
        }
      },
    );
  }, []);

  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: colors.white}}
      enableOnAndroid={true}
      enableAutomaticScroll={Platform.OS === 'ios'}
      scrollEnabled={true}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.back} source={BackIcon} />
          <Image style={styles.remove} source={RemoveIcon} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>회원가입</Text>
        </View>
        <View style={styles.signUp}>
          <InputButton
            placeholder="프로필 사진을 등록해주세요"
            buttonContent={
              <Image
                style={{width: getWidth(33), height: getHeight(25)}}
                source={CameraIcon}
              />
            }
            onPress={loadLibrary}
            isEditable={false}
            inputValue=""
            setInputValue={() => {}}
            style={{marginBottom: getHeight(37)}}
          />
          <InputButton
            placeholder="MBTI를 입력해주세요"
            buttonContent="확인"
            setInputValue={() => {}}
            inputValue=""
            onPress={onPress}
            style={{marginBottom: getHeight(95)}}
          />

          <View>
            <Text style={styles.multiLineTitle}>자기소개</Text>
            <MultiLineInput
              style={{
                fontSize: getWidth(20),
              }}
              textAlignVertical="top"
              placeholder="내용을 입력해주세요"
              numberOfLines={4}
              value=""
              setValue={(value: string) => {
                console.log(value);
              }}
            />
          </View>
          <View style={styles.checkBoxWrapper}>
            <Text style={styles.checkBoxText}>여성</Text>
            <CheckBox
              value={true}
              onValueChange={() => {}}
              style={[
                styles.checkBox,
                {
                  marginRight: getWidth(79),
                },
              ]}
              tintColors={{true: colors.green, false: 'black'}}
            />
            <Text style={styles.checkBoxText}>남성</Text>
            <CheckBox
              value={true}
              onValueChange={() => {}}
              style={styles.checkBox}
              tintColors={{true: '#B0BAC3', false: 'black'}}
            />
          </View>
          <View style={styles.checkBoxWrapper}>
            <Text
              style={[
                styles.checkBoxText,
                {
                  marginRight: getWidth(22),
                },
              ]}>
              이용약관에 동의 합니다.
            </Text>
            <CheckBox
              value={true}
              onValueChange={() => {}}
              style={[
                styles.checkBox,
                {
                  marginRight: getWidth(79),
                },
              ]}
              tintColors={{true: colors.green, false: 'black'}}
            />
          </View>
          <Button style={styles.button} onPress={() => {}} title="확인" />
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
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
  multiLineTitle: {
    fontFamily: fonts.bold,
    fontSize: getWidth(30),
    color: colors.green,
    paddingLeft: getWidth(11),
    paddingBottom: getWidth(11),
    borderBottomColor: colors.gray4,
    borderBottomWidth: getWidth(0.5),
  },
  checkBoxWrapper: {
    alignSelf: 'center',
    width: getWidth(470),
    height: getHeight(35),
    display: 'flex',
    flexDirection: 'row',
    marginBottom: getHeight(16),
  },
  checkBox: {height: getHeight(35), width: getWidth(35)},
  checkBoxText: {
    lineHeight: getHeight(35),
    fontFamily: fonts.bold,
    fontSize: getWidth(20),
    marginRight: getWidth(14),
  },
  button: {
    alignSelf: 'center',
    width: getWidth(470),
    height: getHeight(79),
  },
  signUp: {
    paddingTop: getHeight(351),
    width: '80%',
  },
});

export default SignUp;
