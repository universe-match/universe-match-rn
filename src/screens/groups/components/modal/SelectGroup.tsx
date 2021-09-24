import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {getHeight, getWidth, colors} from '../../../../constants/Index';

import All from '../../../../assets/images/group/all.png';
import School from '../../../../assets/images/group/school.png';

const SelectGroup = () => {
  const [isPress, setIsPress] = useState(null);

  const handleClick = (values: any) => {
    setIsPress(values);
  };

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.titleText}>그룹 선택</Text>
        <Text style={styles.group_explan}>
          *학교 선택시 회원님과 학교가 동일한 분만이 그룹에 참여 할 수 있습니다
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={
            isPress === 'all'
              ? {...styles.button, ...styles.button_active}
              : styles.button
          }
          onPress={() => handleClick('all')}>
          <Text style={styles.buttonText}>전체</Text>
          <Image source={All} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity
          style={
            isPress === 'school'
              ? {...styles.button, ...styles.button_active}
              : styles.button
          }
          onPress={() => handleClick('school')}>
          <Text style={styles.buttonText}>학교</Text>
          <Image source={School} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: getWidth(13),
  },
  titleText: {
    fontSize: getWidth(30),
  },
  card: {
    marginBottom: getWidth(40),
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
  button_active: {
    backgroundColor: 'rgba(94, 222, 180, 0.31);',
  },
  buttonText: {
    //fontFamily: fonts.bold,
    fontSize: getWidth(30),
  },
  image: {
    marginLeft: getWidth(32),
    width: getWidth(55),
    height: getHeight(55),
  },
  group_explan: {
    fontSize: getWidth(15),
  },
});

export default SelectGroup;
