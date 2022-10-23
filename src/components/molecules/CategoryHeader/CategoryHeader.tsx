import React, { FC } from 'react';
import { Typography } from '@components/atoms';
import { Container } from './CategoryHeader.styles';

export enum ArticleCategory {
  // eslint-disable-next-line no-unused-vars
  all,
  // eslint-disable-next-line no-unused-vars
  general,
  // eslint-disable-next-line no-unused-vars
  business,
  // eslint-disable-next-line no-unused-vars
  entertainment,
  // eslint-disable-next-line no-unused-vars
  health,
  // eslint-disable-next-line no-unused-vars
  science,
  // eslint-disable-next-line no-unused-vars
  sports,
  // eslint-disable-next-line no-unused-vars
  technology,
}

interface Props {
  category: ArticleCategory;
  small?: boolean;
}

export const CategoryHeader: FC<Props> = ({ category, small = false }) => {
  return (
    <Container>
      <Typography variant={small ? 'h5' : 'h4'}>{category}</Typography>
    </Container>
  );
};
