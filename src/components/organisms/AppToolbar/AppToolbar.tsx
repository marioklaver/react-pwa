import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Toolbar, Typography } from '@mui/material';
import { AppBar } from '@components/atoms';
import { MenuItems } from './AppToolbar.styles';

export const AppToolbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <MenuItems>
          <Typography variant="h6">Net binnen</Typography>
          <Typography variant="h6">Algemeen</Typography>
          <Typography variant="h6">Economie</Typography>
          <Typography variant="h6">Sport</Typography>
          <Typography variant="h6">Tech</Typography>
        </MenuItems>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
