import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/groupmatch/Header';
import Groups from './groups/Groups';
import {height, width, colors} from '../constants/Index';
import plus from '../assets/images/common/plus.png';
import heart from '../assets/images/common/heart.png';
import check from '../assets/images/common/check.png';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '서울에서 만나요!',
    nickname: '김민수',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '서울에서 만나요!',
    nickname: '김은지',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455713e29d72',
    title: '서울에서 만나요!',
    nickname: '김민수',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455714e29d72',
    title: '서울에서 만나요!',
    nickname: '김은지',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e239d72',
    title: '서울에서 만나요!',
    nickname: '김민수',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455715e292d72',
    title: '서울에서 만나요!',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455741e29d72',
    title: '서울에서 만나요!',
  },
];

const MainScreen = () => {
  const clickHandler = () => {};
  const [flagBgc, setFlagBgc] = useState(false);

  const renderItem = ({item}: any) => (
    <View style={{backgroundColor: colors.white}}>
      <Groups
        id={item.id}
        title={item.title}
        flagBgc={flagBgc}
        setFlagBgc={setFlagBgc}
      />
      {flagBgc && (
        <>
          <TouchableOpacity activeOpacity={0.5} style={styles.buttonHeartStyle}>
            <Image source={heart} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.buttonCheckStyle}>
            <Image source={check} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
  return (
    <SafeAreaView>
      <Header />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={clickHandler}
        style={styles.touchableOpacityStyle}>
        <Image
          // FAB using TouchableOpacity with an image
          // For online image
          source={plus}
          // For local image
          //source={require('./images/float-add-icon.png')}
          style={styles.floatingButtonStyle}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: colors.white,
    borderColor: colors.green,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    width: width * 300,
  },
  item2: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100,
    borderColor: colors.green,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    width: width * 300,
  },
  title: {
    fontSize: 32,
  },
  topArea: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  manPhoto: {
    borderRadius: 100,
    height: height * 80,
    width: width * 80,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: colors.stroke,
  },
  womanPhoto: {
    borderRadius: 100,
    height: height * 80,
    width: width * 80,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#FFBAD6',
  },
  profileName: {
    marginLeft: 30,
  },
  progressBar: {
    height: 15,
    width: '90%',
    backgroundColor: 'rgba(176, 186, 195, 0.45)',
    borderColor: 'rgba(176, 186, 195, 0.45)',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  absoluteFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.green,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 50,
    backgroundColor: colors.green,
    borderRadius: 50,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  buttonHeartStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22.6471,
    width: 77,
    height: 77,
    top: 50,
    left: 280,
  },
  buttonCheckStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22.6471,
    width: 77,
    height: 77,
    top: 150,
    left: 280,
  },
});

export default MainScreen;
