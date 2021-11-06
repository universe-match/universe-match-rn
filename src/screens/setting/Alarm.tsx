import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Switch,
  StyleSheet,
  Image,
} from 'react-native';
import {colors, fonts, getHeight, getWidth} from '../../constants/Index';
import BackIcon from '../../assets/images/common/back.png';
import axios from 'axios';

const Alarm = ({navigation}: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (val: any) => {
    console.log('val', val);
    setIsEnabled(previousState => !previousState);
    const sendData = {
      noti: val,
    };
    axios
      .patch('/api/user/update/noti', sendData)
      .then(res => console.log(res));
  };
  useEffect(() => {
    axios.get('/api/user/myinfo').then(res => {
      console.log(res.data.notiYn);
      setIsEnabled(res.data.notiYn);
    });
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Main');
            }}
            hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
            style={styles.backButton}>
            <Image style={styles.back} source={BackIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>알람 설정</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.item}>
            <Text style={styles.itemText}>알림허용</Text>
            <Text style={styles.textDetail}>
              알림 메시지, 소리, 진동을 포함한 앱의 알림을 받습니다.
            </Text>
          </View>
          <Switch
            trackColor={{false: colors.gray4, true: colors.green}}
            thumbColor={isEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.gray4}
            onValueChange={(val): any => toggleSwitch(val)}
            value={isEnabled}
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
    justifyContent: 'center',
    borderBottomWidth: getWidth(1),
    borderBottomColor: colors.green,
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    right: getWidth(200),
  },
  back: {
    position: 'absolute',
    left: 0,
    width: getWidth(15),
    height: getHeight(23),
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: getWidth(30),
  },
  content: {
    flexDirection: 'row',
    marginTop: getHeight(267),
    marginLeft: getWidth(30),
    marginRight: getWidth(30),
  },
  item: {
    flexDirection: 'column',
  },
  itemText: {
    fontSize: getWidth(30),
    fontFamily: fonts.bold,
    color: colors.black,
  },
  textDetail: {
    fontSize: getWidth(20),
    color: colors.gray4,
  },
});

export default Alarm;
