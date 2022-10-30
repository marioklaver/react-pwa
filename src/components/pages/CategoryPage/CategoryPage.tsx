import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleCategory } from '@components/molecules';
import { AppToolbar, ArticleSection } from '@components/organisms';
import { OneColumnLayout, ListLayout } from '@components/templates';

type CategoryRouteParams = {
  category: `${ArticleCategory}`;
};

export const CategoryPage: FC = () => {
  const { category } = useParams<CategoryRouteParams>();
  if (!category) {
    return null;
  }

  const articleCategory = ArticleCategory[category];

  return (
    <OneColumnLayout
      header={<AppToolbar selectedCategory={category} />}
      content={
        <ListLayout>
          <ArticleSection category={articleCategory} />
        </ListLayout>
      }
    />
  );
};
