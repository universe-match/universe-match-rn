import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../components/groupmatch/Header';

import {AddGroupButton, GroupContainers} from './groups/components/Index';

const GroupScreen = ({navigation, route}: any) => (
  <SafeAreaView>
    <Header navigation={navigation} />
    <GroupContainers route={route} />
    <AddGroupButton navigation={navigation} />
  </SafeAreaView>
);

export default GroupScreen;
