import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import { shadows } from '@mui/system';


const useStyles = makeStyles({
  root: {
    minWidth: 100,
    //border: "1px solid",
    //padding: "10px",
    // boxShadow: "0px 5px"
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
    fontWeight:"bold"
  },
  pos: {
    marginBottom: 12
  },
  buttonContainer:{
    marginLeft:"40%"
  }
});



export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const handleClick = () => {
    console.log("kink"+props.links);
    window.open(props.links);
  };

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
        <Typography  className={classes.title}>
          {props.name}
        </Typography>
        
        <Typography variant="body2" component="p">
        {props.desc}
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="large" className={classes.buttonContainer}><i class="fa fa-linkedin"></i></Button>
      </CardActions>
    </Card>
  );
}
