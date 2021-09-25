import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getWidth} from '../../../../constants/Index';
import CalendarPicker from 'react-native-calendar-picker';

const Day = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const minDate = new Date(); // Today
  const maxDate = new Date(2021, 9, 21);
  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  const endDate = selectedEndDate ? selectedEndDate.toString() : '';
  const onDateChange = (date: any, type: any) => {
    if (type === 'END_DATE') {
      setSelectedStartDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.titleText}>기간</Text>
      </View>
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          previousTitle="이전"
          nextTitle="다음"
          months={[
            '01월',
            '02월',
            '03월',
            '04월',
            '05월',
            '06월',
            '07월',
            '08월',
            '09월',
            '10월',
            '11월',
            '12월',
          ]}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#87C289"
          selectedDayTextColor="#FFFFFF"
          onDateChange={onDateChange}
          width={getWidth(600)}
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
    marginBottom: getWidth(70),
  },
  container: {
    flex: 1,
    backgroundColor: '#5EDEB44F',
    marginTop: getWidth(20),
    marginBottom: getWidth(20),
    borderRadius: 17,
  },
});

export default Day;
