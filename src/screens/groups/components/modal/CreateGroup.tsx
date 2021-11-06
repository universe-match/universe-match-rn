import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import axios from 'axios';
import {CommonActions} from '@react-navigation/native';
import {getHeight, getWidth, colors} from '../../../../constants/Index';
import {
  Personnel,
  Ratio,
  SelectGroup,
  Day,
  Place,
  InPutContainer,
  FriendInvitation,
  InvitationPopup,
  CreateGroupPopup,
} from '../Index';
import Button from '../../../../components/form/Button';
import RemoveIcon from '../../../../assets/images/common/remove.png';

const CreateGroup = ({navigation}: any) => {
  const [isShowFriendDialog, setShowFriendDialog] = useState<boolean>(false);
  const [isShowGroupDialog, setShowGroupDialog] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(''); //제목
  const [content, setContent] = useState<string>(''); //내용
  const [place, setPlace] = useState<string>('');
  const [peopleLimit, setPeopleLimit] = useState<number>(5);
  const [genderKind, setGenderKind] = useState<string>('');
  const [fromDate, setFromDate] = useState<string>('');
  const [toDate, setToDate] = useState<string>('');
  const [friends, setFriends] = useState<Array<number>>([]);
  const [groupKind, setGroupKind] = useState<string>('');

  const handlePress = (flag: any) => {
    setShowFriendDialog(flag);
  };
  const handleCreateGroup = (flag: any) => {
    setShowGroupDialog(flag);
  };
  const makeRoom = () => {
    if (genderKind === '') {
      return Alert.alert('비율을 선택해주세요.');
    }
    if (groupKind === '') {
      return Alert.alert('그룹을 선택해주세요.');
    }
    if (fromDate === 'NaNNaNNaN') {
      return Alert.alert('시작일자와 종료일자를 선택해주세요.');
    }
    if (place === '') {
      return Alert.alert('장소를 입력해주세요.');
    }
    if (title === '') {
      return Alert.alert('제목을 입력해주세요.');
    }
    if (content === '') {
      return Alert.alert('내용을 입력해주세요.');
    }
    const sendRequest = {
      title: title,
      content: content,
      place: place,
      peopleLimit: peopleLimit,
      genderKind: genderKind,
      groupKind: groupKind,
      fromDate: fromDate,
      toDate: toDate,
      friends: friends,
    };
    axios
      .post('/api/matchroom', sendRequest)
      .then(function (response) {
        // navigation.navigate('Main');
        navigation.dispatch(CommonActions.navigate('Main'));
      })
      .catch(error => {
        if (error.response.data.status === 400) {
          Alert.alert(error.response.data.message);
        }
      });
  };
  return (
    <SafeAreaView>
      <View style={styles.background}>
        <View style={styles.dialog}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{height: '100%'}}>
            <View style={styles.header}>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => {
                  navigation.goBack();
                }}
                style={styles.closeWrapper}>
                <Image source={RemoveIcon} style={styles.close} />
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              <View style={styles.contentMargin}>
                <Personnel
                  peopleLimit={peopleLimit}
                  setPeopleLimit={setPeopleLimit}
                />
                <Ratio setGenderKind={setGenderKind} />
                <SelectGroup setGroupKind={setGroupKind} />
                <Day setFromDate={setFromDate} setToDate={setToDate} />
              </View>
              <View style={styles.contentMargin}>
                <Place place={place} setPlace={setPlace} />
                <InPutContainer
                  InputTitle={'제목'}
                  title={title}
                  setTitle={setTitle}
                />
                <InPutContainer
                  InputTitle={'내용'}
                  title={content}
                  setTitle={setContent}
                />
                {/* <FriendInvitation onPress={handlePress} /> */}
                <Button title="방 만들기" onPress={handleCreateGroup} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      {isShowFriendDialog && (
        <InvitationPopup
          onClose={() => {
            setShowFriendDialog(false);
          }}
        />
      )}
      {isShowGroupDialog && (
        <CreateGroupPopup
          onClose={() => {
            setShowGroupDialog(false);
          }}
          title={title}
          peopleLimit={peopleLimit}
          genderKind={genderKind}
          fromDate={fromDate}
          toDate={toDate}
          place={place}
          makeRoom={makeRoom}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
  },
  dialog: {
    backgroundColor: colors.white,
    width: getWidth(720),
    paddingLeft: getWidth(13),
    paddingRight: getWidth(13),
  },
  header: {
    alignItems: 'center',
    width: '100%',
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
});

export default CreateGroup;
