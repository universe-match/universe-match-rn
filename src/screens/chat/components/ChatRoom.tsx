import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {getWidth, colors} from '../../../constants/Index';
import {ChatMembers, ChatRoomProcessBar, ChatRoomButtons} from './Index';

const ChatRoom = ({
  navigation,
  id,
  title,
  area,
  fromDate,
  toDate,
  matchingList,
}: any) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (flag: any) => {
    setIsActive(!flag);
  };

  return (
    <View key={id}>
      <TouchableHighlight
        activeOpacity={0.7}
        onPress={() => handleClick(isActive)}
        underlayColor="#b0bac36b">
        <View
          style={isActive ? {...styles.root, ...styles.active} : styles.root}>
          <View style={styles.chatInfo}>
            <View style={styles.topArea}>
              <Text style={styles.textTitle}>{title}</Text>
              <Text style={styles.textArea}>{area}</Text>
            </View>
            <View style={styles.topArea}>
              <Text style={{color: colors.gray4}}>평균연령: </Text>
              <Text style={styles.textDate}>
                {fromDate}~{toDate}
              </Text>
            </View>
            <ScrollView
              style={{width: getWidth(580)}}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              onMomentumScrollEnd={() => {
                console.log('Scrolling is End');
              }}>
              {matchingList.map((member: any) => (
                <ChatMembers member={member} />
              ))}
            </ScrollView>
          </View>
          <ChatRoomProcessBar />
        </View>
      </TouchableHighlight>
      {isActive && <ChatRoomButtons navigation={navigation} id={id} />}
    </View>
  );
};

const styles = StyleSheet.create({
  chatInfo: {
    left: getWidth(10),
    marginTop: getWidth(20),
  },
  root: {
    backgroundColor: 'rgba(223, 234, 230, 0.46)',
    borderColor: colors.green,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    marginTop: getWidth(30),
    marginLeft: getWidth(60),
    width: getWidth(600),
  },
  active: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100,
  },
  textTitle: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
  },
  textArea: {
    right: 20,
    marginTop: 10,
  },
  topArea: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  textDate: {
    right: 20,
  },
});

export default ChatRoom;
