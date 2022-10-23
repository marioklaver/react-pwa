import React, { FC } from 'react';

import MuiTypography, { TypographyProps } from '@mui/material/Typography';

export const Typography: FC<TypographyProps> = (props) => {
  return <MuiTypography {...props} />;
};
