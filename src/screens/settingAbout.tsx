import React from 'react';
import {Text, ScrollView} from 'react-native';
import HeaderBack from '@/components/header/back';
import useTheme from '@/core/theme';

const SettingAboutScreen = ({navigation}: any) => {
  const {styleConfig, styles} = useTheme();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: styleConfig.color.blue,
      headerBackImage: () => <HeaderBack />,
    });
  }, [navigation, styleConfig]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.screen_container_with_padding]}>
      <Text>SettingAboutScreen</Text>
    </ScrollView>
  );
};

export default SettingAboutScreen;
