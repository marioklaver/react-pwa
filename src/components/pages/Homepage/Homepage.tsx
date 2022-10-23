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
          <ArticleSection category={ArticleCategory.all} />
        </ListLayout>
      }
      sideContent={
        <ListLayout>
          <ArticleSection category={ArticleCategory.sports} small />
          <ArticleSection category={ArticleCategory.technology} small />
        </ListLayout>
      }
    />
  );
};
