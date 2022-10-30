import React, { FC } from 'react';
import MuiHomeIcon from '@mui/icons-material/Home';
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon';

export const HomeIcon: FC<SvgIconProps> = ({ color = 'inherit', ...props }) => {
  return <MuiHomeIcon {...props} color={color} />;
};
