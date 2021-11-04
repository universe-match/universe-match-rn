import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../constants/Index';
import Button from '../../components/form/Button';
import BackIcon from '../../assets/images/common/back.png';
import axios from 'axios';
import InterestsList from './InterestsList';

const Interests = ({
  interested,
  setInterested,
  prevStep,
  handleSignUp,
}: any) => {
  const [interestedList, setInterestedList] = useState([]);
  const getInterestedList = () => {
    axios
      .get('/api/user/interested')
      .then(function (response: any) {
        setInterestedList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getInterestedList();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => prevStep()}>
          <Image style={styles.back} source={BackIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>관심사 선택</Text>
      </View>
      <View style={styles.subheader}>
        <Text style={styles.title}>회원님의 관심사는 어떤게 있나요?</Text>
      </View>
      <ScrollView style={styles.content}>
        <InterestsList interestedList={interestedList} />
      </ScrollView>
      <View style={styles.bottom}>
        <Button
          style={styles.button}
          onPress={() => {
            handleSignUp();
          }}
          title="확인"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: getWidth(720),
    height: getHeight(1280),
    paddingTop: getHeight(240),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  header: {
    flexBasis: getHeight(100),
    display: 'flex',
    flexDirection: 'row',
  },
  back: {
    position: 'relative',
    left: -getWidth(180),
    width: getWidth(16),
    height: getHeight(20),
    marginTop: getHeight(10),
  },
  title: {
    fontSize: getWidth(40),
  },
  subheader: {
    flexBasis: getHeight(120),
  },
  content: {
    flexBasis: getHeight(360),
    width: getWidth(720),
    paddingLeft: getWidth(60),
    paddingRight: getWidth(60),
    marginBottom: getWidth(60),
  },
  bottom: {
    flexBasis: getHeight(90),
  },
  button: {
    alignSelf: 'center',
    width: getWidth(470),
    height: getHeight(79),
  },
});

export default Interests;
