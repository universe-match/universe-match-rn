import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import axios from 'axios';
import CheckBox from '@react-native-community/checkbox';
import {getHeight, getWidth, colors, fonts} from '../../../../constants/Index';
import RemoveIcon from '../../../../assets/images/common/remove.png';
import Button from '../../../../components/form/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

const KickOutPopup = ({onClose, chatRoomId}: any) => {
  const [users, setUsers] = useState<any>([]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(users.length).fill(false),
  );
  useEffect(() => {
    axios.get(`/api/chatroom/info/${chatRoomId}`).then((response: any) => {
      console.log('response.data==', response.data);
      setUsers(response.data);
      setCheckedState(new Array(response.data.length).fill(false));
    });
  }, []);

  const handleChangeValue = (newValue: any, position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );
    setCheckedState(updatedCheckedState);

    updatedCheckedState.map((item, index) => {
      users[index].checked = item;
    });
  };
  const onSend = async () => {
    const resUser = users.filter((item: any) => item.checked === true);
    const userIds: any = [];
    await resUser.map((item: any) => {
      userIds.push(item.id);
    });
    const sendData = {
      ids: userIds,
      chatroomId: chatRoomId,
    };
    console.log(sendData);

    await axios
      .patch(`/api/chatroom/ban`, sendData)
      .then(res => res)
      .catch(error => {
        if (error.response.data.status === 400) {
          Alert.alert(error.response.data.message);
        }
      });
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
          <Text style={styles.titleText}>강퇴 & 신고하기</Text>
          <Text style={styles.titleTextDetail}>
            강퇴는 한달에 3번만 진행할수 있습니다 신중히 선택해주세요
          </Text>
          {users.map((item: any, index: number) => (
            <View style={styles.checkBoxWrapper}>
              <CheckBox
                disabled={false}
                value={checkedState[index]}
                onValueChange={(newValue: any) =>
                  handleChangeValue(newValue, index)
                }
                style={[
                  styles.checkBox,
                  {
                    marginRight: getWidth(17),
                  },
                ]}
                tintColors={{true: colors.green, false: 'black'}}
              />
              <Text style={styles.checkBoxText}>{item.nickname}</Text>
            </View>
          ))}

          {/* <View style={styles.checkBoxWrapper}>
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
            <Text style={styles.checkBoxText}>김민수</Text>
          </View>
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
            <Text style={styles.checkBoxText}>김민수</Text>
          </View> */}
          <View style={styles.inputArea}>
            <TextInput
              style={styles.textArea}
              placeholder="사유를 입력해주세요"
            />
            <Text style={styles.titleTextDetail}>
              *채팅방 정원의 2/3가 동의할 시에 강퇴됩니다
            </Text>
          </View>
          <Button title="확인" onPress={() => onSend()} />
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
  },
  dialog: {
    backgroundColor: colors.white,
    width: getWidth(730),
    height: getHeight(1260),
    borderRadius: getWidth(10),
    paddingLeft: getWidth(63),
    paddingRight: getWidth(63),
    marginTop: getWidth(-30),
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
  titleText: {
    textAlign: 'center',
    fontSize: getWidth(30),
    fontFamily: fonts.bold,
  },
  titleTextDetail: {
    textAlign: 'center',
    color: colors.gray4,
    fontSize: getWidth(17),
  },
  content: {
    top: getHeight(150),
    width: '100%',
  },
  checkBoxWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: getWidth(470),
    height: getHeight(35),
    display: 'flex',
    flexDirection: 'row',
    marginTop: getWidth(18),
  },
  checkBox: {
    height: getHeight(35),
    width: getWidth(35),
  },
  checkBoxText: {
    lineHeight: getHeight(35),
    fontSize: getWidth(25),
  },
  textArea: {
    width: getWidth(556),
    height: getHeight(262),
    borderWidth: 1,
    borderColor: '#767F88',
    borderRadius: 5,
    marginBottom: getHeight(20),
  },
  inputArea: {
    marginBottom: getWidth(30),
    alignItems: 'center',
  },
});

export default KickOutPopup;
