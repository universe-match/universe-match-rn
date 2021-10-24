import React from 'react';
import {Text, View, StyleSheet, Image, Platform} from 'react-native';
import {getWidth, colors} from '../../../constants/Index';

const Members = ({member}: any) => {
  return (
    <>
      <View style={styles.members}>
        <View>
          <Image
            style={styles.manPhoto}
            source={{
              uri:
                member.userImages.length > 0
                  ? member.userImages[0].userImage
                  : '',
            }}
            blurRadius={Platform.OS == 'ios' ? 10 : 25}
          />
          <View style={styles.memberInfo}>
            <Text style={styles.profileName}>{member.nickname}</Text>
            <View style={styles.memberDetail}>
              <Text style={styles.detailColor}>#{member.mbti}</Text>
              <Text style={styles.detailColor}>/</Text>
              <Text style={styles.detailColor}>{member.universeName}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  members: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: getWidth(15),
    marginRight: getWidth(5),
  },
  manPhoto: {
    borderRadius: getWidth(100),
    height: getWidth(120),
    width: getWidth(120),
    marginLeft: getWidth(5),
    borderWidth: 1,
    borderColor: colors.stroke,
  },
  womanPhoto: {
    borderRadius: getWidth(100),
    height: getWidth(120),
    width: getWidth(120),
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#FFBAD6',
  },
  profileName: {
    textAlign: 'center',
    marginTop: getWidth(19),
    marginBottom: getWidth(12),
  },
  memberInfo: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  memberDetail: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  detailColor: {
    color: '#767F88',
  },
});

export default Members;
