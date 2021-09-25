import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text, View} from 'react-native';
import {getHeight, getWidth, colors} from '../../../../constants/Index';
import RemoveIcon from '../../../../assets/images/common/remove.png';
import Button from '../../../../components/form/Button';
import man from '../../../../assets/images/test/man.png';

const CreateGroupPopup = ({onClose}: any) => {
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
            <Text style={styles.titleText}>
              “서울에서 만나요”가 만들어졌습니다
            </Text>
          </Text>
          <View style={styles.dialogContent}>
            <View style={styles.groupInfo}>
              <Image style={styles.manPhoto} source={man} />
              <View style={styles.groupIntoText}>
                <Text style={styles.leaderName}>김민수</Text>
                <Text>정원:6명</Text>
                <Text>비율:이성</Text>
                <Text>비율:이성</Text>
                <Text>10월14~17일</Text>
                <Text>장소:서울시</Text>
              </View>
            </View>
          </View>
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
    height: getHeight(620),
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
    textAlign: 'center',
    fontWeight: '400',
    fontSize: getWidth(30),
    color: colors.black2,
  },
  content: {
    top: getHeight(150),
    width: '100%',
  },
  dialogContent: {
    marginBottom: getWidth(23),
  },
  groupInfo: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  manPhoto: {
    borderRadius: 100,
    height: getWidth(120),
    width: getWidth(120),
    marginLeft: 5,
    borderWidth: 1,
    borderColor: colors.stroke,
  },
  groupIntoText: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: getWidth(20),
  },
  leaderName: {
    fontWeight: '400',
    fontSize: getWidth(28),
    marginTop: getWidth(20),
    marginBottom: getWidth(20),
  },
});

export default CreateGroupPopup;
