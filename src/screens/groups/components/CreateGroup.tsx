import React, {useState} from 'react';
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../../../constants/Index';
import RemoveIcon from '../../../assets/images/common/remove.png';
import All from '../../../assets/images/group/all.png';
import School from '../../../assets/images/group/school.png';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const CreateGroup = ({onClose}: any) => {
  const [multiSliderValue, setMultiSliderValue] = useState([0, 4]);

  const multiSliderValuesChange = (values: any) => setMultiSliderValue(values);
  return (
    <View style={styles.background}>
      <View style={styles.dialog}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={onClose}
            style={styles.closeWrapper}>
            <Image source={RemoveIcon} style={styles.close} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {/* 정원 */}
          <View style={styles.card}>
            <View style={styles.title}>
              <Text style={styles.titleText}>정원</Text>
            </View>
            <View style={styles.sliderWrapper}>
              <MultiSlider
                markerStyle={{
                  ...Platform.select({
                    ios: {
                      height: 30,
                      width: 30,
                      backgroundColor: colors.white,
                      borderWidth: 1,
                      borderColor: colors.green,
                    },
                    android: {
                      height: 30,
                      width: 30,
                      backgroundColor: colors.white,
                      borderWidth: 1,
                      borderColor: colors.green,
                    },
                  }),
                }}
                pressedMarkerStyle={{
                  ...Platform.select({
                    android: {
                      height: 41,
                      width: 41,
                      borderRadius: 20,
                      backgroundColor: colors.green,
                      borderWidth: 2,
                      borderColor: colors.green,
                    },
                  }),
                }}
                selectedStyle={{
                  borderColor: colors.green,
                  borderWidth: 2,
                }}
                trackStyle={{
                  borderColor: colors.lightGray,
                  borderWidth: 2,
                }}
                values={[multiSliderValue[0], multiSliderValue[1]]}
                sliderLength={286}
                onValuesChange={multiSliderValuesChange}
                min={0}
                step={1}
                max={8}
                allowOverlap={false}
                minMarkerOverlapDistance={10}
              />
              <View style={styles.labelWrapper}>
                <Text style={styles.labelText1}>최소 2명</Text>
                <Text style={styles.labelText2}>최소 8명</Text>
              </View>
            </View>
          </View>
          {/* 비율 */}
          <View style={styles.card}>
            <View style={styles.title}>
              <Text style={styles.titleText}>비율</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>동성</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>이성</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* 그룹 선택 */}
          <View style={styles.card}>
            <View style={styles.title}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.titleText}>그룹 선택</Text>
                <Text style={styles.group_explan}>
                  *학교 선택시 회원님과 학교가 동일한 분만이 그룹에 참여 할 수
                  있습니다
                </Text>
              </View>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>전체</Text>
                <Image source={All} style={styles.image} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>학교</Text>
                <Image source={School} style={styles.image} />
              </TouchableOpacity>
            </View>
          </View>
          {/* 기간 */}
          <View style={styles.card} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#00000040',
  },
  dialog: {
    backgroundColor: colors.white,
    width: getWidth(720),
    height: getHeight(1240),
    paddingLeft: getWidth(63),
    paddingRight: getWidth(63),
  },
  header: {
    alignItems: 'center',
    width: '100%',
    top: getHeight(96),
  },
  closeWrapper: {
    position: 'absolute',
    right: 0,
  },
  close: {
    width: getWidth(22),
    height: getHeight(22),
  },
  title: {
    flexDirection: 'column',
  },
  titleText: {
    //fontFamily: fonts.bold,
    fontSize: getWidth(30),
  },
  content: {
    top: getHeight(200),
    width: '100%',
  },
  card: {
    marginBottom: getWidth(40),
  },
  sliderWrapper: {
    flexDirection: 'column',
    marginLeft: getWidth(50),
  },
  labelWrapper: {
    marginTop: getHeight(-30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  labelText1: {
    fontSize: 15,
    color: '#5EDEB4',
    marginLeft: -45,
  },
  labelText2: {
    fontSize: 15,
    color: '#5EDEB4',
    marginRight: -40,
  },
  buttons: {
    flexDirection: 'row',
    paddingTop: getWidth(14),
    marginLeft: getWidth(40),
  },
  button: {
    flexDirection: 'row',
    marginRight: getWidth(22),
    width: getWidth(250),
    height: getHeight(96),
    borderRadius: 8,
    borderColor: colors.green,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    //fontFamily: fonts.bold,
    fontSize: getWidth(30),
  },
  image: {
    marginLeft: getWidth(32),
  },
  group_explan: {
    fontSize: getWidth(15),
  },
});

export default CreateGroup;
