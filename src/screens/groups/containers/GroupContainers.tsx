import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Groups} from '../components/Index';
import {colors} from '../../../constants/Index';
import axios from 'axios';

const GroupContainers = () => {
  const [groupList, setGroupList] = useState([]);

  const getMatchRommList = () => {
    axios
      .get('/api/matchroom')
      .then(function (response: any) {
        console.log('response=', response);
        setGroupList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getMatchRommList();
  }, []);

  return (
    <View style={{backgroundColor: colors.white}}>
      <Groups groupList={groupList} />
    </View>
  );
};
export default GroupContainers;
