import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Image, Text, View} from 'react-native';
import {getHeight, getWidth, colors} from '../../../../constants/Index';
import RemoveIcon from '../../../../assets/images/common/remove.png';
import Button from '../../../../components/form/Button';
import Input from '../../../../components/form/Input';
import man from '../../../../assets/images/test/man.png';

const InvitationPopup = ({onClose}: any) => {
  const [id, setId] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const handleClick = (values: any) => {
    setIsPress(!values);
  };

  const onPress = (flag: any) => {
    setIsActive(flag);
  };

  return (
    <View style={styles.background}>
      <View style={styles.dialog}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={onClose}
            style={styles.closeWrapper}>
            <Image source={RemoveIcon} style={styles.close} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>
            <Text
              style={
                isActive
                  ? {...styles.titleText, ...styles.titleText_active}
                  : styles.titleText
              }
              onPress={() => onPress(true)}>
              아이디로 친구찾기
            </Text>
            <Text style={styles.titleText}> | </Text>
            <Text
              style={
                isActive
                  ? styles.titleText
                  : {...styles.titleText, ...styles.titleText_active}
              }
              onPress={() => onPress(false)}>
              친구목록에서 찾기
            </Text>
          </Text>
          {isActive ? (
            <View style={styles.dialogContent}>
              <Input
                placeholder="아이디 입력"
                setValue={(value: string) => setId(value)}
                value={id}
                style={{width: getWidth(470)}}
              />
            </View>
          ) : (
            <View style={styles.dialogContent}>
              <TouchableOpacity
                style={
                  isPress
                    ? {...styles.friendButton, ...styles.friendButton_active}
                    : styles.friendButton
                }
                onPress={() => handleClick(isPress)}>
                <View style={styles.friendInfo}>
                  <Image style={styles.manPhoto} source={man} />
                  <View style={styles.friendText}>
                    <Text>이름: 김민수</Text>
                    <Text>나이:24살</Text>
                    <Text>MBTI:ENTJ</Text>
                    <Text>학교:고려대학교</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}

          <Button title="확인" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(176, 186, 195, 0.43)',
  },
  dialog: {
    backgroundColor: colors.white,
    width: getWidth(620),
    height: getHeight(519),
    borderRadius: getWidth(10),
    paddingLeft: getWidth(63),
    paddingRight: getWidth(63),
  },
  header: {
    alignItems: 'center',
    width: '100%',
    top: getHeight(96),
  },
  closeWrapper: {
    position: 'absolute',
    right: 0,
  },
  close: {
    width: getWidth(22),
    height: getHeight(22),
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: getWidth(23),
  },
  titleText: {
    fontWeight: '400',
    fontSize: getWidth(30),
    color: colors.black2,
  },
  titleText_active: {
    color: colors.green,
  },
  content: {
    top: getHeight(150),
    width: '100%',
  },
  dialogContent: {
    marginBottom: getWidth(23),
    alignItems: 'center',
  },
  friendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    borderColor: colors.green,
    borderWidth: 0.8,
    width: getWidth(497),
    height: getHeight(170),
  },
  friendButton_active: {
    backgroundColor: 'rgba(94, 222, 180, 0.31);',
  },
  friendInfo: {
    flexDirection: 'row',
  },
  manPhoto: {
    borderRadius: 100,
    height: getWidth(120),
    width: getWidth(120),
    marginLeft: 5,
    borderWidth: 1,
    borderColor: colors.stroke,
  },
  friendText: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: getWidth(20),
  },
});

export default InvitationPopup;
