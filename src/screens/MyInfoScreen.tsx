import React from 'react';
import {SafeAreaView} from 'react-native';
import Setting from './Setting';

const MyInfoScreen = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <Setting navigation={navigation} />
    </SafeAreaView>
  );
};

export default MyInfoScreen;
