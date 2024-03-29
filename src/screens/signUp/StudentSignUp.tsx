import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
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
import UniverseSearch from './UniverseSearch';

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
  const [isShowDialog, setShowDialog] = useState(false);
  const handlePress = (flag: any) => {
    setShowDialog(flag);
  };

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
          <TouchableOpacity onPress={prevStep}>
            <Image style={styles.back} source={BackIcon} />
          </TouchableOpacity>
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
          {/* <InputButton
            placeholder="대학교 이름을 입력해주세요"
            buttonContent="학교 검색"
            inputValue={universeName}
            setInputValue={setUniverseName}
            onPress={handlePress}
            style={{marginBottom: getHeight(37)}}
          /> */}
          {universeName !== '' ? (
            <TextInput
              style={styles.selectedName}
              onChangeText={text => setUniverseName(text)}>
              {universeName}
            </TextInput>
          ) : (
            <TouchableOpacity
              style={styles.universeNameButton}
              onPress={handlePress}>
              <Text style={styles.universeNameText}>학교 검색</Text>
            </TouchableOpacity>
          )}

          <InputButton
            placeholder="학과 이름을 입력해주세요"
            inputValue={major}
            buttonContent="확인"
            setInputValue={setMajor}
            onPress={() => {}}
            style={{marginBottom: getHeight(37)}}
          />
          {universeCertiImg === '' ? (
            <Button
              onPress={() => {}}
              title="학생증을 등록해주세요."
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
      {/* {isShowDialog ? (
        <UniverseSearch
          onClose={() => {
            setShowDialog(false);
          }}
          setUniverseName={setUniverseName}
        />
      ) : null} */}
      {isShowDialog && (
        <UniverseSearch
          onClose={() => {
            setShowDialog(false);
          }}
          setUniverseName={setUniverseName}
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
  },
  header: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    top: getHeight(79),
    zIndex: 1,
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
    fontSize: getWidth(30),
  },
  signUp: {
    paddingTop: getHeight(351),
    width: '80%',
  },
  universeNameButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 10.9153,
    width: getWidth(200),
    height: getHeight(60),
    marginBottom: getWidth(37),
  },
  universeNameText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: getWidth(30),
  },
  selectedName: {
    width: getWidth(570),
    height: getHeight(80),
    marginBottom: getWidth(37),
    borderWidth: getWidth(1),
    borderRadius: 25,
    borderColor: colors.green,
    backgroundColor: colors.lightGreen,
    textAlign: 'left',
    paddingLeft: getWidth(30),
    fontSize: getWidth(25),
    fontFamily: fonts.light,
  },
});

export default SignUp;
