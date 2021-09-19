import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getWidth} from '../../../../constants/Index';
import Input from '../../../../components/form/Input';

const Place = () => {
  const [place, setPlace] = useState('');

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.titleText}>장소</Text>
        <Input
          placeholder="장소를 입력해주세요"
          setValue={(value: string) => setPlace(value)}
          value={place}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: getWidth(30),
    paddingRight: getWidth(20),
  },
  card: {
    marginBottom: getWidth(40),
  },
});

export default Place;
