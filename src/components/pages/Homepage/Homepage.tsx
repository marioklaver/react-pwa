import React, { FC } from 'react';
import { ArticleCategory } from '@components/molecules';
import { AppToolbar, ArticleSection } from '@components/organisms';
import { TwoColumnLayout, ListLayout } from '@components/templates';

export const Homepage: FC = () => {
  return (
    <TwoColumnLayout
      header={<AppToolbar />}
      mainContent={
        <ListLayout>
          <ArticleSection category={ArticleCategory.general} />
          <ArticleSection category={ArticleCategory.sports} />
        </ListLayout>
      }
      sideContent={
        <ListLayout>
          <ArticleSection category={ArticleCategory.technology} small />
          <ArticleSection category={ArticleCategory.entertainment} small />
          <ArticleSection category={ArticleCategory.science} small />
          <ArticleSection category={ArticleCategory.business} small />
          <ArticleSection category={ArticleCategory.health} small />
        </ListLayout>
      }
    />
  );
};
