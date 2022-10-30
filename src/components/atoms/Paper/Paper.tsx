import React, { FC } from 'react';
import MuiPaper, { PaperProps } from '@mui/material/Paper';

export const Paper: FC<PaperProps> = ({ square = true, ...props }) => {
  return <MuiPaper square={square} {...props} />;
};
