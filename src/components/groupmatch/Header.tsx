import React from 'react'
import {
    StyleSheet,
    Image,
    SafeAreaView,
    View,
    Text
} from 'react-native'
import {height,width,colors} from '../../constants/Index'
import logo from '../../assets/images/common/logo.png'
import search from '../../assets/images/common/search.png'
import noti from '../../assets/images/common/noti.png'

const Header = () => {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.Area}>
                <View style={styles.leftArea}>
                    <Image
                    style={styles.logo}
                    source={logo}
                    />
                </View>
                <View style={styles.rightArea}>
                    <View style={{flexDirection: 'row',flex:2}}>
                        <Image
                        style={styles.search}
                        source={search}
                        />
                        <Image
                        style={styles.noti}
                        source={noti}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  Area:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  leftArea:{
    flex:1,
    left:-20
  },
  rightArea:{
    position: 'absolute',
    flex:1,
    right:70
  },
  logo:{

  },
  background:{
      backgroundColor:colors.white,
  },
  search:{
      width:width*25,
      height:height*25,
      top:10
  },
  noti:{
      width:width*20,
      height:height*25,
      left:20,
      top:8
  }
});

export default Header
