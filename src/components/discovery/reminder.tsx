import React from 'react';
import {IconDiscoveryReminder} from '@/components/icons';
import DiscoveryItem from './item';
import useTheme from '@/core/theme';

const DiscoveryReminder = () => {
  const {styleConfig} = useTheme();
  const config = {
    title: '价格提醒',
    descr: '数字货币价格实时提醒',
    colors: [styleConfig.color.yellow, styleConfig.color.red],
    icon: (
      <IconDiscoveryReminder
        width={32}
        height={32}
        fill={styleConfig.color.gray_100}
      />
    ),
    handlePress: () => null,
  };
  return <DiscoveryItem {...config} />;
};

export default DiscoveryReminder;
