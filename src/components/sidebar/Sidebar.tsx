import React, { useId } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import {
  Home,
  HolidayVillage,
  FlightTakeoff,
  Group,
  Policy,
  AccountBox,
} from '@mui/icons-material';

const Sidebar = () => {
  const pages = [
    {
      text: 'Dashboard',
      id: useId(),
      icon: <Home />,
      path: '/',
    },
    {
      text: 'Profile',
      id: useId(),
      icon: <AccountBox />,
      path: '/profile',
    },
    {
      text: 'Holidays',
      id: useId(),
      icon: <HolidayVillage />,
      path: '/holidays',
    },
    {
      text: 'Leaves',
      id: useId(),
      icon: <FlightTakeoff />,
      path: '/leaves',
    },
    {
      text: 'Employees',
      id: useId(),
      icon: <Group />,
      path: '/employees',
    },
    {
      text: 'Policy',
      id: useId(),
      icon: <Policy />,
      path: '/policies',
    },
  ];
  return (
    <>
      <h1>TheLoGo</h1>
      <List>
        {pages.map(({ id, text, icon, path }) => (
          <ListItem key={id}>
            <ListItemButton onClick={() => console.log('clicked: ', path)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
