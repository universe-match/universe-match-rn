import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../components/groupmatch/Header';

import {AddGroupButton, GroupContents} from './groups/Index';

const GroupScreen = () => (
  <SafeAreaView>
    <Header />
    <GroupContents />
    <AddGroupButton />
  </SafeAreaView>
);

export default GroupScreen;
