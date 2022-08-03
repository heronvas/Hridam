import {React, useRef, useEffect, useState} from 'react';
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
import features from './features.jpg';
import labels from './labels.jpg';
import mainimg from './mainsimg.jpg';
import hridham from './hridamblack.png';
import hridhamW from './navicon.jpg';
import product from './wayscope.png';
import prodComps from './prodComp.jpg';
import benifit from './benifit.jpg';
import Moscopes from './benifit3.jpg';
import phone from './phones.png';
import iso from './iso.svg';
import visions from './visionsss.jpg';
import records from './recordAudio.jpg';
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
import PCard from './productCard.jsx';
import Navbars from './Navbars.jsx';
import Contact from './Contact.jsx';
import tandc from './tandc.pdf';
import usermanual from './usermanual.pdf';
import { Grid } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import { browserName, browserVersion } from "react-device-detect";
import Button from "@material-ui/core/Button";
import { useAuth } from "./firebase";
import Login from './Login.jsx';
import { getDatabase, ref, set , child, get } from "firebase/database";
import emailjs from '@emailjs/browser';
import recordstetho from "./product1.jpg"
import { CSSTransition } from 'react-transition-group'
import LottieWrapper from './success.jsx'
import { jsPDF } from "jspdf";








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
    marginLeft:"10%",
    //paddingRight:"60px",
    width: "80%",
    height: "100%",
    
  },
  isoimg:{
    marginTop:"0px",
    marginLeft:"5%",
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
    marginLeft:"0px",
    width:"85%",
    height:"20%",
    //objectFit:"cover"
  },
  footerDetails:{
    listStyleType: "none", 
   paddingLeft:"4%",
   
  },
  footerHalf1:{
    //flex:1,
    fontSize: "18px",
    marginLeft:"2%",
    
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
    width:"80%",
    height:"80%",
    marginLeft:"12%",
    objectFit:"cover",
    marginBottom:"70px",
    marginTop:"0px"
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
    marginTop:"20px",
    marginBottom:"60px",
    background: `url(${visions}) no-repeat center fixed`,
      backgroundSize: "cover",
      //filter:"blur(0px)",
      // WebkitFilter:"blur(0px)",
      // boxSizing:"border-box",
      // //backgroundRepeat:"no-repeat",
      // width:"100%",
      // height:"300px"
      //marginLeft:"5%"
  },
  visionHead:{
    //backgroundColor: "rgb(0,0,0)", 
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
      marginLeft:"7%",
  },
  benifitsContainer:{
    width: "100%",
    height: '90%',
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
    marginBottom:"20px",
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
  },
  recordImg:{
    width:"45%",
    height:"45%",
    marginLeft:"25%"
  },
  buyers:{
    marginTop:"80px",
    marginBottom:"10%"
  },
  productsContainer:{
    paddingLeft: "60px",
    paddingRight: "40px",
    width:"100%",
    marginTop:"60px"
  }


  
}));







