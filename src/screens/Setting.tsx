import React, {useCallback, useState} from 'react';

import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../constants/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputButton from '../components/form/InputButton';
import BackIcon from '../assets/images/common/back.png';
import RightIcon from '../assets/images/common/right.png';

const Setting = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = useCallback((value: string): void => {
    console.log(value);
  }, []);

  const handleLogOut = async () => {
    await AsyncStorage.clear();
    await navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.back} source={BackIcon} />
          <Text style={styles.titleText}>환경설정</Text>
        </View>
        <View style={styles.itemWrapper}>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>이용약관</Text>
            <Image style={styles.itemIcon} source={RightIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.itemText}>회원수정</Text>
            <Image style={styles.itemIcon} source={RightIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Complaint')}>
            <Text style={styles.itemText}>불편신고</Text>
            <Image style={styles.itemIcon} source={RightIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => handleLogOut()}>
            <Text style={styles.itemText}>로그아웃</Text>
            <Image style={styles.itemIcon} source={RightIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>앱 업데이트 정보</Text>
            <Image style={styles.itemIcon} source={RightIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Alarm')}>
            <Text style={styles.itemText}>애플리케이션 알림</Text>
            <Image style={styles.itemIcon} source={RightIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('LeaveOut')}>
            <Text style={styles.itemText}>회원탈퇴</Text>
            <Image style={styles.itemIcon} source={RightIcon} />
          </TouchableOpacity>
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
  itemWrapper: {
    marginTop: getHeight(167),
    marginLeft: getWidth(30),
    marginRight: getWidth(30),
    borderTopWidth: getWidth(1),
    borderTopColor: colors.green,
  },
  item: {
    width: getWidth(659),
    height: getHeight(85),
    borderBottomWidth: getWidth(1),
    borderBottomColor: colors.green,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontFamily: fonts.bold,
    fontSize: getWidth(25),
    marginLeft: getWidth(20),
  },
  itemIcon: {
    position: 'absolute',
    right: getWidth(20),
    width: getWidth(15),
    height: getHeight(32),
  },
});

export default Setting;
