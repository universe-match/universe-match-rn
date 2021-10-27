import React, {useState} from 'react';
import {StyleSheet, Platform, View, Text} from 'react-native';
import {getHeight, getWidth, colors} from '../../../../constants/Index';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Personnel = ({peopleLimit, setPeopleLimit}: any) => {
  const [multiSliderValue, setMultiSliderValue] = useState([0, 4]);

  const multiSliderValuesChange = (values: any) => {
    const finalValue = values[1] - values[0];
    setMultiSliderValue(values);
    setPeopleLimit(finalValue);
  };

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.titleText}>정원</Text>
      </View>
      <View style={styles.sliderWrapper}>
        <MultiSlider
          markerStyle={styles.markerStyle}
          pressedMarkerStyle={styles.pressedMarkerStyle}
          selectedStyle={styles.selectedStyle}
          trackStyle={styles.trackStyle}
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
          <Text style={styles.labelText1}>{peopleLimit}</Text>

          <Text style={styles.labelText2}>최소 8명</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'column',
    marginBottom: getWidth(42),
  },
  titleText: {
    fontSize: getWidth(30),
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
    marginRight: -20,
  },
  markerStyle: {
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
  },
  pressedMarkerStyle: {
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
  },
  selectedStyle: {
    borderColor: colors.green,
    borderWidth: 2,
  },
  trackStyle: {
    borderColor: colors.lightGray,
    borderWidth: 2,
  },
});

export default React.memo(Personnel);
