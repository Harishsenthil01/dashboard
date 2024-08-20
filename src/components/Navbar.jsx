import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, InputBase, styled, Toolbar, Typography, Badge, Avatar, Menu, MenuItem,  } from '@mui/material'
import React, { useState } from 'react'


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
     backgroundColor: "white",
     padding: "0px 10px",
     borderRadius: theme.shape.borderRadius,
     width: "40%"
}));
const Icons = styled("Box")(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));
const Userbox = styled("Box")(({ theme }) => ({
display: "flex",
gap: "20px",
alignItems: "center",
[theme.breakpoints.up("sm")]: {
    display: "none"
}
}));


const Navbar = () => {
    
    const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>LAMA DEV</Typography>
            <Pets sx={{display: {xs: "block", sm: "none"}}}/>
            <Search><InputBase sx={{width: "100%", color: 'black'}} placeholder='Search...' /></Search>
            <Icons>
                 <Badge badgeContent={4} color="error">
                 <Mail />
                 </Badge> 
                 <Badge badgeContent={4} color="error">
                 <Notifications />
                 </Badge> 
                 <Avatar sx={{width: 30, height: 30}} 
                 src='https://assets.website-files.com/6427381726a472874096a798/642754d52993b9044d329d40_Ellipse%202-2.png'
                 onClick={(e) => setOpen(true)}
                 />  
            </Icons>
            <Userbox onClick={(e) => setOpen(true)}>
            <Avatar sx={{width: 30, height: 30}} src='https://assets.website-files.com/6427381726a472874096a798/642754d52993b9044d329d40_Ellipse%202-2.png' />
            <Typography>John</Typography>  
            </Userbox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar