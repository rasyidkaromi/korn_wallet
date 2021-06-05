import React, {useCallback} from 'react';
import useTheme from '@/core/theme';
import DiscoveryGroup from './group';
import {
  IconDiscoveryBinance,
  IconDiscoveryBrowser,
  IconDiscoveryImToken,
} from '@/components/icons';
import {useNavigation} from '@react-navigation/native';
import {RouteConfig} from '@/constants/navigation';

const DiscoveryTools = () => {
  const {styleConfig} = useTheme();

  const navigation = useNavigation();

  const handleBrowserPress = useCallback(() => {
    navigation.navigate(RouteConfig.DiscoveryBrowser.name);
  }, [navigation]);

  const discoveryConfig = {
    title: '工具',
    items: [
      {
        name: '区块浏览器',
        icon: (
          <IconDiscoveryBrowser
            width={36}
            height={36}
            fill={styleConfig.color.green}
          />
        ),
        handlePress: handleBrowserPress,
      },
      {
        name: '币安(Binance)',
        icon: (
          <IconDiscoveryBinance
            width={36}
            height={36}
            fill={styleConfig.color.red}
          />
        ),
        handlePress: handleBrowserPress,
      },
      {
        name: '钱包(imToken)',
        icon: (
          <IconDiscoveryImToken
            width={36}
            height={36}
            fill={styleConfig.color.yellow}
          />
        ),
        handlePress: handleBrowserPress,
      },
    ],
  };

  return <DiscoveryGroup data={discoveryConfig} col={3} />;
};

export default DiscoveryTools;
