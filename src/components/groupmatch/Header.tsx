import React from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import {getWidth, getHeight, colors} from '../../constants/Index';
import logo from '../../assets/images/common/logo.png';
import search from '../../assets/images/common/search.png';
import noti from '../../assets/images/common/noti.png';

const Header = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.Area}>
        <View style={styles.leftArea}>
          <Image style={styles.logo} source={logo} resizeMode="contain" />
        </View>
        <View style={styles.rightArea}>
          <View style={{flexDirection: 'row', flex: 2}}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Search')}>
              <Image style={styles.search} source={search} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Image style={styles.noti} source={noti} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Area: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftArea: {
    flex: 1,
    left: -20,
  },
  rightArea: {
    position: 'absolute',
    flex: 1,
    right: 70,
  },
  logo: {
    width: getWidth(50),
    height: getHeight(50),
    marginLeft: 30,
  },
  background: {
    backgroundColor: colors.white,
  },
  search: {
    width: getWidth(42),
    height: getHeight(43),
    top: 10,
  },
  noti: {
    width: getWidth(42),
    height: getHeight(43),
    left: 20,
    top: 8,
  },
});

export default Header;
