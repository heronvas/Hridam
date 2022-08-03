/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {AppBar, Toolbar, makeStyles, withStyles, Button, Box, Typography} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import MoreIcon from '@material-ui/icons/MoreVert';
import Login from './Login.jsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
import {logout, useAuth } from "./firebase";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//import {Link} from 'react-router-dom';



const useStyle = makeStyles((theme) => ({
  header:{
    background : '#FFFFFF',
    height:92,
    boxShadow:"none"
  }, 
  logo:{
      width: 240,
      height:90
      
      
      
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
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}))

//create a function that  

const ToolBar = withStyles({
  root:{
    minHeight: 45
  }
})(Toolbar);

export default function Navbars(props) {
    const styles = useStyle();
    const currentUser = useAuth();

    const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [state, setState] = React.useState({
    left: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(styles.list, {
        [styles.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      //onClick={toggleDrawer(anchor, false)}
      //onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <IconButton
              aria-label="show more"
              //aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={toggleDrawer('left', false)}
              color="inherit"
              style = {{
                //marginLeft:"78%"
                position:"relative",
                zIndex:"99",
                float:"right"
              }}
            >
              <CloseIcon style={{"color":"#000000"}}/>
            </IconButton>
      </List>
      <List>
      <ListItem>
      <Button color="inherit" style={{"color":"#000000"}} onClick={() => locateTeam()}>Vision</Button>
      </ListItem>
      <ListItem>
      <Button color="inherit" style={{"color":"#000000"}} onClick={() => locateProduct()}>Product</Button>
        
      </ListItem>
      <ListItem>
      <Button color="inherit" style={{"color":"#000000"}} onClick={() => locateAbout()}>Tutorial</Button>
        
      </ListItem>
      
      <ListItem>
      <Button color="inherit" style={{"color":"#000000"}} onClick={() => locateContact()}>Contact Us</Button>
      </ListItem>
      <ListItem>
      <Button color="inherit" style={{"color":"#FFFFFF", backgroundColor:"#003D57", borderRadius:"10px", marginLeft:"10px"}} onClick={() => locateBuy()}>Buy Now</Button>
        
      </ListItem>
      <ListItem>
      <div>
          {
            (!currentUser?.email)?<Button
            color="inherit" style={{"color":"#000000", marginLeft:"9px",marginBottom:"8px", fontSize:"15px"}}
            onClick={() => openDialog()}
          >
            <PersonIcon style={{"color":"#000000"}}/>&nbsp;Login
          </Button>:<Button
              color="inherit" style={{"color":"#000000", marginLeft:"9px",marginBottom:"8px", fontSize:"15px"}}
              onClick={() => {
                toast.success('Logged out sucessfully', {autoClose:3000});
                logout()
              }}
            >
              <ExitToAppIcon style={{"color":"#000000"}}/>&nbsp;Logout
            </Button>
          }
        </div>
      </ListItem>
      </List>
    </div>
  );

  const openDialog = () => {
    setOpen(true)
  }

  const locateAbout = () =>{
    //window.location.replace("/#about")
    window.scrollTo({behavior: 'smooth', top: props.about.current.offsetTop -120});
  }

  const locateProduct = () =>{
    window.scrollTo({behavior: 'smooth', top: props.product.current.offsetTop -120});
  }

  const locateTeam = () =>{
    window.scrollTo({behavior: 'smooth', top: props.vision.current.offsetTop -100});
  }

  const locateContact = () =>{
    window.scrollTo({behavior: 'smooth', top: props.contactUs.current.offsetTop -120});
  }

  const locateBuy = () =>{
    window.scrollTo({behavior: 'smooth', top: props.buys.current.offsetTop -120});
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
      <MenuItem onClick={() => locateTeam()}>
        
        <p>Vision &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      </MenuItem>
      
      <MenuItem onClick={() => locateProduct()}>
        
        <p>Product</p>
      </MenuItem>
      

      <MenuItem onClick={() => locateAbout()}> 
        
        <p>Tutorial</p>
      </MenuItem>

      
      <MenuItem onClick={() => locateContact()}>
        
        <p>Contact Us &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      </MenuItem>
      
      {/* <MenuItem >openDialog
        
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
        <Button color="inherit" style={{"color":"#000000"}} onClick={() => locateTeam()}>Vision</Button>
        <Button color="inherit" style={{"color":"#000000"}} onClick={() => locateProduct()}>Product</Button>
        <Button color="inherit" style={{"color":"#000000"}} onClick={() => locateAbout()}>Tutorial</Button>
        <Button color="inherit" style={{"color":"#000000"}} onClick={() => locateContact()}>Contact Us</Button>
        {/* <Button color="inherit" style={{"color":"#FFFFFF", backgroundColor:"#003D57", borderRadius:"14px", marginLeft:"10px", marginTop:"3px", width:"140px", height:"45px"}} onClick={() => locateBuy()}>Buy Now</Button> */}
        {/* <div>
          {
            (!currentUser?.email)?<IconButton
            color="inherit" style={{"color":"#000000", marginLeft:"9px",marginBottom:"8px",}}
            onClick={() => openDialog()}
          >
            <PersonIcon style={{"color":"#000000"}}/>
          </IconButton>:<IconButton
              color="inherit" style={{"color":"#000000", marginLeft:"9px",marginBottom:"8px",}}
              onClick={() => {
                toast.success('Logged out sucessfully', {autoClose:3000});
                logout()
              }}
            >
              <ExitToAppIcon style={{"color":"#000000"}}/>
            </IconButton>
          }
        </div> */}
          
          {/* <Button color="inherit" style={{"color":"#000000"}}>Vision</Button> */}
          </div>
        </div>
        <div className={styles.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={toggleDrawer('left', true)}
              color="inherit"
            >
              <MenuIcon style={{"color":"#000000"}}/>
            </IconButton>
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
          </div>

        </ToolBar>
        {renderMobileMenu}
      {renderMenu}
      <Login open={open} setOpen={setOpen}/>
    </AppBar>
    
    
    )
}
 