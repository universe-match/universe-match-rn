import {Dimensions} from 'react-native';

export const basicDimensions = {
  height: 1280,
  width: 720,
};

export const height: number = Number(
  (Dimensions.get('screen').height * (1 / basicDimensions.height)).toFixed(2),
);

export const width: number = Number(
  (Dimensions.get('screen').width * (1 / basicDimensions.width)).toFixed(2),
);

export const getHeight = (h: number): number => height * h;
export const getWidth = (w: number): number => width * w;
