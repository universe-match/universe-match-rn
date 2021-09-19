import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../../../constants/Index';

import {Calendar} from 'react-native-calendars';

const Day = () => {
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedSEndDate, setSelectedEndDate] = useState('');

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.titleText}>기간</Text>
      </View>
      <View style={styles.calendars}>
        <Calendar
          style={{
            borderRadius: 17.7379,
          }}
          theme={{
            calendarBackground: 'rgba(94, 222, 180, 0.31)',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#87C289',
            selectedDayTextColor: '#ffffff',
            dayTextColor: colors.white,
            textDisabledColor: '#d9e1e8',
            dotColor: 'blue',
            selectedDotColor: '#ffffff',
            arrowColor: '#87C289',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: colors.black,
            indicatorColor: 'blue',
          }}
          onDayPress={day => {
            console.log('selected day', day);
          }}
        />
      </View>
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
  calendars: {
    backgroundColor: 'rgba(94, 222, 180, 0.31)',
    borderRadius: 17.7379,
  },
});

export default Day;
