import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {getHeight, getWidth, colors} from '../../../../constants/Index';
import {
  Personnel,
  Ratio,
  SelectGroup,
  Day,
  Place,
  Title,
  FriendInvitation,
  InvitationPopup,
  CreateGroupPopup,
} from '../Index';
import Button from '../../../../components/form/Button';
import RemoveIcon from '../../../../assets/images/common/remove.png';

const CreateGroup = ({navigation}: any) => {
  const [isShowFriendDialog, setShowFriendDialog] = useState(false);
  const [isShowGroupDialog, setShowGroupDialog] = useState(false);

  const handlePress = (flag: any) => {
    setShowFriendDialog(flag);
  };
  const handleCreateGroup = (flag: any) => {
    setShowGroupDialog(flag);
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
                <Personnel />
                <Ratio />
                <SelectGroup />
                <Day />
              </View>
              <View style={styles.contentMargin}>
                <Place />
                <Title />
                <FriendInvitation onPress={handlePress} />
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
