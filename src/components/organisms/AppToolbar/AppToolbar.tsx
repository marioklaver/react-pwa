import React from 'react';
import { AppBar, Button, IconButton, Tab, Tabs, Toolbar } from '@components/atoms';
import { MenuIcon, HomeIcon } from '@components/atoms/icons';

export const AppToolbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton size="large" edge="start" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Tabs value={'one'} style={{ flex: 1 }}>
          <Tab icon={<HomeIcon />} />
          <Tab label="World" />
          <Tab label="Business" />
          <Tab label="Entertainment" />
          <Tab label="Health" />
          <Tab label="Science" />
          <Tab label="Sports" />
          <Tab label="Technology" />
        </Tabs>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
