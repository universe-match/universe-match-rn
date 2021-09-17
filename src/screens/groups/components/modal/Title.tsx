import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getWidth} from '../../../../constants/Index';
import Input from '../../../../components/form/Input';

const Title = () => {
  const [title, setTitle] = useState('');

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.titleText}>제목</Text>
        <Input
          placeholder="성희롱적 표현과 욕설은 안내없이 삭제됩니다"
          setValue={(value: string) => setTitle(value)}
          value={title}
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

export default Title;
