import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Groups} from '../components/Index';
import {colors} from '../../../constants/Index';
import axios from 'axios';

const GroupContainers = ({route}: any) => {
  const [groupList, setGroupList] = useState([]);
  const search = route.params === undefined ? '' : route.params.search;
  const getMatchRommList = (searchParam: string) => {
    console.log('searchParam=', searchParam);
    if (searchParam === '') {
      axios
        .get('/api/matchroom')
        .then(function (response: any) {
          setGroupList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .get(`/api/matchroom/${searchParam}`)
        .then(function (response: any) {
          setGroupList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    getMatchRommList(search);
  }, [search]);

  return (
    <View style={{backgroundColor: colors.white}}>
      <Groups groupList={groupList} getMatchRommList={getMatchRommList} />
    </View>
  );
};
export default GroupContainers;
