import React, { FC } from 'react';
import MuiTabs, { TabsProps } from '@mui/material/Tabs';
import MuiTab, { TabProps } from '@mui/material/Tab';

export const Tabs: FC<TabsProps> = (props) => {
  return <MuiTabs {...props} />;
};

export const Tab: FC<TabProps> = (props) => {
  return <MuiTab {...props} />;
};
