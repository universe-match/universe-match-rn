import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {colors, fonts, getHeight, getWidth} from '../../constants/Index';
import BackIcon from '../../assets/images/common/back.png';
import Button from '../../components/form/Button';

const LeaveOut = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Main1');
            }}
            hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
            style={styles.touchableOpacityStyle}>
            <Image style={styles.back} source={BackIcon} />
          </TouchableOpacity>
          <Text style={styles.titleText}>회원탈퇴</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>
            {`
            그동안 OOOO를 이용해주셔서 감사합니다. 
            개인정보는 모두 삭제 될 예정이며 삭제된 계정은 
            복구 할 수 없습니다.
            `}
          </Text>
          <View style={styles.checkBoxWrapper}>
            <CheckBox
              onValueChange={() => {}}
              style={[
                styles.checkBox,
                {
                  marginRight: getWidth(17),
                },
              ]}
              tintColors={{true: colors.green, false: 'black'}}
            />
            <Text style={styles.checkBoxText}>계정 삭제에 동의합니다.</Text>
          </View>
          <Button title="확인" style={styles.button} onPress={() => {}} />
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
    justifyContent: 'center',
    borderBottomWidth: getWidth(1),
    borderBottomColor: colors.green,
  },
  touchableOpacityStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    right: getWidth(220),
  },
  back: {
    position: 'absolute',
    left: 0,
    width: getWidth(15),
    height: getHeight(23),
  },
  titleText: {
    fontFamily: fonts.bold,
    fontSize: getWidth(30),
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    top: getWidth(428),
  },
  itemText: {
    textAlign: 'center',
    fontFamily: fonts.bold,
    marginRight: getWidth(60),
  },
  checkBoxWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: getWidth(470),
    height: getHeight(35),
    display: 'flex',
    flexDirection: 'row',
    marginTop: getWidth(118),
    marginBottom: getHeight(38),
  },
  checkBox: {
    height: getHeight(35),
    width: getWidth(35),
  },
  checkBoxText: {
    lineHeight: getHeight(35),
    fontFamily: fonts.bold,
    fontSize: getWidth(25),
  },
  button: {
    width: getWidth(470),
  },
});

export default LeaveOut;
