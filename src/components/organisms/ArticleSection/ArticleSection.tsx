import React, { FC } from 'react';
import { Paper } from '@components/atoms';
import { Article, ArticleCategory, CategoryHeader } from '@components/molecules';
import { useNewsApi } from '@hooks/useNewsApi/useNewsApi';

interface Props {
  category: ArticleCategory;
  small?: boolean;
}

export const ArticleSection: FC<Props> = ({ category, small = false }) => {
  const { newsItems } = useNewsApi(category);

  return (
    <Paper>
      <CategoryHeader category={category} />
      {newsItems
        .filter((newsItem) => newsItem.urlToImage)
        .slice(0, small ? 5 : newsItems.length)
        .map((newsItem) => (
          <Article key={newsItem.url} newsItem={newsItem} small={small} />
        ))}
    </Paper>
  );
};
