import React, { FC } from 'react';
import MuiIconButton, { IconButtonProps } from '@mui/material/IconButton';

export const IconButton: FC<IconButtonProps> = (props) => {
  return <MuiIconButton {...props} />;
};
