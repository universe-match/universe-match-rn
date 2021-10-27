import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {colors, fonts, getHeight, getWidth} from '../../constants/Index';
import BackIcon from '../../assets/images/common/back.png';
import GroupSearch from '../../assets/images/common/groupSearch.png';

const Search = ({navigation}: any) => {
  const [search, setSearch] = useState<string>('');
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
          <TextInput
            style={styles.title}
            placeholder="그룹의 방제를 입력해주세요"
            onChangeText={(v: string) => setSearch(v)}
            value={search}
          />
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('GroupScreen', {
                search: search,
              });
            }}>
            <Image source={GroupSearch} />
          </TouchableHighlight>
        </View>
        <View style={styles.content} />
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
    right: getWidth(100),
  },
  back: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: getWidth(15),
    height: getHeight(23),
  },
  title: {
    fontSize: getWidth(30),
    width: getWidth(360),
    textAlign: 'center',
  },
  search: {
    width: getWidth(36),
    height: getHeight(31.34),
    left: getWidth(80),
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    top: getWidth(250),
  },
});

export default Search;
