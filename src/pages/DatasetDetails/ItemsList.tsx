import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import FRBImage from '../../assets/images/FRB.jpg';

export const ItemsList = () => {
  return (
    <List>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="FRB" src={FRBImage} />
        </ListItemAvatar>
        <ListItemText primary="FRB Benchmark" />
      </ListItem>
    </List>
  );
};
