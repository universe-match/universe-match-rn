import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../../../constants/Index';

import CalendarPicker from 'react-native-calendar-picker';
import {Calendar} from 'react-native-calendars';

import previousMonth from '../../../../assets/images/group/previousMonth.png';
import nextMonth from '../../../../assets/images/group/nextMonth.png';

const Day = () => {
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedSEndDate, setSelectedEndDate] = useState('');

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.titleText}>기간</Text>
        <View style={styles.calendars}>
          <Calendar
            style={{
              borderRadius: 17.7379,
              //width: getWidth(650),
              //height: getHeight(401),
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
          {/* <CalendarPicker
            width={getWidth(650)}
            height={getHeight(401)}
            months={[
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12',
            ]}
            previousComponent={<Image source={previousMonth} />}
            nextComponent={<Image source={nextMonth} />}
            selectedDayColor={'#87C289'}
          /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'column',
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
