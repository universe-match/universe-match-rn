import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {height, width, colors} from '../../constants/Index';

interface Button {
  title: string;
  onPress(): void;
}

const Button = ({title, onPress}: Button) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        useAngle={true}
        angle={90}
        colors={['rgb(94, 222, 180)', '#34DE91']}
        style={{
          borderRadius: 7,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: colors.white,
            lineHeight: 55,
            textAlign: 'center',
            width: '100%',
            height: 55,
            borderRadius: 7,
          }}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
