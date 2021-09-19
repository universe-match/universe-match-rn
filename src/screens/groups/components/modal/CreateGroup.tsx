import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
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
} from '../Index';
import RemoveIcon from '../../../../assets/images/common/remove.png';

const CreateGroup = ({onClose}: any) => {
  return (
    <View style={styles.background}>
      <View style={styles.dialog}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{height:"100%"}}
        >
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={onClose}
              style={styles.closeWrapper}>
              <Image source={RemoveIcon} style={styles.close} />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={styles.contentMargin}>
              <Personnel />
              <Ratio />
              <SelectGroup />
            </View>
            <Day />
            <View style={styles.contentMargin}>
              <Place />
              <Title />
              <FriendInvitation />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#00000040',
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
  contentMargin:{
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
