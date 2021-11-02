import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Image, Text, View} from 'react-native';

import {fonts, getHeight, getWidth, colors} from '../../constants/Index';
import UniversityList from './UniversityList';
import RemoveIcon from '../../assets/images/common/remove.png';
import Button from '../../components/form/Button';
import Input from '../../components/form/Input';
import axios from 'axios';

const UniverseSearch = ({onClose, setUniverseName}: any) => {
  const [name, setName] = useState('');
  const [universeList, setUniverseList] = useState([]);

  const getUniversityList = () => {
    const params = {name: name};
    axios
      .get('/api/user/university/', {params})
      .then(function (response: any) {
        setUniverseList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClick = () => {
    setUniverseName(name);
    onClose();
  };

  return (
    <View style={styles.background}>
      <View
        style={
          universeList.length >= 2
            ? {...styles.dialog, ...styles.active}
            : styles.dialog
        }>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={handleClick}
            style={styles.closeWrapper}>
            <Image source={RemoveIcon} style={styles.close} />
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>학교명 검색</Text>
        </View>
        <View style={styles.content}>
          <Input
            placeholder="학교명 입력"
            value={name}
            style={styles.input}
            setValue={(value: any) => setName(value)}
          />
          <Button
            title="검색"
            style={styles.button}
            onPress={() => getUniversityList()}
          />
        </View>
        <UniversityList
          universeList={universeList}
          onClose={onClose}
          setName={setName}
        />
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
    backgroundColor: 'rgba(176, 186, 195, 0.43)',
  },
  dialog: {
    backgroundColor: colors.white,
    width: getWidth(620),
    height: getHeight(400),
    borderRadius: getWidth(10),
    paddingLeft: getWidth(63),
    paddingRight: getWidth(63),
  },
  active: {
    height: getHeight(700),
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
    alignItems: 'center',
    justifyContent: 'center',
    top: getWidth(150),
    marginBottom: getWidth(23),
  },
  titleText: {
    fontFamily: fonts.bold,
    fontSize: getWidth(30),
  },
  content: {
    flexDirection: 'row',
    top: getHeight(150),
    width: '100%',
  },
  input: {
    width: getWidth(350),
    marginRight: getWidth(20),
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.gray4,
  },
  button: {
    width: getWidth(140),
    height: getHeight(70),
  },
});

export default UniverseSearch;
