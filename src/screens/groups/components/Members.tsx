import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {height, width, colors} from '../../../constants/Index';
import man from '../../../assets/images/test/man.png';
import woman from '../../../assets/images/test/woman.png';

const Members = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 15,
        }}>
        <View>
          <Image style={styles.manPhoto} source={man} />
          <View>
            <Text style={styles.profileName}>김민수</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text>#ENTJ</Text>
              <Text>/</Text>
              <Text>고려대</Text>
            </View>
          </View>
        </View>

        <View>
          <Image style={styles.womanPhoto} source={woman} />
          <View>
            <Text style={styles.profileName}>김지은</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text>#ENTJ</Text>
              <Text>/</Text>
              <Text>연세대</Text>
            </View>
          </View>
        </View>
        <View>
          <Image style={styles.manPhoto} source={man} />
          <View>
            <Text style={styles.profileName}>김민수</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text>#ENTJ12</Text>
              <Text>/</Text>
              <Text>고려대</Text>
            </View>
          </View>
        </View>
        <View>
          <Image style={styles.womanPhoto} source={woman} />
          <View>
            <Text style={styles.profileName}>김지은</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text>#ENTJ</Text>
              <Text>/</Text>
              <Text>연세대</Text>
            </View>
          </View>
        </View>
        <View>
          <Image style={styles.manPhoto} source={man} />
          <View>
            <Text style={styles.profileName}>김민수</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text>#ENTJ</Text>
              <Text>/</Text>
              <Text>고려대</Text>
            </View>
          </View>
        </View>
        <View>
          <Image style={styles.womanPhoto} source={woman} />
          <View>
            <Text style={styles.profileName}>김지은</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text>#ENTJ</Text>
              <Text>/</Text>
              <Text>연세대</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  manPhoto: {
    borderRadius: 100,
    height: height * 80,
    width: width * 80,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: colors.stroke,
  },
  womanPhoto: {
    borderRadius: 100,
    height: height * 80,
    width: width * 80,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#FFBAD6',
  },
  profileName: {
    marginLeft: 30,
  },
});

export default Members;
