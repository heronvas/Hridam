import {React, useRef} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import logos from './mopic1.png';
import logos1 from './mopic2.png';
//hospital
import hospital from './stethos1.jpg';
import hridham from './hridamblack.png';
import hridhamW from './navicon.jpg';
import product from './product.png';
import prodComps from './prodComp.jpg';
import benifit from './benifit.jpg';
import phone from './phones.png';
import visions from './visionsss.jpg';
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
import Contact from './Contact.jsx';
import tandc from './tandc.pdf';
import usermanual from './usermanual.pdf';
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
    marginTop:"110px",
    paddingLeft:"10%",
    //paddingRight:"60px",
    width: "80%",
    height: "100%",
    
  },
  photoContainer:{
    
  },
  aboutContainer:{
    width: "100%",
    height: '100%',
    backgroundColor: "#003D57",
    display: "flex",
  },
  aboutus:{
    marginLeft:"5%",
    marginTop:"30px",
    //marginRight:"120%",
    flex: 1
    

  },
  head1:{
    color:"#8DD7F7"
  },
  compareHead:{
    color:"#8DD7F7",
    fontSize:"38px",
    textAlign:"center",
    paddingTop:"60px"
    
  },
  
  head2:{
    color:"#FFFFFF",
    marginBottom:"50px"
    
    
  },
  aboutimg:{
    //backgroundImage: `url(${hospital})`,
    //width: "3000px",
    //backgroundRepeat:"no-repeat",
    //height:"100%",
    flex: 1,
    
  },
  
  footer:{
    width: "100%",
    height:"100%",
    backgroundColor: "#1C1B17",
    paddingBottom:"10%"
    //display:"flex",
    

  },
  navLogo:{
    width:"20%",
    height:"80px"
  },
  footerLogo:{
    marginTop:"20px",
    marginLeft:"20px",
    width:"85%",
    height:"140px",
    //objectFit:"cover"
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
    height:"100%",
    marginLeft:"5%",
    objectFit:"cover",
    marginBottom:"0px"
  },
  productImg1:{   //about
    width:"71%",
    height:"100%",
    marginLeft:"29%",
    objectFit:"cover",
    
  },
  productDesc:{
    
    textAlign:"center",
    marginLeft:"10%",
    fontSize: "35px",
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
    width:"70%",
    height:"100%",
    marginLeft:"15%",
    marginTop:"20px",
    marginBottom:"40px"

  },
  teamContainer:{
      //marginTop:"10px",
      marginLeft:"40px",
      marginBottom:"30px",
      
  },
  teamHead:{
    fontSize:"30px",
    textAlign:"center",
    paddingTop:"30px",

  //   backgroundColor: "rgb(0,0,0)", 
  // backgroundColor: "rgba(0,0,0, 0.4)", 
  // color: "white",
  // fontWeight: "bold",
  // border: "3px solid #f1f1f1",
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // zIndex: "2",
  // width: "80%",
  // padding: "20px",
  // textAlign: "center",
  // },
  // socialMedia:{
  //   marginTop:"70px",
  //   marginLeft:"7%",
  },
  visionContainer:{
    marginTop:"40px",
    marginBottom:"60px",
    background: `url(${visions}) no-repeat center fixed`,
      backgroundSize: "cover",
      filter:"blur(0px)",
      //WebkitFilter:"blur(3px)",
      boxSizing:"border-box",
      //backgroundRepeat:"no-repeat",
      width:"100%",
      height:"300px"
      //marginLeft:"5%"
  },
  visionHead:{
    backgroundColor: "rgb(0,0,0)", 
    backgroundColor: "rgba(0,0,0, 0.4)", 
    color: "white",
    fontWeight: "bold",
    border: "3px solid #f1f1f1",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2",
    width: "80%",
    padding: "20px",
    textAlign: "center",
    },
    socialMedia:{
      marginTop:"60px",
      paddingLeft:"40px",
  },
  benifitsContainer:{
    width: "100%",
    height: '100%',
    backgroundColor: "#003D57",
    display: "flex",
    marginTop:"80px"
  },
  benifitsus:{
    width:"50%",
    height: '100%',
    marginLeft:"0",
    marginTop:"6%",
    marginRight:"20px",
    
    
    flex: 1
    

  },
  benifitsimg:{
    //backgroundImage: `url(${hospital})`,
    //width: "3000px",
    //backgroundRepeat:"no-repeat",
    //height:"100%",
    flex: 1
  },
  stethoImg:{
    width:"91%",
    height:"100%",
    //marginLeft:"9%"
    
  },
  benifitHead:{
    color:"#FFFFFF",
    listStyleType:"none",
    marginTop:"0px",
    //marginBottom:"20px",
    fontSize:"18px"
  },
  tutorial:{
    marginTop:"100px",
    paddingLeft:"5%"
    
  },
  tutVideo:{
    borderRadius:"10px",
    display: "block"

  },
  tutContainer:{
    width:"100%"
  }


  
}));







