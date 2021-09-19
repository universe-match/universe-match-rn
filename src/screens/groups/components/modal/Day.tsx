import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../../../constants/Index';

import {Calendar} from 'react-native-calendars';

const Day = () => {
  const [dates, setDates] = useState('');

  const onDayPress = (value: any) => {
    setDates(
      value.year +
        '-' +
        value.dateString.split('-')[1] +
        '-' +
        value.dateString.split('-')[2],
    );
    console.log(dates);
  };

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.titleText}>기간</Text>
      </View>
      <Calendar
        style={{
          borderRadius: 17.7379,
        }}
        theme={{
          calendarBackground: 'rgba(94, 222, 180, 0.31)',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayTextColor: '#ffffff',
          dayTextColor: colors.white,
          textDisabledColor: '#d9e1e8',
          monthTextColor: colors.black,
        }}
        onDayPress={day => onDayPress(day)}
        markingType={'period'}
        markedDates={{
          '2021-09-22': {
            startingDay: true,
            color: '#87C289',
            textColor: colors.white,
          },
          '2021-09-23': {
            selected: true,
            endingDay: true,
            color: '#87C289',
            textColor: colors.white,
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'column',
    marginBottom: getWidth(26.93),
  },
  titleText: {
    fontSize: getWidth(30),
  },
  card: {
    marginBottom: getWidth(40),
  },
});

export default Day;
