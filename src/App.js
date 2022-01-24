import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logos from './0011.jpg';
import hospital from './hospital.jpg';
import hridham from './hridamblack.png';
import hridhamW from './navicon.jpg';
import product from './product.png';
import prodComps from './prodComp.jpg';
import phone from './icons/Phone1.jpg';
import heart from './icons/heart.jpeg';
import rec from './icons/rec.jpeg';
import battery from './icons/battery.jpeg';
import anc from './icons/anc.jpeg';
import body from './icons/body.jpeg';
import earphone from './icons/earphone.jpeg';
import { Box } from '@material-ui/core';
import './App.css';
import Card from './SimpleCard';
import ACard from './AttributeCard.jsx';
import Navbars from './Navbars.jsx';
import { Grid } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";






const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navButton:{
    color:"#000000"
  },
  title: {
    flexGrow: 1,
  },
  appBar:{
    backgroundColor: "#ffff",
  },
  photo:{
    marginTop:"60px",
    width: "100%",
    height: "100%"
    
  },
  photoContainer:{
    
  },
  aboutContainer:{
    width: "100%",
    height: '600px',
    backgroundColor: "#003D57",
    display: "flex",
  },
  aboutus:{
    marginLeft:"20px",
    marginTop:"30px",
    marginRight:"20px",
    flex: 1
    

  },
  head1:{
    color:"#8DD7F7"
  },
  compareHead:{
    color:"#8DD7F7",
    fontSize:"60px",
    textAlign:"center",
    paddingTop:"60px"
    
  },
  teamHead:{
    fontSize:"40px",
    textAlign:"center",
    paddingTop:"30px"
  },
  head2:{
    color:"#FFFFFF"
  },
  aboutimg:{
    backgroundImage: `url(${hospital})`,
    //width: "3000px",
    flex: 1
  },
  footer:{
    width: "100%",
    height:"100%",
    backgroundColor: "#1C1B17",
    //display:"flex",
    

  },
  navLogo:{
    width:"20%",
    height:"80px"
  },
  footerLogo:{
    marginTop:"20px",
    marginLeft:"20px",
    width:"300px",
    height:"100px"
  },
  footerDetails:{
    listStyleType: "none", 
   paddingLeft:"25px",
   
  },
  footerHalf1:{
    //flex:1,
    fontSize: "18px",
    marginLeft:"10px"
    
  },
  footerHalf2:{
    //flex:1,
    fontSize: "18px",
    marginTop:"55px",
    marginLeft:"2%",
    
  },
  productContainer:{
    marginTop:"15px",
      width:"90%",
      height:"90%",
      
  },
  productImg:{
    width:"100%",
    height:"100%"
  },
  productDesc:{
    
    textAlign:"center",
    marginLeft:"10%",
    fontSize: "55px",
    fontWeight:"bold"
    
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    width:"100%",
    
  },
  footergridContainer: {
    // paddingLeft: "40px",
    // paddingRight: "40px",
     width:"100%"
  },
  prodCompContainer:{
    backgroundColor: "#003D57",
    width:"100%",
    height:"100%",
  },
  prodCompImg:{
    width:"50%",
    height:"50%",
    marginLeft:"25%",
    marginTop:"20px",
    marginBottom:"40px"

  },
  teamContainer:{
      //marginTop:"10px",
      marginBottom:"30px",
      marginLeft:"5%"
  },
  socialMedia:{
    marginTop:"70px",
    marginLeft:"7%",
  }


  
}));







