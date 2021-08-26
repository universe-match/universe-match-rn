import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {width, colors} from '../../constants/Index';
import Members from './Members';
import ProgressBar from './ProgressBar';
import GroupButtons from './GroupButtons';
import heart from '../../assets/images/common/heart.png';
import check from '../../assets/images/common/check.png';

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

const Groups = ({id, title}: any) => {
  const [flagBgc, setFlagBgc] = useState(false);
  const [dataList] = useState(DATA);

  const clickItem = (itemId: any) => {
    dataList.filter(obj => {
      if (obj.id === itemId) {
        setFlagBgc(!flagBgc);
      }
    });
  };

  return (
    <>
      <TouchableHighlight
        activeOpacity={0.7}
        onPress={() => clickItem(id)}
        underlayColor="#b0bac36b">
        <View style={flagBgc ? styles.item2 : styles.item}>
          <View style={{left: 10, marginTop: 20}}>
            <View style={styles.topArea}>
              <Text
                style={{
                  color: 'rgba(0, 0, 0, 1)',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {title}
              </Text>
              <Text style={{right: 20, marginTop: 10}}>서울시</Text>
            </View>
            <View style={styles.topArea}>
              <Text>평균연령 24</Text>
              <Text style={{right: 20}}>8월9~20일</Text>
            </View>
            <ScrollView
              style={{width: width * 290}}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              onMomentumScrollEnd={() => {
                console.log('Scrolling is End');
              }}>
              <Members />
            </ScrollView>
          </View>
          <ProgressBar />
        </View>
      </TouchableHighlight>
      {flagBgc && <GroupButtons />}
    </>
  );
};

const styles = StyleSheet.create({
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
  heartButton: {
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
  checkButton: {
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

export default Groups;