export default function ButtonAppBar() {
  const classes = useStyles();
  const myRef = useRef(null);
  const productss = useRef(null);
  const visionss = useRef(null);
  const contactss = useRef(null);


  
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
      <Navbars img={hridhamW} about={myRef} product={productss} vision = {visionss} contactUs={contactss}/>
      <Box className={classes.photoContainer}> 
        <img src={logos} alt='' className={classes.photo}/>
        <Box style={{
          paddingLeft:"10%",
          fontSize:"30px",
          width: "80%",
          textAlign:"center"
        }}>
          <p>A digital stethoscope that can record share denoise and wirelesly auscultate the patient</p>
        </Box>
        <img src={logos1} alt='' style={{
          marginTop:"60px",
          paddingLeft:"10%",
          //paddingRight:"60px",
          width: "80%",
          height: "100%",
        }}/>
      </Box>
      {/* <Box ref={myRef} className = {classes.aboutContainer}>
      <Box className={classes.aboutimg}>
        <img src={hospital} className="benContainer"></img>
        </Box>
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
        
      </Box> */}

<Box ref={visionss} className = {classes.visionContainer}>

<Box className={classes.visionHead}>
<h1 >Vision</h1>

<p>To become the most respected medical enterprise which delivers high 
quality and novel "Made in India" products at fair prices to the consumer 
and thereby creating value for all stakeholders.</p>
</Box>
</Box>
      <Box ref={productss} className={classes.productContainer}>
        <Box >
        <Box className={classes.productDesc}>
          <p>Change the way of using your stethoscope</p>
        </Box>
        <img src={product} className={classes.productImg}></img>
        </Box>
        {/* <Box className={classes.productDesc}>
          <p>Recording can be done even if the battery is completely discharged</p>
        </Box> */}
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

      
      <Box style={{
        textAlign:"center",
        marginLeft:"5%",
        fontSize: "35px",
        fontWeight:"bold",
        marginBottom:"100px"
      }}>
          <p>Most affordable stethoscopes compared to what's out there</p>
        </Box>
      <Box className = {classes.teamContainer}>
    <Grid
      container
      spacing={6}
      className={classes.gridContainer}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={3}>
        <ACard imgs={heart} 
        attr={"Phonocardiogram"}
        tmsg={"The app generates a phonocardiogram based on the recorded heart sounds for every file"}/>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <ACard imgs={battery} 
        attr={"Long Battery Life"}
        tmsg={"Fast Charging in 1 Hr 30 mins & Standby Battery Life of 10 Hrs in a Single Charge"}/>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <ACard imgs={earphone} 
        attr={"Bluetooth Auscultation"}
        tmsg={"This enables to auscultate from a safe distance Any headphones/Air Pods having Bluetooth technology can be connected with the device"}/>
      </Grid>
      
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

    <Grid item xs={12} sm={6} md={3}>
        <ACard imgs={anc} 
        attr={"Denoise feature"}
        tmsg={"It has a Denoise feature which cancels out all the unwanted noise in the recorded audio, therefore providing a clean sound of the heartbeats"}/>
      </Grid>
    
      <Grid item xs={12} sm={6} md={3}>
        <ACard imgs={body} 
        attr={"Body Chart"}
        tmsg={"It provides a guided recording of cardiac sounds from 4 locations and lungs sounds from 6 locations"}/>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <ACard imgs={rec} 
        attr={"Record and Share Sounds"}
        tmsg={"Record sounds with the app and share them with other doctors via Whatsapp/Email etc. for review"}/>
      </Grid>
      
      
      
      
      {/* <Grid item xs={12} sm={6} md={4}>
        <Card name = {"arun"} desc = {""}/>
      </Grid> */}
    </Grid>
    

    </Box>

    <Box  className = {classes.benifitsContainer}>
    <Box style={{height:"740px"}} className={classes.benifitsimg}>
        <img src={benifit} style={{height:"750px"}} className="stethimg"></img>
        </Box>
        <Box className={classes.benifitsus}>
            <ul className={classes.benifitHead}>
              <li>Recording can be done even if the battery in the device is completely discharged</li>
              <li style={{"paddingTop":"10%"}}>Comfortable moving the chestpiece as there is no stethoscope tubing present</li>
              <li style={{"paddingTop":"10%"}}>Sounds can be heard comfortably with any preferred Bluetooth Device</li>
              <li style={{"paddingTop":"10%"}}>Guided recording of cardiac sounds from 4 locations and lung sounds from 6 locations</li>
              <li style={{"paddingTop":"10%"}}>Automatically pairs with bluetooth headset saving all the hassle to connect with the device</li>
            </ul>
        </Box>
        
      </Box>


    <Box  className={classes.productContainer}>
        <Box className={classes.productDesc}>
          <p style={{"fontSize":"35px", "marginTop":"70px"}}>Seamless integration with the app</p>
        </Box>
        <Box >
        <img src={phone} style={{"width":"30%", "height":"30%", "marginLeft":"40%", "marginTop":"0px"}}></img>
        </Box>
        
      </Box>


      <Box className={classes.prodCompContainer}>

      <h1 className={classes.compareHead}>Why MoScope is better?</h1>
      <img src={prodComps} className={classes.prodCompImg}></img>

    </Box>

    <Box ref={myRef} className = {classes.tutorial}>

    <Grid
      container
      spacing={0}
      className={classes.tutContainer}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={8}>
        <iframe type="text/html" className={classes.tutVideo} width="94%" height="315"
        src="https://www.youtube.com/embed/WJGI361CdOM" frameBorder="0" allowFullScreen>
        </iframe>
        
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Box>
        <p style={{
          "fontSize":"40px",
          "fontWeight":"bold",
          "textAlign":"center"
        }}>How it works?</p>
        <p style={{
          "fontSize":"25px",
          paddingRight:"30px",
          "textAlign":"center"
          
        }}>Learn how to use the device by watching this video</p>
        </Box>
      </Grid>
      
      
    </Grid>
    
    </Box>

    
    {/* <Grid
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
      
    </Grid> */}


    

      <Box ref={contactss} style={{"paddingLeft":"15%", "paddingRight":"15%", "marginTop":"100px"}}>
        <Contact/>
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
                    <span><a href="https://www.facebook.com" style={{"textDecoration": "none", "color":"#FFFFFF", }}><i style={{"fontSize":"50px"}} className="fa fa-facebook-square"></i></a></span>
                    <span><a href="https://www.instagram.com" style={{"textDecoration": "none", "color":"#FFFFFF", "marginLeft":"40px"}}><i style={{"fontSize":"50px"}} className="fa fa-instagram"></i></a></span>
                    
                </Box>
                
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Box className={classes.footerHalf2}>

                <ul className={classes.footerDetails}>
                            
                            <li style={{"color": "#FFFFFF", "paddingTop":"7px"}}>
                                
                                <a href={tandc} style={{"textDecoration": "none", "color":"#FFFFFF"}}>&nbsp;&nbsp;Terms & Condition</a>
                            </li>
                            <li style={{"color": "#FFFFFF", "paddingTop":"30px"}}>
                                
                                <a href={usermanual} style={{"textDecoration": "none", "color":"#FFFFFF"}}>&nbsp;&nbsp;User Manual</a>
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