export default function ButtonAppBar() {
  const classes = useStyles();
  const myRef = useRef(null);
  const productss = useRef(null);
  const visionss = useRef(null);
  const contactss = useRef(null);
  const buy = useRef(null);
  const [open, setOpen] = useState(true);
  const [openPop, setOpenPop] = useState(false);
  const currentUser = useAuth();
  const [image, setImage] = useState("");
  const [sucess, setSucess] = useState(false);
  const [amt, setAmt] = useState("");
  const [pnames, setPnames] = useState("")
  const [ordid, setOrdId] = useState("")
  const [qtys, setQtys] = useState("")


  var prev = 0

  const doc = new jsPDF();
  
  
  let [num, setNum]= useState(1);

  let incNum =()=>{
    
    setNum(Number(num)+1);
    
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
  


  useEffect(() => {
    console.log(`hello there ${browserName} ${browserVersion}`);

    if(browserName == "Edge" && browserVersion >= 14){
        console.log("entered");
        setOpen(true);
    }
    else if(browserName == "Chrome" && browserVersion >= 49){
      console.log("entered");
      setOpen(true);
    }
  else if(browserName == "Safari" && browserVersion >= 10){
    console.log("entered");
    setOpen(true);
    }
    else if(browserName == "IE" && browserVersion >= 9){
      console.log("entered");
      setOpen(true);
      }
      else if(browserName == "Firefox" && browserVersion >= 50){
        console.log("entered");
        setOpen(true);
        }
        else if(browserName == "Opera" && browserVersion >= 50){
          console.log("entered");
          setOpen(true);
          }
          else{
            setOpen(false);
          }


          setInterval(() => {
            //console.log("ring");
            let images = [records, benifit, recordstetho, Moscopes]
            //let random = Math.floor(Math.random() * images.length)
            if(prev == 4){
              prev = 0;
            }

            console.log(images[prev])
            setImage(images[prev])
            prev++;
          }, 2000);
        

  }, []);

  var names = currentUser?.uid

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount, pname, numm) => {

    
    var userss = "";
    console.log("snam "+names); 
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `${names}/`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val().username);
        userss = snapshot.val().username;
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    console.log("snam "+names);
    
    if(currentUser?.email){
      
      setOpenPop(false);
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
  
      if (!res) {
        alert("You are offline... Failed to load Razorpay SDK");
        return;
      }
  
      const options = {
        key: "rzp_test_R7hs1W37TYCUPi",
        currency: "INR",
        amount: amount * 100,
        name: userss,
        description: "Thanks for purchasing",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAACBCAMAAAAYG1bYAAABI1BMVEX///+XmZjiMSGUlpUAAACYmpmXmZbh4eGYmJjV1dWOkI+Rk5KXl5X///2Nj477+/ugn52/wMDPz8/09PTfGwDo6Ojb29vTDgDfw7/x6+rHyMejo6P19fWwsLC5ubl9fX1iYmLeop5ycnLkLRuqqqovLy9eXl5ubm6EhoW2AADPHAA/Pz9PT09xcXEkJCSvNCqxPTOfIhioAAC7d3DOn50QEBBERESpT0krKyueAACyQzrHkIvcy8m/U0vOdWzVf3nZlpDVT0XiAwDUsa7t3tqzLB/Cf3uqlZSiPjizZF2gLSOiR0CwTEOgOS/UrKnBioZrWlesWVOTEwDGY1/t1dLEKyOzb2jNm5qlWVXNu7mxHRCiJhzBQjyROTKug36/npq/MCg6k1nZAAANK0lEQVR4nO2bC3ubVhKGRysECAQICFQSCDmOLOHa8TaxE9e2knYrRfElkdeu63ST7nb//6/YmQPorobus3XU1bx5IsHhcNF8nLkcMADDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzzh2J86QvYaIy5b+ZB8MqEM17vnb5CTutQnuAr7kSVpMmD6c2etXBcP9nmzjRai42hI86/eICNwolNJB5bufboCfJVHeJKRc/QTDPIhCpp2GA2oKBNMGMtaMwaMk422DONnjgZ7rxwfu+P+n1/DhxT1yuVaRX+gqAKZqkyRlUrsq4rokO1iOgNKBVn0WaMW9ZEo67PnMwXrXppqikQMpvlP/I3rj+OSWY2V6lQKqUyyAU19qlDUCwUCkKFwpwOZjA5bFtP22ZcUiPRJg7HLVZcFINtdsxsHI4pkwrj9SkVCOGVUAW0vCybZL1MhSp9zwoxucktM2uaMW8z0UZvTJ1eNGjNB/ipa8zqsVCtVksVR1GUst3WcDSoajHCDoEw/lgF8v66ntk8Gw2pQ0IK0ycL5rplY0afcVIbSKrCeH2sgoYqVCtp1PT0SkFWC+Tlq5kK4jtyXRdlkk2ZVgtaepc3xR1PUszE3TjzXVkkF2MGhdBN2GgcLY8KYFfIP+no5avytAqZw/F1MTQKiX0tkxQBfdb7UBAoFmk8aFkw9kmFAPvFsyntprFShcqMCooul0qqjquBjEsLKkCoCxUSo/sabmrjiMC4UZ2cS9EoUNAIycIABQotwg9zs1NVoYJqGllgGKugz6jg6SW5JJMKVRQhUaE0rQJ4ppBFxAE0P+nhoDLTWVIZB4zuU3KVqa6JgYGf2qRu3ERIBbWkjddTFdxEhUKmgoMeSZWFRyosV0GYHl0SGV1PFlxzPDoEDaFChP20pPZQ0CHpEVURG56qOpSHDl8/zvjuCanw5PvHrwXfP348oG5Vkbdq2VKiQmlGBV/4JN1PHFKhiE142xeKk4SIdDIV4a4i0UC+SPM90qL9kD967SAVqn97NEaIgDKIiYwnTx49+qEPoV+tkPFVkalOPBJ+T6ngakIFJ7G2sLNdzEaHgEoNDN9ihIgGckgmDpn5jHbjSFRIbb+MJ/fFCkVqtLmwJ0ZneakKEJeS7AlIDp3SIF+XE10SzCSJapMY5OoolNBQIRXih/7ha8XnVTisCtAfifwyKK0YC5CE5wjzKfyOLYMyVpRs7JJE/lqCJGjTjnZRlkkjfWGqY9PIq0KpUkyS/NUqxKkKFH4LaPrDOvoglCEzMI4MWcb2MJblAiWwxWKykSYITeXBf/oakVOFSjWbuf4NFVKPpCVfxm4fGqRC5pIcUoEqhWoiDTokWSY1qNLWGrDBpCp8nZHq8fXX2fdXpEJlMvO8UgVPROeiIxwSVhaDN0Nsk5P7n4gq6J5oB6FNAxPXNI+1aQ4jetCfvWagCqXK27duRj+pFwbu21/fIn74VjikyvgZzkoVnCRT9ZLECGA0OsdYQSqYyUx2k4IEWd0zhTTjKO3oMzN8G4ioF+SFqi2dwcCqzRXlW2lsJKFCYYkKpWQiKXFI6Hgu6sd1dDYYA1KXVCLvJJ5RkGvSKI7IMq3SzEZx9nnQhkEqVBZr56l5JCdZyuy9SgVHOKRC4OlpvnoJZzUoo8ELhaQk09HomkcvFtBw0Wns6Dat4tjY8FSVVCitHAtiHqldosXkLiYV5GUeSTGT2TxfOCRdgfoN9K7BMEkFMdPq0iLNa4Qil5UDWVU1BYxQlG2VjZ7PEyr85lgASyyKaW2YnlOdmsEIbVM8jSuoUCyQuwmhfwYhBoY2BQZRwilUwmG8GH5IXBKKoKIb6r0DQ8fCUPMf/sevDTlUQPuJyaMkNAQzc6pN3/cdOzDFTB7GYUVEXhlrs2EP4DxM0tMiuaQGLRUAXv1CuakqHt5h+BjuJmXbilRVEeLMvxzgTVUXS8o9d674CBV/vV+1ESpUlqgwPbMd0TOeJMucUkEkpvRcupg84SkUNCrZyOpo3UvDICVck8xNT1Sjoirq6Kt3dSzgqJVitXF5bmC2tDJVfSkmwV/OtZanzNxa3Kk5p6htd3+vXR4WR1flpdF55vlCMqUqQkNQmFZhBnqGLxRBD2S9x7hbO8MGsje5pIB8UIRuajQCSyMRZM2C2vXhgB72VJanquVqC8J9VTfBsds7TcvstCHe8wLX7FQh7qJE5gtru+OaYIZNr7Xney29ub9taft45SpsgepudSFQtpXqXtnqdsHvxKDur1uhjirgYFjyrG1GBU+jmFzS3JUq4ACI7bQUoBjcG6IK9XPKh0gGdEn0AgEOp8EFxm1oq1jCVbD1fnDWw7KtUikuffTcwX9boEct6LpN2Pb2oWU33WYXF7aiyN3H45fVstVqgeR3fR86TdWLQXK3AYvylie5rVboN7e9OGh7Oi3GVtNDbR7EtvnJpwI0xHNn8vfkkQpzKsjomcwq9bVFGMBuZ33a7dIAXzxSjQ2LXjPAyqH2AZ5Z5AjF1IZ1CaMjetS0PFX1pNaBtYX3clxWvW6rEzWs7W1s325E0N0GC72R6XYAutW2pkaNp1tBDFUFulBEfaCjx6q/97Rrd8t2bDn2zna34R5EEOytW5Sgd/N0fWKB2g/0lIHehCHjaeP0MRCvrKDjL4l36WwoaOnbk5ppxsXATnqKF2PovUis2JDDO7BinV6VLLv0zqTpw1Gf6ggXW/U4RIdE+awf01uW024ifQDbcfGG7sAeBFto8XJJ8/z2Frp90/T86rYVNGm07EMjau74B7gQOC1QFTwcRLjJjJtdHEmB22r6HdBx/AR+AJ3Aaqxboe4qnqcoEwPUewILsBG3jG8aSxENPlBvRXFByfDcqVft/HQr3Ir1/hFA1kt8heiC0CmlrVhg49rr5ODK5DCD6/Ti8F5vK+rTFjRUcLbiSAXbV7bisqNCo+zub5XPembT6bbAaXsmBK2uEoPb2baVrS5eeduxMV3Yb3tt1dWHf8fFAFrb6JG6azeN7qJ7hSbeyU3PjiIbb8Jy5KBrQRPZEV0tbbP9cdd8kKHp6ya7q9O3vg3ADAlus3cN0CEZxvnC3rXTPK/ud9FX/TjKeUHwy13enl8AX0IiqQGWVD6QXkg7UJUOpBYcBPAtbvGgjCuwY2Zdc05Aj1Lr3GJtjIWDYdzS42syLeVOh720G5Z2AM8WLD7azaOC/9SHb87yXY+YZ19fnm7hne5KjlDBxs+GFEFDCveakWTBfgfiFxLAHj3Lb1HXnIe9F+8MGHAzgP5zrBxqu0e0Wjfq77C9NoTxZoB34fzeZ7t5L/+n73J2NHYf5z3mF8CUqg6EqQoR3vkNSUE/DTvNAEslywUcKHaigi4Fud8aeiY+DTgawfEx3vn3tWNqeNMf3GOrcZn0Ci/pnr8YzO6L1d5uPd9prDc3OS+ovjvM2fOLoKPjURIV9tDjtCzJ60i4LFTAm1+CeD9RQXTNNedm1I/TpcFh/eYOS4dbOEfD1j9eYKKK3CSGR4eEKmDKNMfNcW++aTn1m/e5+hnQu/k53yG/GN8WUQUsew4i60UJJCVUJAVV2MM8NupSMAhfFtOuO0X08Yb4TxhpTkkfxgRRNCe8/9CHT5SQUgFRO/r5okad+0KLVAwsGMROQP979HF1VlOmj7cIHuQfuOvd8NyoQ7KvMTlIRtLTIElrR8f1cHLd4+7rwU7s25J90PFjyXqBeZ0USl3FlNAj+VLTkWKp6StSe79VLvt7sd+Qmrn+8HA4vpdvPlrocu7vRNZ0eFfbFYavi7woTG7ku+vJjoOTGtzU3/evbz93iusTo3dfG/08vP5cz4uPOOiO+uffLeZT6yKDvSNJJih7EoZmjAvwransSAcN2GtDU5LiJoZmKL7ceoEjoooei8q7wcmnT5/+usA3E05PxgH3wwUFY/L/lxZmTNYt5boGXJHjHyUjYnAyOcizwfnZ7t1xb/d0dEqHnD3sFN/cj85OT0f91z+9P6LrWWB8yDfXZ0cfX5/dvfrl6uzk2Qz//CIm/59gGFbGZGlCKBj3trB6Mp5fi/QUo4WROjCM2qkU08ezaB723dGH+/qV+3xkjA+IH+lxJ4BxUjse3o36o+chHiI9imEsXhO4J72rYX3Yu34z49Ws9fFIv59clz77d9MfBjTBek2VdNpK4dtNHNLYFomf9ur9C3Iy//rseXoYxdG/hb9+9lp6cEWKD/owZ/g/sQz/Jdb54VRK+j6kqLyU2sdRTvsMn9dzGvLHN0kGkavz/yfpb7+YrogxPT1fYcLBbg3mb9rl0HO6fD1f/3ucz204/YspM9zdG6tS/fruYMWWeY6e5z338BVLIJjzCJerHBJYz3NWztB/lffkjy9YhUUM4dNXcLswsbSCWu56uJ931m+joCmFlRtzp5CGlfcG54GwFDYLwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzB/Rv4DHjhhrWpOsscAAAAASUVORK5CYII=",
  
        handler: function (response) {
          // alert(response.razorpay_payment_id);
          // alert("Payment Successfully");
          const d = new Date().getTime()
          setSucess(true)
          setAmt(`${amount}`)
          setPnames(pname)
          setOrdId(`HS_${d}`)
          setQtys(`${Number(amount/numm)}`)

          console.log(`Order Id: ${Number(amount/numm)}`)
          
          
          
          var templateParams = {
            name: userss,
            notes: `Order is placed for the user id:- ${currentUser?.uid}`,
            products_id: `Order Id:   HS_${d}`,
            prod:pname,
            qty: `Quantity: ${Number(amount/numm)}`,
            amts: `Amount:  Rs. ${amount}`,
            from:currentUser?.email
        };

        emailjs.init('user_p7msf2tHORufB8CgTktTI');
         
        emailjs.send('service_v03jozo', 'template_2r9864o', templateParams)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
        },
        prefill: {
          name: userss,
        },
      };
  
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
    else{
      setOpenPop(true);
    }
  };
  

  
  return (
    <div>
      {
        (open)?<div className="font-link">
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
        <Navbars img={hridhamW} about={myRef} product={productss} vision = {visionss} contactUs={contactss} buys={buy}/>
        <Box className={classes.photoContainer}> 
          <img src={logos} alt='' className={classes.photo}/>
          <Box style={{
            marginLeft:"10%",
            fontSize:"22px",
            width: "80%",
            textAlign:"center"
          }}>
            <p>An indigenous digital stethoscope which enables the healthcare professionals to auscultate wirelessly via bluetooth. The module comes with a user-friendly mobile application which can seamlessly record store and share heart & lung sounds for achieving precise and timely diagnosis</p>
          </Box>
          <img src={mainimg} alt='' style={{
            marginTop:"45px",
            marginLeft:"28%",
            //paddingRight:"60px",
            width: "35%",
            height: "35%",
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
        
  
  {/* <Box ref={visionss} className = "bg-image">
  {/* //classes.visionContainer classes.visionHead 
  <Box className="bg-text">
  <h1 >Vision</h1>
  
  <p>To become the most respected medical enterprise which delivers high 
  quality and novel "Made in India" products at fair prices to the consumer 
  and thereby creating value for all stakeholders.</p>
  </Box>
  </Box> */}
  <div ref={visionss} class={classes.visionContainer}>
    <div style={{fontSize:"25px", textAlign:"center", padding:"50px", color:"#ffffff", fontWeight:"bold"}}>
    <h1 >Vision</h1>
  
  <p>To become the most respected medical enterprise which delivers high 
  quality and novel "Made in India" products at fair prices to the consumer 
  and thereby creating value for all stakeholders.</p>
  
    </div>
  </div>
        <Box ref={productss} className={classes.productContainer}>
          <Box >
          <Box className={classes.productDesc}>
            <p>Change the way of using your stethoscope</p>
          </Box>
          <img src={labels} className={classes.productImg}></img>
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
  
        
        {/* <Box style={{
          textAlign:"center",
          marginLeft:"5%",
          fontSize: "35px",
          fontWeight:"bold",
          marginBottom:"100px"
        }}>
            <p>Most affordable stethoscopes compared to what's out there</p>
          </Box> */}
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
      <Box style={{height:"630px"}} className={classes.benifitsimg}>
          <img src={features} style={{height:"670px"}} className="stethimg"></img>
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

      {/* <Box ref={buy} className={classes.buyers}>
      
        <Grid
        container
        spacing={0}
        className={classes.tutContainer}
        justify="center"
      > */}
        {/* --- product buy landing-----<Grid item xs={12} sm={6} md={6}>
              <Box style={{
                marginLeft:"7%",
                marginRight:"7%"
              }}>
          <p style={{
            "fontSize":"40px",
            "fontWeight":"bold",
            "textAlign":"center"
          }}>Recording and Normal Stethoscopes are now Available</p>
           <p style={{
            "fontSize":"25px",
            paddingRight:"30px",
            "textAlign":"center",
            marginLeft:"5%"
            
          }}>Launching at &#8377;3000</p>
          <Button
          style={{
            width:"80%",
          borderRadius: 10,
          backgroundColor: "#003D57",
          //padding: "18px 36px",
          fontSize: "14px",
          marginTop:"20px",
          marginLeft:"12%",
          color:"#FFFFFF"
      }}
       onClick={() => displayRazorpay(1)}>
                BUY NOW
              </Button> {classes.recordImg} 
          </Box>
          
        </Grid>*/}
        
        {/* ---- image changer ------ <Grid item xs={12} sm={6} md={6}>
          <Box>
          {
            (image != "")?<img src={image} alt='' className="fadeInLeft"/>:<></>
          }
          </Box>
        </Grid>
         */}
        
      {/* </Grid>
      </Box> */}

      

      {/*---- product grids------ <Grid
        container
        spacing={3}
        className={classes.productsContainer}
        justify="center"
      >
         <Grid item xs={12} sm={6} md={5}>
          <PCard imgs={recordstetho} 
          attr={"Recording Stethoscope"}
          pay={(nums) => displayRazorpay(nums, "Recording Stethoscope", 3000)}
          prices = {"3000"}
          qty = {num}
          incr = {() => incNum()}
          decr = {() => decNum()}/>
        </Grid> */}
{/*         
        <Grid item xs={12} sm={6} md={5}>
          <PCard imgs={Moscopes} 
          attr={"Normal Stethoscope"}
          pay={(nums) => displayRazorpay(nums, "Normal Stethoscope", 5500)}
          prices = {"5500"}
          qty = {num}
          incr = {() => incNum()}
          decr = {() => decNum()}/>
        </Grid>
        
        
        {/* <Grid item xs={12} sm={6} md={4}>
          <Card name = {"arun"} desc = {""}/>
        </Grid> 
      </Grid> */}
  
      
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
                              <li style={{"color": "#FFFFFF", "paddingTop":"15px"}}>
                                  <i class="fa fa-map-marker" aria-hidden="true" style={{fontSize:"23px"}}></i>
                                  <a href="mailto:info@hridamsurgicals.com" style={{"textDecoration": "none", "color":"#FFFFFF"}}>&nbsp;&nbsp;A-36, Giriraj Industrial Estate,<br/>&nbsp;&nbsp;&nbsp;&nbsp;Mahakali Caves Road, M.I.D.C,<br/>&nbsp;&nbsp;&nbsp; Andheri East, Mumbai - 400093</a>
                              </li>
                          </ul></Box>
                  </Box>
                  <Box className={classes.socialMedia}>
                      <span><a href="https://www.linkedin.com/company/hridam-surgicals" style={{"textDecoration": "none", "color":"#FFFFFF", }}><i style={{"fontSize":"50px"}} className="fa fa-linkedin"></i></a></span>
                      <span><a href="https://instagram.com/hridamsurgicals?utm_medium=copy_link" style={{"textDecoration": "none", "color":"#FFFFFF", "marginLeft":"40px",}}><i style={{"fontSize":"48px"}} className="fa fa-instagram"></i></a></span>
                      
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

                        {/* ---- ISO certificate---- <Box>
                          <h1 style={{color:"#FFFFFF", marginTop:"60px", marginLeft:"2%"}}>Associated With</h1>
                          <img src={iso} alt='' className={classes.isoimg}/>
                        </Box> */}
  
  
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
      </div>:<p style={{"fontSize":"40px", "textAlign":"center", "marginTop":"30%"}}>Use Chrome 80 and above, Safari 10 and above, Edge 14 and above, IE 9 and above</p>
      }
      <Login open={openPop} setOpen={setOpenPop}/>
      <LottieWrapper open={sucess} setOpen={setSucess} recp = {() => {
        var imgData = "data:image/png;base64,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";
        doc.addImage(imgData, 'JPEG', 15, 0, 85, 50);
        doc.text(30, 50, 'Dear Customers');
        doc.text(30, 60, 'Thank You For Ordering');
        doc.setFontSize(10)
        doc.text(30, 70, `Order ID:                             ${ordid}`);
        doc.text(30, 80, `Product Name:                      ${pnames}`);
        doc.text(30, 90, `Quantity:                             ${qtys}`);
        doc.text(30, 100, `Date and time:                     ${new Date().toLocaleString()}`);
        doc.text(30, 110, `Amount Paid:                      Rs. ${amt}`);
        doc.text(30, 120, 'Payment Status:                   Success');
        doc.setFont("times");
        doc.save(`${names}_reciept.pdf`);
        }}/>
    </div>
  );
}
