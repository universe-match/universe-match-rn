import React from 'react';
import {FlatList} from 'react-native';
import {Group} from './Index';

const Groups = ({groups}: any) => {
  const renderGroup = ({item}: any) => (
    <Group
      title={item.title}
      area={item.area}
      old={item.old}
      date={item.date}
    />
  );

  return (
    <FlatList
      data={groups}
      renderItem={renderGroup}
      keyExtractor={item => item.id}
    />
  );
};

export default Groups;