export default function ButtonAppBar() {
  const classes = useStyles();

  

  return (
    <div className="font-link">
      <div className={classes.root}>
      {/* <AppBar position="static" className = {classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
          <Typography variant="h6" className={classes.title}>
          <img src={hridhamW} className = {classes.navLogo}></img>
          </Typography>
          <Button color="inherit" className={classes.navButton}>About</Button>
          <Button color="inherit" className={classes.navButton}>Team</Button>
          <Button color="inherit" className={classes.navButton}>Product</Button>
          <Button color="inherit" className={classes.navButton}>Vision</Button>
        </Toolbar>
      </AppBar> */}
      <Navbars img={hridhamW}/>
      <Box className={classes.photoContainer}> 
        <img src={logos} alt='' className={classes.photo}/>
      </Box>
      <Box id='about' className = {classes.aboutContainer}>
        <Box className={classes.aboutus}>
            <h2  className={classes.head1}>About Us</h2 >
            <p className={classes.head2}>Hridam surgicals is the product born from the teamwork of four aspiring 
engineers who have a common goal of serving the society with their 
innovations. We are currently underway to developing the "World's cheapest" 
and "Made in India" Digital stethoscope that would enable the healthcare 
fraternity towards performing timely diagnosis. 
We wish to explore and innovate many such medical devices in the future 
which would ultimately facilitate the common man to exercise their human 
fundamental right of "Healthcare for all"</p>
        </Box>
        <Box className={classes.aboutimg}>
            
        </Box>
      </Box>
      <Box id='product' className={classes.productContainer}>
        <Box >
        <Box className={classes.productDesc}>
          <p>Change the way of using your stethoscope</p>
        </Box>
        <img src={product} className={classes.productImg}></img>
        </Box>
        {/* <Box className={classes.productDesc}>
          <p>It can record, store and play the recorded heart sounds.</p>
        </Box> */}
        
        {/* <Box
        className={classes.gridContainer}
  sx={{
    display: 'grid',
    columnGap: 20,
    rowGap: 20,
    gridTemplateColumns: 'repeat(2, 1fr)',
  }}
>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
</Box> */}
        
      </Box>

      

      <Box className = {classes.teamContainer}>
    <Grid
      container
      spacing={6}
      className={classes.gridContainer}
      justify="center"
    >
      <Tooltip title="The app generates a phonocardiogram based on the recorded heart sounds for every file" arrow placement="right-start">
      <Grid item xs={12} sm={6} md={3}>
        <ACard imgs={heart} attr={"Phonocardiogram"}/>
      </Grid>
      </Tooltip>

      <Tooltip title="Fast Charging in 1 Hr 30 mins & Standby Battery Life of 18 Hrs in a Single Charge" arrow placement="right-start">
      <Grid item xs={12} sm={6} md={3}>
        <ACard imgs={battery} attr={"Long Battery Life"}/>
      </Grid>
      </Tooltip>

      <Tooltip title="This enables to auscultate from a safe distance Any headphones/Air Pods having Bluetooth technology can be connected with the device" arrow placement="left-start">
      <Grid item xs={12} sm={6} md={3}>
        <ACard imgs={earphone} attr={"Bluetooth Auscultation"}/>
      </Grid>
      </Tooltip>
      
      {/* <Grid item xs={12} sm={6} md={4}>
        <Card name = {"arun"} desc = {""}/>
      </Grid> */}
    </Grid>
    <Grid
      container
      spacing={6}
      className={classes.gridContainer}
      justify="center"
    >

    <Tooltip title="It has a Denoise feature which cancels out all the unwanted noise in the recorded audio, therefore providing a clean sound of the heartbeats" arrow placement="left-start">
    <Grid item xs={12} sm={6} md={3}>
        <ACard imgs={anc} attr={"Denoise feature"}/>
      </Grid>
      </Tooltip>

      <Tooltip title="It provides a guided recording of cardiac sounds from 4 locations and lungs sounds from 6 locations" arrow placement="left-start">
      <Grid item xs={12} sm={6} md={3}>
        <ACard imgs={body} attr={"Body Chart"}/>
      </Grid>
      </Tooltip>

      <Tooltip title="Record sounds with the app and share them with other doctors via Whatsapp/Email etc. for review" arrow placement="left-start">
      <Grid item xs={12} sm={6} md={3}>
        <ACard imgs={rec} attr={"Record and Share Sounds"}/>
      </Grid>
      </Tooltip>

      
      
      
      {/* <Grid item xs={12} sm={6} md={4}>
        <Card name = {"arun"} desc = {""}/>
      </Grid> */}
    </Grid>
    

    </Box>

    <Box id='product' className={classes.productContainer}>
        <Box >
        <img src={phone} style={{"width":"100%", "height":"100%", "marginLeft":"5%", "marginTop":"40px"}}></img>
        </Box>
        <Box className={classes.productDesc}>
          <p style={{"fontSize":"50px"}}>Seamless integration with the app</p>
        </Box>
        
        
      </Box>


      <Box className={classes.prodCompContainer}>

      <h1 className={classes.compareHead}>Why Moscope stands tall?</h1>
      <img src={prodComps} className={classes.prodCompImg}></img>

    </Box>

    <Box id='team' className = {classes.teamContainer}>

    <h1 className={classes.teamHead}>Meet the team</h1>

    <Grid
    style={{"marginBottom":"90px",}}
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card name = {"Mohmad Ahmed"} desc = {"an electronic engineering graduate has an avid zeal in designing and developing circuits, and is currently working at Capgemini as a Senior analyst. He is the mastermind of this enterprise and is handling the Product Development and Server related configurations at Hridam Surgicals"} links = {"https://www.linkedin.com/in/mohd-ahmed78581099"}/>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Card name = {"Rahil Dhami"} desc = {"an engineer with a degree in production engineering is currently the Executive Director at Rajkamal Barscans Pvt. Ltd. He have previously worked on different projects and even handled the powertrain department of a formula Student racing team. He has been looking after the Product Design and Legal certifications at Hridam Surgicals"} links = {"https://www.linkedin.com/in/rahil-dhami-5ba127121/"}/>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Card name = {"Heron Vas"} desc = {"an engineering student in Information Technology has a significant liking and experience in Mobile Application Development. He is currently responsible for Designing, Developing and Maintaining an self-made mobile application for products at Hridam Surgicals"} links={"https://www.linkedin.com/in/heron-vas-0769681a9/"}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card name = {"Kedar Kishor Vaze"} desc = {"a graduate in Production Engineering has a keen interest in the field of Sales & Marketing, Brand Development and Supply Chain Management. He has been the Chief Financial Officer and Marketing head at a Formula Student racing team which competes on a national level. With 8 months of work experience in the field of Operations n Logistics in a FMCG company, he has also executed multiple project based solutions for Medium and Small Scale enterprises. Currently, Kedar is handling the Sales, Marketing and Brand development for Hridam Surgicals."} links = {"https://www.linkedin.com/in/kedar-vaze-672927143/"}/>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={4}>
        <Card name = {"arun"} desc = {""}/>
      </Grid> */}
    </Grid>


    </Box>

      


      <Box className={classes.footer}>

      <Grid
      
      container
      spacing={8}
      className={classes.footergridContainer}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={7}>
      <Box className={classes.footerHalf1}>
          <img src={hridham} className = {classes.footerLogo}></img>
          <Box className={classes.footerHalf1}><ul className={classes.footerDetails}>
                            {/* <li style={{"color": "#FFFFFF"}}>
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <span>&nbsp;&nbsp;P.O. Box 2418, Sebastopol, CA 95473</span>
                            </li> */}
                            <li style={{"color": "#FFFFFF", "paddingTop":"15px"}}>
                                <i class="fa fa-phone-square" aria-hidden="true"></i>
                                <a href="tel:+917045867822" style={{"textDecoration": "none", "color":"#FFFFFF"}}>&nbsp;&nbsp;+91 70458 67822</a>
                            </li>
                            <li style={{"color": "#FFFFFF", "paddingTop":"15px"}}>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <a href="mailto:info@hridamsurgicals.com" style={{"textDecoration": "none", "color":"#FFFFFF"}}>&nbsp;&nbsp;info@hridamsurgicals.com</a>
                            </li>
                        </ul></Box>
                </Box>
                <Box className={classes.socialMedia}>
                    <span><a href="https://www.facebook.com" style={{"textDecoration": "none", "color":"#FFFFFF", }}><i style={{"fontSize":"50px"}} class="fa fa-facebook-square"></i></a></span>
                    <span><a href="https://www.instagram.com" style={{"textDecoration": "none", "color":"#FFFFFF", "marginLeft":"30px"}}><i style={{"fontSize":"50px"}} class="fa fa-instagram"></i></a></span>
                    
                </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Box className={classes.footerHalf2}>

                <ul className={classes.footerDetails}>
                            
                            <li style={{"color": "#FFFFFF", "paddingTop":"7px"}}>
                                
                                <a href="http://3.15.1.15:5000/tandc" style={{"textDecoration": "none", "color":"#FFFFFF"}}>&nbsp;&nbsp;Terms & Condition</a>
                            </li>
                            <li style={{"color": "#FFFFFF", "paddingTop":"30px"}}>
                                
                                <a href="http://3.15.1.15:5000/usermanual" style={{"textDecoration": "none", "color":"#FFFFFF"}}>&nbsp;&nbsp;User Manual</a>
                            </li>
                        </ul>


                </Box>
      </Grid>
      
    </Grid>

        
                {/* <Box className={classes.footerHalf2}>

                <ul className={classes.footerDetails}>
                            
                            <li style={{"color": "#FFFFFF", "paddingTop":"7px"}}>
                                
                                <a href="tel:18663399283" style={{"textDecoration": "none", "color":"#FFFFFF"}}>&nbsp;&nbsp;Terms & Condition</a>
                            </li>
                            <li style={{"color": "#FFFFFF", "paddingTop":"30px"}}>
                                
                                <a href="mailto:sales@thinkwave.com" style={{"textDecoration": "none", "color":"#FFFFFF"}}>&nbsp;&nbsp;User Manual</a>
                            </li>
                        </ul>


                </Box> */}

      </Box>
      
      
    </div>
    </div>
  );
}
