import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display: {xs: "none", sm: "block"}}} >
        <Box position={"fixed"} width={300}>
            <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
            <AvatarGroup max={6}>
                     <Avatar alt="Remy Sharp" src="https://assets.website-files.com/6427381726a472874096a798/642754d52993b9044d329d40_Ellipse%202-2.png" />
                     <Avatar alt="Remy Sharp" src="" />
                     <Avatar alt="Cindy Baker" src="https://assets.website-files.com/6427381726a472874096a798/642754d52993b9d5f8329d3f_Ellipse%202-3.png" />
                     <Avatar alt="Agnes Walker" src="https://assets.website-files.com/6427381726a472874096a798/642754d52993b9d5f8329d3f_Ellipse%202-3.png" />
                     <Avatar alt="Remy Sharp" src="" />
                     <Avatar alt="Trevor Henderson" src="https://assets.website-files.com/6427381726a472874096a798/642754d52993b9044d329d40_Ellipse%202-2.png" />
                     <Avatar alt="Travis Howard" src="https://assets.website-files.com/6427381726a472874096a798/642754d52993b9044d329d40_Ellipse%202-2.png" />
            </AvatarGroup>
            <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
            <ImageList cols={3} rowHeight={100} gap={5}>
                 <ImageListItem>
                      <img src='https://assets.website-files.com/6427381726a472874096a798/6427c6d28fbcbe49cbbb7f03_Rectangle%2011-15.png' />
                 </ImageListItem>
                 <ImageListItem>
                      <img src="https://assets.website-files.com/6427381726a472874096a798/6427c6d1597397a4d68d3e6d_Rectangle%2011-5.png" />
                 </ImageListItem>
                 <ImageListItem>
                      <img src="https://assets.website-files.com/6427381726a472874096a798/6427c6d16a10ece40151e308_Rectangle%2011-3.png" />
                 </ImageListItem>
            </ImageList>
            <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversation</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://assets.website-files.com/6427381726a472874096a798/642753bf26a472d15598b813_Rectangle%2011.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://assets.website-files.com/6427381726a472874096a798/642754d5f47c953cb7322f73_Ellipse%202-1.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://assets.website-files.com/6427381726a472874096a798/642754d52993b9044d329d40_Ellipse%202-2.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
    </Box>
  )
}

export default Rightbar