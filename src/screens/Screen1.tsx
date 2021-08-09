import React from 'react'
import {
    SafeAreaView,
    Text,
    FlatList,
    View,
    StyleSheet,
    StatusBar,
    Image,
    ScrollView,
    TouchableOpacity
  } from 'react-native';
import Header from '../components/groupmatch/Header'
import {height,width,colors} from '../constants/Index'
import man from '../assets/images/test/man.png'
import woman from '../assets/images/test/woman.png'
import plus from '../assets/images/common/plus.png'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '서울에서 만나요!',
      nickname:'김민수'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '서울에서 만나요!',
      nickname:'김은지'
    },
    {
      id: '58694a0f-3da1-471f-bd96-1455713e29d72',
      title: '서울에서 만나요!',
      nickname:'김민수'
    },
    {
        id: '58694a0f-3da1-471f-bd96-1455714e29d72',
        title: '서울에서 만나요!',
        nickname:'김은지'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e239d72',
        title: '서울에서 만나요!',
        nickname:'김민수'
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
const Item = ({ title }:any) => (
    <View style={styles.item}>
        <View style={{left:10,marginTop:20}}>
            <View style={styles.topArea}>
                <Text style={{color:'rgba(0, 0, 0, 1)',fontSize:20,fontWeight: "bold"}}>{title}</Text>
                <Text style={{right:20,marginTop:10}} >서울시</Text>
            </View>
            <View style={styles.topArea}>
                <Text >평균연령 24</Text>
                <Text style={{right:20}} >8월9~20일</Text> 
            </View>
            <ScrollView
            style={{width:width*290}}
            horizontal={true}
            showsHorizontalScrollIndicator = {true}
            onMomentumScrollEnd ={
                () => {console.log('Scrolling is End')}
            }
            >
            <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:15}}>
                <View>
                    <Image
                        style={styles.manPhoto}
                        source={man}
                    />
                    <View>
                        <Text style={styles.profileName}>김민수</Text> 
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Text >#ENTJ</Text><Text>/</Text><Text >고려대</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Image
                        style={styles.womanPhoto}
                        source={woman}
                    />
                    <View>
                        <Text style={styles.profileName}>김지은</Text> 
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Text >#ENTJ</Text><Text>/</Text><Text >연세대</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.manPhoto}
                        source={man}
                    />
                    <View>
                        <Text style={styles.profileName}>김민수</Text> 
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Text >#ENTJ</Text><Text>/</Text><Text >고려대</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.womanPhoto}
                        source={woman}
                    />
                    <View>
                        <Text style={styles.profileName}>김지은</Text> 
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Text >#ENTJ</Text><Text>/</Text><Text >연세대</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.manPhoto}
                        source={man}
                    />
                    <View>
                        <Text style={styles.profileName}>김민수</Text> 
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Text >#ENTJ</Text><Text>/</Text><Text >고려대</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.womanPhoto}
                        source={woman}
                    />
                    <View>
                        <Text style={styles.profileName}>김지은</Text> 
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <Text >#ENTJ</Text><Text>/</Text><Text >연세대</Text>
                        </View>
                    </View>
                </View>    
            </View>
            </ScrollView>
        </View>
        <View style={styles.progressBar}>
            <View style={[styles.absoluteFill, {width: '75%'}]}  />
        </View>
    </View>
);
  
const Screen1 = () => {

    const clickHandler = () =>{
        
    }

    const renderItem = ({ item }:any) => (
        <View style={{backgroundColor:colors.white}}>
            <Item title={item.title} />
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
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: colors.white,
      borderColor:colors.stroke,
      borderRadius:10,
      marginVertical: 8,
      borderWidth: 1,
      marginLeft:30,
      marginRight:30,
      width:width*300,
    },
    title: {
      fontSize: 32,
    },
    topArea:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between'
    },
    manPhoto:{
        borderRadius:100,
        height:height*80,
        width:width*80,
        marginLeft:5,
        borderWidth:1,
        borderColor:colors.stroke
    },
    womanPhoto:{
        borderRadius:100,
        height:height*80,
        width:width*80,
        marginLeft:5,
        borderWidth:1,
        borderColor:'#FFBAD6'
    },
    profileName:{
        marginLeft:30
    },
    progressBar:{
        height: 15,
        width: '90%',
        backgroundColor: 'rgba(176, 186, 195, 0.45)',
        borderColor: 'rgba(176, 186, 195, 0.45)',
        borderWidth: 2,
        borderRadius: 5,
        marginLeft:20,
        marginBottom:20,
        marginTop:20
    },
    absoluteFill:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: colors.yellow
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 50,
        backgroundColor:'rgba(255, 186, 214, 1)',
        borderRadius:50
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
  });
  
export default Screen1
