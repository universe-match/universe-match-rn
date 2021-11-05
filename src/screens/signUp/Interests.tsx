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
import {getHeight, getWidth, colors} from '../../constants/Index';
import Button from '../../components/form/Button';
import BackIcon from '../../assets/images/common/back.png';
import axios from 'axios';
import InterestsList from './InterestsList';

const Interests = ({setInterested, prevStep, onSignUp}: any) => {
  const [fetchedIterested, setFetchedIterested] = useState([]);

  const getInterestedList = () => {
    axios
      .get('/api/user/interested')
      .then(function (response: any) {
        const data = response.data;
        const newData = data.map((interest: any) => {
          interest.selected = false;
          return interest;
        });
        setFetchedIterested(newData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getInterestedList();
  }, []);

  const handleSelectedOne = (id: any) => {
    const newInterestedList = fetchedIterested.map((item: any) => {
      if (item.id === id) {
        item.selected = !item.selected;
      }
      return item;
    }) as any;
    setFetchedIterested(newInterestedList);
  };

  const handleSignUp = () => {
    const selectedInterested = fetchedIterested.filter(
      (item: any) => item?.selected,
    );

    setInterested(selectedInterested);
    onSignUp(selectedInterested);
  };

  return (
    // <SafeAreaView style={styles.container}>
    // <View style={styles.header}>
    //   <TouchableOpacity onPress={() => prevStep()}>
    //     <Image style={styles.back} source={BackIcon} />
    //   </TouchableOpacity>
    //   <Text style={styles.title}>관심사 선택</Text>
    // </View>
    // <View style={styles.subheader}>
    //   <Text style={styles.title}>회원님의 관심사는 어떤게 있나요?</Text>
    // </View>
    // <ScrollView style={styles.content}>
    //   <InterestsList
    //     interestedList={fetchedIterested}
    //     onTouch={handleSelectedOne}
    //   />
    // </ScrollView>
    // <View style={styles.bottom}>
    //   <Button
    //     style={styles.button}
    //     onPress={() => {
    //       handleSignUp();
    //     }}
    //     title="확인"
    //   />
    // </View>
    // </SafeAreaView>
    <View style={styles.container1}>
      <View style={styles.case1}>
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
          <InterestsList
            interestedList={fetchedIterested}
            onTouch={handleSelectedOne}
          />
        </ScrollView>
      </View>
      <View style={styles.case2}>
        <Button
          style={styles.button}
          onPress={() => {
            handleSignUp();
          }}
          title="확인"
        />
      </View>
    </View>
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
  container1: {
    flex: 1,
    backgroundColor: 'white',
  },
  case1: {
    flex: 6,
  },
  case2: {
    flex: 1,
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
    flexBasis: getHeight(110),
  },
  button: {
    alignSelf: 'center',
    width: getWidth(470),
    height: getHeight(79),
  },
});

export default Interests;
