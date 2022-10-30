import React, { FC } from 'react';
import { Container } from './ListLayout.styles';

interface Props {
  children: React.ReactNode;
}

export const ListLayout: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
