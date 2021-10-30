import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';
import {colors, fonts, getHeight, getWidth} from '../../constants/Index';
import BackIcon from '../../assets/images/common/back.png';
import Button from '../../components/form/Button';

const Complaint = ({navigation}: any) => {
  const [content, setContent] = useState<string>('');

  const handleComplain = () => {
    const sendData = {
      content: content,
    };
    axios.post('/api/complain', sendData).then((response: any) => {
      Alert.alert(response.data);
    });
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Main');
            }}
            hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
            style={styles.backButton}>
            <Image style={styles.back} source={BackIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>불편신고 접수</Text>
        </View>
        <View style={styles.content}>
          <TextInput
            style={styles.textArea}
            onChangeText={value => setContent(value)}
          />
          <Button
            title="불편신고 접수하기"
            style={styles.button}
            onPress={() => {
              handleComplain();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    top: getHeight(79),
    justifyContent: 'center',
    borderBottomWidth: getWidth(1),
    borderBottomColor: colors.green,
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    right: getWidth(200),
  },
  back: {
    position: 'absolute',
    left: 0,
    width: getWidth(15),
    height: getHeight(23),
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: getWidth(30),
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    top: getWidth(250),
  },
  textArea: {
    width: getWidth(556),
    height: getHeight(262),
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 10,
    marginBottom: getWidth(38),
  },

  button: {
    width: getWidth(470),
  },
});

export default Complaint;
