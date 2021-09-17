import React, {useState} from 'react';
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../../../constants/Index';
import Personnel from './Personnel';
import RemoveIcon from '../../../../assets/images/common/remove.png';
import All from '../../../../assets/images/group/all.png';
import School from '../../../../assets/images/group/school.png';
import Ratio_img1 from '../../../../assets/images/group/ratio_img1.png';
import Ratio_img2 from '../../../../assets/images/group/ratio_img2.png';
import previousMonth from '../../../../assets/images/group/previousMonth.png';
import nextMonth from '../../../../assets/images/group/nextMonth.png';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CalendarPicker from 'react-native-calendar-picker';
import {Calendar} from 'react-native-calendars';

const CreateGroup = ({onClose}: any) => {
  const [multiSliderValue, setMultiSliderValue] = useState([0, 4]);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedSEndDate, setSelectedEndDate] = useState('');

  const multiSliderValuesChange = (values: any) => setMultiSliderValue(values);
  return (
    <View style={styles.background}>
      <View style={styles.dialog}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={onClose}
            style={styles.closeWrapper}>
            <Image source={RemoveIcon} style={styles.close} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* 정원 */}
          <Personnel />
          {/* 비율 */}
          <View style={styles.card}>
            <View style={styles.title}>
              <Text style={styles.titleText}>비율</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>동성</Text>
                <Image source={Ratio_img1} style={styles.image} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>이성</Text>
                <Image source={Ratio_img2} style={styles.image} />
              </TouchableOpacity>
            </View>
          </View>
          {/* 그룹 선택 */}
          <View style={styles.card}>
            <View style={styles.title}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.titleText}>그룹 선택</Text>
                <Text style={styles.group_explan}>
                  *학교 선택시 회원님과 학교가 동일한 분만이 그룹에 참여 할 수
                  있습니다
                </Text>
              </View>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>전체</Text>
                <Image source={All} style={styles.image} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>학교</Text>
                <Image source={School} style={styles.image} />
              </TouchableOpacity>
            </View>
          </View>
          {/* 기간 */}
          <View style={styles.card}>
            <View style={styles.title}>
              <Text style={styles.titleText}>기간</Text>
              <View style={styles.calendars}>
                {/* <Calendar
                  style={{
                    borderRadius: 17.7379,
                    width: getWidth(650),
                    height: getHeight(401),
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
                /> */}
                <CalendarPicker
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
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#00000040',
  },
  dialog: {
    backgroundColor: colors.white,
    width: getWidth(720),
    height: getHeight(1240),
    paddingLeft: getWidth(63),
    paddingRight: getWidth(63),
  },
  header: {
    alignItems: 'center',
    width: '100%',
    top: getHeight(96),
  },
  closeWrapper: {
    position: 'absolute',
    right: 0,
  },
  close: {
    width: getWidth(22),
    height: getHeight(22),
  },
  title: {
    flexDirection: 'column',
  },
  titleText: {
    //fontFamily: fonts.bold,
    fontSize: getWidth(30),
  },
  content: {
    top: getHeight(200),
    width: '100%',
  },
  card: {
    marginBottom: getWidth(40),
  },
  sliderWrapper: {
    flexDirection: 'column',
    marginLeft: getWidth(50),
  },
  labelWrapper: {
    marginTop: getHeight(-30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  labelText1: {
    fontSize: 15,
    color: '#5EDEB4',
    marginLeft: -45,
  },
  labelText2: {
    fontSize: 15,
    color: '#5EDEB4',
    marginRight: -20,
  },
  buttons: {
    flexDirection: 'row',
    paddingTop: getWidth(14),
    marginLeft: getWidth(40),
  },
  button: {
    flexDirection: 'row',
    marginRight: getWidth(22),
    width: getWidth(250),
    height: getHeight(96),
    borderRadius: 8,
    borderColor: colors.green,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    //fontFamily: fonts.bold,
    fontSize: getWidth(30),
  },
  image: {
    marginLeft: getWidth(32),
  },
  group_explan: {
    fontSize: getWidth(15),
  },
  calendars: {
    backgroundColor: 'rgba(94, 222, 180, 0.31)',
    borderRadius: 17.7379,
  },
});

export default CreateGroup;
