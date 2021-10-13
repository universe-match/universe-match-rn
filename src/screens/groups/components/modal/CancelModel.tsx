import React, {useState} from 'react';
import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  Alert,
  Text,
} from 'react-native';
// 모달 박스1

interface Props {
  modalVisible: boolean;
  setModalVisible: any;
}
const CancelModel = ({modalVisible, setModalVisible}: Props) => {
  //   const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Modal
        animationType="slide"
        transparent={true} // 배경 투명 하게
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.50)',
          }}>
          <View
            style={{
              width: 300,
              height: 300,
              backgroundColor: 'white',
              borderRadius: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
                marginTop: 10,
                flex: 5,
              }}>
              프로필 사진 변경
            </Text>
            <View
              style={{
                alignSelf: 'baseline',
                backgroundColor: '#32C5E6',
                width: 300,
                flex: 1,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                flexDirection: 'row',
              }}>
              <TouchableHighlight
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={{color: 'white', fontSize: 15}}>취소</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={{color: 'white', fontSize: 15}}>종료</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

export default CancelModel;
