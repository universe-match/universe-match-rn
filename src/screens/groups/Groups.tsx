import React, {useState} from 'react';
import {View, FlatList, StyleSheet, TouchableHighlight} from 'react-native';
import {width, colors} from '../../constants/Index';
import {Group, ProgressBar, GroupButtons} from './Index';

const Groups = ({groups}: any) => {
  const [flagBgc, setFlagBgc] = useState(false);
  const [dataList] = useState(groups);

  const clickItem = (itemId: any) => {
    dataList.filter((obj: any) => {
      if (obj.id === itemId) {
        setFlagBgc(!flagBgc);
      }
    });
  };

  const renderGroup = ({item}: any) => (
    <>
      <TouchableHighlight
        activeOpacity={0.7}
        onPress={() => clickItem(item.id)}
        underlayColor="#b0bac36b">
        <View style={flagBgc ? styles.item2 : styles.item}>
          <Group
            title={item.title}
            area={item.area}
            old={item.old}
            date={item.date}
          />
          <ProgressBar />
        </View>
      </TouchableHighlight>
      {flagBgc && <GroupButtons />}
    </>
  );

  return (
    <>
      <FlatList
        data={groups}
        renderItem={renderGroup}
        keyExtractor={item => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.white,
    borderColor: colors.green,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    width: width * 300,
  },
  item2: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100,
    borderColor: colors.green,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    width: width * 300,
  },
});

export default Groups;
