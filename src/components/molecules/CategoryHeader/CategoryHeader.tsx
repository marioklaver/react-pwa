import React, { FC } from 'react';
import { Typography } from '@components/atoms';
import { Container } from './CategoryHeader.styles';

export enum ArticleCategory {
  all = 'all',
  general = 'general',
  business = 'business',
  entertainment = 'entertainment',
  health = 'health',
  science = 'science',
  sports = 'sports',
  technology = 'technology',
}

const categoryName: Record<ArticleCategory, string> = {
  [ArticleCategory.all]: 'Top stories',
  [ArticleCategory.general]: 'World',
  [ArticleCategory.business]: 'Business',
  [ArticleCategory.entertainment]: 'Entertainment',
  [ArticleCategory.health]: 'Health',
  [ArticleCategory.science]: 'Science',
  [ArticleCategory.sports]: 'Sports',
  [ArticleCategory.technology]: 'Technology',
};

interface Props {
  category: ArticleCategory;
}

export const CategoryHeader: FC<Props> = ({ category }) => {
  return (
    <Container>
      <Typography variant="h3">{categoryName[category]}</Typography>
    </Container>
  );
};
