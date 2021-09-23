import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../../../constants/Index';
import Button from '../../../../components/form/Button';
import Input from '../../../../components/form/Input';
import BackIcon from '../../../../assets/images/common/back.png';
import RemoveIcon from '../../../../assets/images/common/remove.png';

const Invitation = ({onClose}: any) => {
  const [id, setId] = useState('');
  const [isActive, setIsActive] = useState(true);

  const onPress = (flag: any) => {
    setIsActive(!flag);
  };

  return (
    <View style={styles.background}>
      <View style={styles.dialog}>
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.4} style={styles.backWrapper}>
            <Image source={BackIcon} style={styles.back} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={onClose}
            style={styles.closeWrapper}>
            <Image source={RemoveIcon} style={styles.close} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.title}>
            <Text
              style={
                isActive
                  ? {...styles.titleText, ...styles.titleText_active}
                  : styles.titleText
              }
              onPress={() => onPress(isActive)}>
              아이디로 친구찾기
            </Text>
            <Text style={styles.titleText}> | </Text>
            <Text style={styles.titleText}>친구목록에서 찾기 </Text>
          </View>
          {isActive && (
            <View style={styles.input}>
              <Input
                placeholder="아이디 입력"
                setValue={(value: string) => setId(value)}
                value={id}
                style={{width: getWidth(470)}}
              />
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
    backgroundColor: '#FFFFFF',
  },
  dialog: {
    backgroundColor: colors.white,
    width: getWidth(720),
    paddingLeft: getWidth(13),
    paddingRight: getWidth(13),
    marginTop: getWidth(100),
  },
  header: {
    alignItems: 'center',
    width: '100%',
  },
  back: {
    width: getWidth(15),
    height: getHeight(23),
  },
  backWrapper: {
    position: 'absolute',
    left: 0,
  },
  closeWrapper: {
    position: 'absolute',
    right: 0,
  },
  contentMargin: {
    paddingLeft: getWidth(53),
    paddingRight: getWidth(53),
  },
  close: {
    width: getWidth(22),
    height: getHeight(22),
  },
  content: {
    marginTop: getHeight(100),
    width: '100%',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontWeight: '400',
    fontSize: getWidth(30),
  },
  titleText_active: {
    color: colors.green,
  },
  input: {
    marginTop: getWidth(65),
    marginBottom: getWidth(23),
    alignItems: 'center',
  },
});

export default Invitation;
