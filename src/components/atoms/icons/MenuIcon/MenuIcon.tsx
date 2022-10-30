import React, { FC } from 'react';
import MuiMenuIcon from '@mui/icons-material/Menu';
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon';

export const MenuIcon: FC<SvgIconProps> = ({ color = 'inherit', ...props }) => {
  return <MuiMenuIcon {...props} color={color} />;
};
