import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
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
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>회원님의 관심사는 어떤게 있나요?</Text>
        <InterestsList interestedList={interestedList} />
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
    backgroundColor: colors.white,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    top: getWidth(79),
    zIndex: 1,
  },
  back: {
    width: getWidth(15),
    height: getHeight(23),
  },
  button: {
    position: 'absolute',
    top: getWidth(1000),
    alignSelf: 'center',
    width: getWidth(470),
    height: getHeight(79),
  },
  content: {
    top: getWidth(150),
  },
  title: {
    fontSize: getWidth(40),
    marginBottom: getWidth(40),
  },
});

export default Interests;
