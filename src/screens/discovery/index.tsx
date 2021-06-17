import React from 'react';
import {ScrollView} from 'react-native';
import useTheme from '@/core/theme';
import {ScreenType} from '@/constants/enum';
import {String} from '@/utils';
import {DiscoveryTools, DiscoveryAirDrop, DiscoveryTopic} from './components';

const DiscoveryScreen = ({}: any) => {
  const {styles} = useTheme();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.screen_container}>
      <DiscoveryTopic />
      <DiscoveryTools />
      <DiscoveryAirDrop />
    </ScrollView>
  );
};

export default {
  name: String.getUUID(),
  title: '发现',
  screen: DiscoveryScreen,
  type: [ScreenType.TAB],
};
