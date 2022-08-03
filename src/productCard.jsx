import {React, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//import { shadows } from '@mui/system';
import './App.css';
import { Box } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';




const useStyles = makeStyles({
  root: {
    minWidth: 200,
    //border: "1px solid",
    //paddingLeft: "10px",
    
    // boxShadow: "0px 5px"
    boxShadow: "0 10px 40px -12.125px rgba(0,0,0,0.3)",
    //width:"40%",
    height:"100%",
    borderRadius:"20px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginTop:"4px",
    fontSize: "23px",
    //textAlign:"center",
    marginLeft:"5%",
    fontWeight:"bold"
  },
  price: {
    marginTop:"4px",
    fontSize: "20px",
    marginLeft:"5%"
    //textAlign:"left",
    //fontWeight:"bold"
  },
  pos: {
    marginBottom: 12
  },
  symbol:{
    width:"60%",
    height:"250px",
    marginLeft:"15%"
    

    //paddingLeft:"5%"
  }
});

export default function ProductCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let [num, setNum]= useState(1);

  let incNum =()=>{
    
    setNum(Number(num)+1);
    
  };
  let decNum = () => {
     if(num>1)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

  

  return (
    <Card  className={classes.root} variant="outlined">
      <CardContent>
        {/* <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography> */}
        {/* <Typography  variant="h5" component="h2">
          {props.name}
        </Typography> */}


        <Box>
        <img src={props.imgs} className={classes.symbol}></img>
        </Box>
        <Typography className={classes.title}>
        {props.attr}
          
        </Typography>

        <Typography className={classes.price}>
        Rs. {props.prices}
          
        </Typography>

        
    <div style={{marginLeft:"5%",}}>
    <Button style={{
          width:"2px",
          height:"2%",
        borderRadius: 10,
        backgroundColor: "#003D57",
        //padding: "18px 36px",
        fontSize: "20px",
        marginTop:"20px",
        padding:"2px",
        //marginLeft:"28%",
        color:"#FFFFFF"
    }} variant="contained" type="button" onClick={decNum}>-</Button>
  
  <input type="text" align="middle" class="num_input" value={num}  onChange={handleChange} readOnly/>
    <Button style={{
          width:"2px",
          height:"2%",
        borderRadius: 10,
        backgroundColor: "#003D57",
        //padding: "18px 36px",
        fontSize: "20px",
        marginTop:"20px",
        padding:"2px",
        //marginLeft:"28%",
        color:"#FFFFFF"
    }} variant="contained" type="button" onClick={incNum}>+</Button>
    </div>
  
        <Button style={{
          width:"50%",
        borderRadius: 20,
        backgroundColor: "#003D57",
        //padding: "18px 36px",
        fontSize: "14px",
        marginTop:"20px",
        marginLeft:"28%",
        color:"#FFFFFF"
    }} variant="contained"  onClick={() => {props.pay(Number(props.prices)*num)}}>
          Buy Now
        </Button>
      </CardContent>
      <ToastContainer />
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
