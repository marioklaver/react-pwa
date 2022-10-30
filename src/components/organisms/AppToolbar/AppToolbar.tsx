import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Button, IconButton, Tab, Tabs, Toolbar } from '@components/atoms';
import { MenuIcon, HomeIcon } from '@components/atoms/icons';
import { ArticleCategory } from '@components/molecules';

interface Props {
  selectedCategory?: string;
}

export const AppToolbar: FC<Props> = ({ selectedCategory = '' }) => {
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(`/${newValue}`, { replace: true });
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton size="large" edge="start" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Tabs value={selectedCategory} style={{ flex: 1 }} onChange={handleChange}>
          <Tab icon={<HomeIcon />} value="" />
          <Tab label="World" value={ArticleCategory[ArticleCategory.general]} />
          <Tab label="Business" value={ArticleCategory[ArticleCategory.business]} />
          <Tab label="Entertainment" value={ArticleCategory[ArticleCategory.entertainment]} />
          <Tab label="Health" value={ArticleCategory[ArticleCategory.health]} />
          <Tab label="Science" value={ArticleCategory[ArticleCategory.science]} />
          <Tab label="Sports" value={ArticleCategory[ArticleCategory.sports]} />
          <Tab label="Technology" value={ArticleCategory[ArticleCategory.technology]} />
        </Tabs>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
