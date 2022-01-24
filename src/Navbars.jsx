/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {AppBar, Toolbar, makeStyles, withStyles, Button, Box, Typography} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import MoreIcon from '@material-ui/icons/MoreVert';
//import {Link} from 'react-router-dom';



const useStyle = makeStyles((theme) => ({
  header:{
    background : '#FFFFFF',
    height:75,
    boxShadow:"none"
  }, 
  logo:{
      width: 205,
      
      
  },
  

  container:{
      color: "#6f706e",
      margin: '0% 5% 0% auto',
      display: 'flex',
      '& > *':{
        marginRight: 10,
        fontSize: 20 
      }
  },
  linker:{
    color: "#6f706e"
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }
}))

//create a function that  

const ToolBar = withStyles({
  root:{
    minHeight: 45
  }
})(Toolbar);

export default function Navbars(props) {
    const styles = useStyle();

    const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const openDialog = () => {
    setOpen(true)
  }

  const locateAbout = () =>{
    window.location.replace("/#about")
  }

  const locateProduct = () =>{
    window.location.replace("/#product")
  }

  const locateTeam = () =>{
    window.location.replace("/#team")
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => locateAbout()}> 
        
        <p>About</p>
      </MenuItem>
      <MenuItem onClick={() => locateTeam()}>
        
        <p>Team &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      </MenuItem>
      <MenuItem onClick={() => locateProduct()}>
        
        <p>Product</p>
      </MenuItem>
      {/* <MenuItem >
        
        <p>Vision</p>
      </MenuItem> */}
    </Menu>
  );

    return (
      <AppBar className = {styles.header}>
      <ToolBar>
        {/* <Link to='/'>
        
        </Link>
         */}
         <img className= {styles.logo} src = {props.img}/>

        
        <div className={styles.container}>
        <div className={styles.sectionDesktop}>
        <Button color="inherit" style={{"color":"#000000"}} onClick={() => locateAbout()}>About</Button>
        <Button color="inherit" style={{"color":"#000000"}} onClick={() => locateTeam()}>Team</Button>
          <Button color="inherit" style={{"color":"#000000"}} onClick={() => locateProduct()}>Product</Button>
          {/* <Button color="inherit" style={{"color":"#000000"}}>Vision</Button> */}
          </div>
        </div>
        <div className={styles.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon style={{"color":"#000000"}}/>
            </IconButton>
          </div>

        </ToolBar>
        {renderMobileMenu}
      {renderMenu}
      
    </AppBar>
    
    
    )
}
 