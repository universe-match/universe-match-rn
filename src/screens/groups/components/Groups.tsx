import React from 'react';
import {FlatList, View} from 'react-native';
import {Group} from './Index';

const Groups = ({groupList, getMatchRommList}: any) => {
  const renderGroup = ({item}: any) => (
    <Group
      id={item.id}
      title={item.title}
      area={item.place}
      fromDate={item.fromDate}
      toDate={item.toDate}
      matchingList={item.matchingList}
      matchRoomLen={item.matchRoomLen}
      peopleLimit={item.peopleLimit}
      getMatchRommList={getMatchRommList}
    />
  );

  return (
    <View style={{marginBottom: 120}}>
      <FlatList
        data={groupList}
        renderItem={renderGroup}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Groups;
