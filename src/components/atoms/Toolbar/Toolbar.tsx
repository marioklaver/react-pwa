import React, { FC } from 'react';
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar';

export const Toolbar: FC<ToolbarProps> = (props) => {
  return <MuiToolbar {...props} />;
};
