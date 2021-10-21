import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  Alert,
  Text,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import RemoveIcon from '../../../../assets/images/common/remove.png';
import InputButton from '../../../../components/form/InputButton';
import CameraIcon from '../../../../assets/images/common/camera.png';
import {fonts, getHeight, getWidth, colors} from '../../../../constants/Index';
import axios from 'axios';
// 모달 박스1

interface Props {
  modalVisible: boolean;
  setModalVisible: any;
  user: any;
  setUser: any;
  profileImages: any;
  setProfileImages: any;
}
const CancelModel = ({
  modalVisible,
  setModalVisible,
  user,
  setUser,
  profileImages,
  setProfileImages,
}: Props) => {
  //   const [modalVisible, setModalVisible] = useState(true);
  // const [profileImageList, setProfileImageList] = useState(user);
  const [internetCheck, setInternetCheck] = useState(0);

  console.log('profileImages==', profileImages);
  const removePicture = (image: string) => {
    setProfileImages(profileImages.filter((item: any) => item !== image));
    //setUser(user.userImages.filter((item: any) => console.log(item)));
  };
  const handlePress = () => {
    setModalVisible(false);
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
          // if (imageSource.length > 3) {
          //   return Alert.alert('5개 미만만 올릴수있습니다');
          // }

          const fd = new FormData();
          fd.append('image', {
            name: response.assets[0].fileName, // require, file name
            uri: response.assets[0].uri, // require, file absoluete path
            type: response.assets[0].type, // options, if none, will get mimetype from `filepath` extension
          });
          axios
            .post('/user/image', fd)
            .then(function (response: any) {
              let userImageObj: any = {
                userImage: response.data.imgUrl,
              };

              setProfileImages(profileImages.concat(response.data.imgUrl));
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
    );
  }, [user]);
  useEffect(() => {}, [user.userImages, user]);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true} // 배경 투명 하게
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.50)',
          }}>
          <View
            style={{
              width: 300,
              height: 300,
              backgroundColor: 'white',
              borderRadius: 20,
            }}>
            <View style={{width: '100%'}}>
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
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: 10,
                display: 'flex',
                flexDirection: 'row',
              }}>
              {profileImages.map((image: any, index: number) => (
                <View style={{marginTop: 10}} key={index}>
                  <ImageBackground
                    source={{
                      uri: image,
                    }}
                    style={{height: 100, width: 100}}>
                    <TouchableOpacity onPress={() => removePicture(image)}>
                      <Image
                        source={RemoveIcon}
                        style={{
                          height: 40,
                          width: 40,
                          marginTop: 5,
                          marginLeft: 65,
                        }}
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              ))}
              {/* {user.userImages &&
                user.userImages.map((image: any, index: number) => (
                  <View style={{marginTop: 10}} key={index}>
                    <ImageBackground
                      source={{
                        uri: Object.keys(image).length > 0 && image.userImage,
                      }}
                      style={{height: 100, width: 100}}>
                      <TouchableOpacity
                        onPress={() => removePicture(image.userImage)}>
                        <Image
                          source={RemoveIcon}
                          style={{
                            height: 40,
                            width: 40,
                            marginTop: 5,
                            marginLeft: 65,
                          }}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>
                ))} */}
            </View>
            <View>
              <Button
                onPress={handlePress}
                title="수정하기"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text>Show Modal</Text>
      </TouchableHighlight> */}
    </View>
  );
};

export default React.memo(CancelModel);
