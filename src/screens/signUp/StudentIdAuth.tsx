import React, {useCallback} from 'react';

import {RNCamera} from 'react-native-camera';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../constants/Index';
import Button from '../../components/form/Button';
import BackIcon from '../../assets/images/common/back.png';

const UniversityImage = ({nextStep, prevStep, universeCertiImg}: any) => {
  const cameraRef = React.useRef<RNCamera | null>(null);

  const takePhoto = useCallback(async () => {
    console.log('cameraRef', cameraRef);
    if (cameraRef && cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      console.log('😻 data', data);
    }
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={prevStep}>
            <Image
              style={{width: getWidth(15), height: getHeight(23)}}
              source={BackIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.titleText}>본인확인이 진행중입니다.</Text>
          </View>
          <View style={styles.cameraWrapper}>
            {/* <RNCamera
              ref={cameraRef}
              style={styles.camera}
              type={RNCamera.Constants.Type.back}
              captureAudio={false}
            /> */}
            <Image
              style={styles.imageArea}
              source={{
                uri: universeCertiImg,
              }}
            />
          </View>
          <View style={{marginBottom: getHeight(34)}}>
            <Text style={styles.description}>
              *본인 확인은 1~2일 내로 진행됩니다.
            </Text>
          </View>

          <Button
            onPress={() => nextStep()}
            style={{width: getWidth(470), height: getHeight(79)}}
            title="확인"
          />
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
    zIndex: 1,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: getHeight(305),
  },
  title: {
    marginBottom: getHeight(34),
  },
  description: {
    textAlign: 'center',
    fontFamily: fonts.light,
    fontWeight: '400',
    fontSize: getWidth(24),
  },
  titleText: {
    textAlign: 'center',
    fontFamily: fonts.bold,
    fontSize: getWidth(30),
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  cameraWrapper: {
    marginBottom: getHeight(34),
    overflow: 'hidden',
    width: getWidth(613),
    height: getHeight(364),
  },
  imageArea: {
    width: getWidth(613),
    height: getHeight(364),
  },
});

export default UniversityImage;
