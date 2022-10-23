import React, { FC } from 'react';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';

export const AppBar: FC<AppBarProps> = (props) => {
  return <MuiAppBar {...props} />;
};
