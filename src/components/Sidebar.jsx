import { AccountBox, Description, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'

import React from 'react'

const Sidebar = ({mode, setMode}) => {
  return (
    <Box  flex={1} p={2} sx={{display: {xs: "none", sm: "block"}}} >
        <Box position={"fixed"}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon >
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
    </List>
    <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
               <Description />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
    </List>
    <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
    </List>
    <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
    </List>
    <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
    </List>
    <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
    </List>
    <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
    </List>
    <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={(e) => setMode(mode==='light'?'dark':'light')} />
            </ListItemButton>
          </ListItem>
    </List>
    </Box>
</Box>
    
  )
}

export default Sidebar