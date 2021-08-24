import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../components/groupmatch/Header';
import AddGroupButton from './groups/AddGroupButton';
import GroupContents from './groups/GroupContents';

const GroupScreen = () => (
  <SafeAreaView>
    <Header />
    <GroupContents />
    <AddGroupButton />
  </SafeAreaView>
);

export default GroupScreen;
