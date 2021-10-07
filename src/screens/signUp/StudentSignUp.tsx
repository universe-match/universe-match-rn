import React, {useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {launchImageLibrary} from 'react-native-image-picker';
import {fonts, getHeight, getWidth, colors} from '../../constants/Index';
import InputButton from '../../components/form/InputButton';
import BackIcon from '../../assets/images/common/back.png';
import CameraIcon from '../../assets/images/common/camera.png';
import RemoveIcon from '../../assets/images/common/remove.png';

const SignUp = ({
  universeCertiImg,
  setUniverseCertiImg,
  universeName,
  setUniverseName,
  major,
  setMajor,
  nextStep,
  prevStep,
}: any) => {
  const loadLibrary = useCallback(() => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        if (response?.errorCode) {
          console.log('LaunchImageLibrary Error: ', response.errorMessage);
        } else {
          // console.log(response.assets);
          // setImageSource(imageSource.concat(response.assets[0]));
          const fd = new FormData();
          fd.append('image', {
            name: response.assets[0].fileName, // require, file name
            uri: response.assets[0].uri, // require, file absoluete path
            type: response.assets[0].type, // options, if none, will get mimetype from `filepath` extension
          });
          axios
            .post('/user/certi/image', fd)
            .then(function (response) {
              setUniverseCertiImg(response.data.imgUrl);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
    );
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => prevStep()}>
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
          <InputButton
            placeholder="학생증 사진을 등록해주세요"
            inputValue=""
            onPress={loadLibrary}
            buttonContent={
              <Image
                style={{width: getWidth(33), height: getHeight(25)}}
                source={CameraIcon}
              />
            }
            isEditable={false}
            setInputValue={() => {}}
            style={{marginBottom: getHeight(37)}}
          />
          <InputButton
            placeholder="대학교 이름을 입력해주세요"
            buttonContent=""
            inputValue={universeName}
            setInputValue={setUniverseName}
            onPress={() => {}}
            style={{marginBottom: getHeight(37)}}
          />
          <InputButton
            placeholder="학과 이름을 입력해주세요"
            inputValue={major}
            buttonContent="중복확인"
            setInputValue={setMajor}
            onPress={() => {}}
            style={{marginBottom: getHeight(37)}}
          />
          {universeCertiImg === '' ? (
            <Button
              onPress={() => {}}
              title="다음"
              color={colors.gray}
              accessibilityLabel="Learn more about this purple button"
            />
          ) : (
            <Button
              onPress={nextStep}
              title="다음"
              color={colors.green}
              accessibilityLabel="Learn more about this purple button"
            />
          )}
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
  signUp: {
    paddingTop: getHeight(351),
    width: '80%',
  },
});

export default SignUp;
