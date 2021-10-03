import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getWidth} from '../../../../constants/Index';
import CalendarPicker from 'react-native-calendar-picker';

function formatDate(date: any) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('');
}
const Day = ({setFromDate, setToDate}: any) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const minDate = new Date(); // Today
  const maxDate = new Date(2099, 10, 21);
  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  const endDate = selectedEndDate ? selectedEndDate.toString() : '';

  useEffect(() => {
    setFromDate(formatDate(startDate));
    setToDate(formatDate(endDate));
  }, [startDate, endDate]);
  const onDateChange = (date: any, type: any) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
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
