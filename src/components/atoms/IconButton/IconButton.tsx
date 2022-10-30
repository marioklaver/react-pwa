import React, { FC } from 'react';
import MuiIconButton, { IconButtonProps } from '@mui/material/IconButton';

export const IconButton: FC<IconButtonProps> = ({ color = 'inherit', ...props }) => {
  return <MuiIconButton {...props} color={color} />;
};
