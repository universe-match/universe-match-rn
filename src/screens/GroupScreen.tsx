import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../components/groupmatch/Header';

import {AddGroupButton, GroupContainers} from './groups/components/Index';

const GroupScreen = () => (
  <SafeAreaView>
    <Header />
    <GroupContainers />
    <AddGroupButton />
  </SafeAreaView>
);

export default GroupScreen;
