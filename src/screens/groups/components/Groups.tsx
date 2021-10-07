import React from 'react';
import {FlatList} from 'react-native';
import {Group} from './Index';

const Groups = ({groupList}: any) => {
  const renderGroup = ({item}: any) => (
    <Group
      id={item.id}
      title={item.title}
      area={item.place}
      fromDate={item.fromDate}
      toDate={item.toDate}
      matchingList={item.matchingList}
    />
  );

  return (
    <FlatList
      data={groupList}
      renderItem={renderGroup}
      keyExtractor={item => item.id}
    />
  );
};

export default Groups;
