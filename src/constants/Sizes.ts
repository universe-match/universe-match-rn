import {Dimensions} from 'react-native';

export const basicDimensions = {
  height: 720,
  width: 360,
};

export const height: any = (
  Dimensions.get('screen').height *
  (1 / basicDimensions.height)
).toFixed(2);

export const width: any = (
  Dimensions.get('screen').width *
  (1 / basicDimensions.width)
).toFixed(2);