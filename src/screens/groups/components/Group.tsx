import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {getWidth, colors, getHeight} from '../../../constants/Index';
import axios from 'axios';
import {Members, ProgressBar, GroupButtons} from './Index';

const Group = ({
  id,
  title,
  area,
  fromDate,
  toDate,
  matchingList,
  matchRoomLen,
  peopleLimit,
  getMatchRommList,
}: any) => {
  const [isActive, setIsActive] = useState(false);

  const checkIn = () => {
    const sendRequest = {
      mid: id,
    };
    axios
      .post('/api/match', sendRequest)
      .then(function (response) {
        Alert.alert('방에 참여되었습니다');
        getMatchRommList('');
        // navigation.navigate('Main');
        // navigation.dispatch(CommonActions.navigate('Main'));
      })
      .catch(error => {
        if (error.response.data.status === 400) {
          console.log(error.response.data.message);
          Alert.alert(error.response.data.message);
        }
      });
  };
  const handleClick = (flag: any) => {
    setIsActive(!flag);
  };

  return (
    <>
      <TouchableHighlight
        activeOpacity={0.7}
        onPress={() => handleClick(isActive)}
        underlayColor="#B0BAC3">
        <View
          style={isActive ? {...styles.root, ...styles.active} : styles.root}>
          <View style={styles.groupInfos}>
            <View style={styles.topArea}>
              <Text style={styles.textTitle}>{title}</Text>
              <Text style={styles.textArea}>{area}</Text>
            </View>
            <View style={styles.topArea}>
              <Text style={{color: colors.gray4}}>평균연령: </Text>
              <Text style={styles.textDate}>
                {fromDate}~{toDate}
              </Text>
            </View>
            <ScrollView
              style={{width: getWidth(580)}}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              onMomentumScrollEnd={() => {
                console.log('Scrolling is End');
              }}>
              {matchingList.map((member: any) => (
                <Members member={member} />
              ))}
            </ScrollView>
          </View>
          <ProgressBar matchRoomLen={matchRoomLen} peopleLimit={peopleLimit} />
        </View>
      </TouchableHighlight>
      {isActive && <GroupButtons checkIn={checkIn} />}
    </>
  );
};

const styles = StyleSheet.create({
  groupInfos: {
    left: 10,
    marginTop: 20,
  },
  root: {
    backgroundColor: colors.white,
    borderColor: colors.green,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    width: getWidth(600),
  },
  active: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100,
  },
  textTitle: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
  },
  textArea: {
    right: 20,
    marginTop: 10,
  },
  topArea: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  textDate: {
    right: 20,
  },
});

export default Group;
