import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import { shadows } from '@mui/system';
import { Box } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    minWidth: 200,
    //border: "1px solid",
    //paddingLeft: "10px",
    
    // boxShadow: "0px 5px"
    boxShadow: "0 10px 30px -12.125px rgba(0,0,0,0.3)",
    height:"300px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 20,
    textAlign:"center"
  },
  pos: {
    marginBottom: 12
  },
  symbol:{
    width:"100%",
    height:"200px",
    

    //paddingLeft:"5%"
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

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
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
