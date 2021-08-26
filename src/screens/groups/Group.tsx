import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {width} from '../../constants/Index';
import {Members} from './Index';

const Group = ({title, area, old, date}: any) => {
  return (
    <View style={{left: 10, marginTop: 20}}>
      <View style={styles.topArea}>
        <Text
          style={{
            color: 'rgba(0, 0, 0, 1)',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
        <Text style={{right: 20, marginTop: 10}}>{area}</Text>
      </View>
      <View style={styles.topArea}>
        <Text>평균연령 {old}</Text>
        <Text style={{right: 20}}>{date}</Text>
      </View>
      <ScrollView
        style={{width: width * 290}}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        onMomentumScrollEnd={() => {
          console.log('Scrolling is End');
        }}>
        <Members />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  topArea: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Group;
