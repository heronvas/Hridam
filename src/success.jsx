import React, { useEffect, useRef } from 'react';
// import lottie from 'lottie-web';
import Lottie from 'react-lottie';
import {Dialog, DialogContent, makeStyles, Box, TextField, Typography, Button} from '@material-ui/core'
import * as sucfile from './icons/success.json'

const LottieWrapper = ({open, setOpen, recp}) => {
  let animationContainer = useRef(null);

  // useEffect(() => {
  //        // optional clean up for unmounting
  // }, [animationContainer]);

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: sucfile,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  const handleClose = () =>{
       
    setOpen(false)
    
}

  return (
<Dialog PaperProps={{
  style: { borderRadius: 40 }   }}  open={open} onClose={handleClose} >
  <DialogContent style={{width:"100%"}}>
  
  <Lottie options={defaultOptions}
              style = {{width:"100%"}}
              height={200}
              width={900}
              />
    <Typography><h2 style={{textAlign:"center"}}>Payment Sucessful</h2></Typography>

    <Button color="inherit" style={{"color":"#000000", marginLeft:"12%"}} onClick={() => {recp()}}>Download Reciept</Button>
   

  </DialogContent>
</Dialog>
  );
};

export default LottieWrapper;