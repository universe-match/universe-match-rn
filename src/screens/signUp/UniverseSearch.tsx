import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text, View} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../constants/Index';
import RemoveIcon from '../../assets/images/common/remove.png';
import Button from '../../components/form/Button';
import Input from '../../components/form/Input';

const UniverseSearch = ({onClose, universeName, setUniverseName}: any) => {
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
        <View style={styles.title}>
          <Text style={styles.titleText}>학교명 검색</Text>
        </View>
        <View style={styles.content}>
          <Input
            placeholder="학교명 입력"
            setValue={(value: string) => setUniverseName(value)}
            value={universeName}
            style={styles.input}
          />
          <Button title="검색" style={styles.button} onPress={() => {}} />
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
  },
  button: {
    width: getWidth(140),
    height: getHeight(70),
  },
});

export default UniverseSearch;
