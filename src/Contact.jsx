import {React, useState, useRef}  from 'react'
import {Dialog, DialogContent, makeStyles, Box, TextField, Typography, Button} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Grid,  Card, CardContent, } from '@material-ui/core';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import Checkbox from '@material-ui/core/Checkbox';



const styling = makeStyles({
    root: {
        minWidth: 200,
        //border: "1px solid",
        //paddingLeft: "10px",
        
        // boxShadow: "0px 5px"
        boxShadow: "0 16px 30px -20.125px rgba(0,0,0,0.3)",
        height:"100%"
      },
    component:{
        marginTop:"0px",
        height: "100%",
        width:"100%",
        //display: "flex",
        boxShadow: "0 20px 60px -12.125px rgba(0,0,0,0.3)",
        height:"100%",
        borderRadius:"20px",
        marginBottom:"150px",
       

    },
    side1:{
        background: "#606669",
        width: "45%",
        height: "100%"
    },
    side2:{
        background: "#f4f4f4",
        width: "55%",
        height: "100%",
        padding: "20px 40px",
        flexDirection: "column"
    },
    
})


export default function Contact() {

    const [checked, setChecked] = useState(false);
    const [account, setAccount] = useState("login")
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [pno, setpno] = useState("")
    const [msg, setmsg] = useState("")
    const [email, setemail] = useState("")

    function notify  () {
        toast("Your response has been recorded")
    }


    
    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    //     let checked1 = !checked
    //     console.log(checked1)
    // }

    const form = useRef();
    

    function handleFName (event)  {
        
        setfname(event.target.value);
        //console.log(event.target.value);
        
    }

     function handleLName (event) {
        setlname(event.target.value);
        
    }

    function handlePno (event)  {
        setpno(event.target.value);
    }

    function handleMsg (event)  {
        setmsg(event.target.value);
    }

    function handleMail (event)  {
        setemail(event.target.value);
    }

    function submission(e){
        // console.log(form.current);
        e.preventDefault();

        var templateParams = {
            name: fname+' '+lname,
            phone:pno,
            notemsg: msg,

        };

        console.log(templateParams);
        emailjs.init('user_p7msf2tHORufB8CgTktTI');

    emailjs.sendForm('service_v03jozo', 'template_bmevv1f', e.target, 'user_p7msf2tHORufB8CgTktTI')
      .then((result) => {
          console.log(result.status);
          if(result.status == 200){
            console.log("baba");
            toast("Your response has been recorded");
            e.target.reset();
            setfname("");
            setlname("");
            setpno("");
            setemail("");
            setmsg("");

            //handleClose();
          }
      }, (error) => {
        toast("there was some error in processing your response");
          console.log(error.text);
      });

    }
    
    // const handleClose = () =>{
    //     setfname("");
    //         setlname("");
    //         setpno("");
    //         setemail("");
    //         setmsg("");
    //     setOpen(false)
    //     toggleTologin()
    // }

    // const toggleTosignup = () => {
    //     setAccount("signup")
    // }

    // const toggleTologin = () => {
    //     setAccount("login")
    // }

    const styless = styling()
    
    return (
        <Card className={styless.component}>
            <h2 style={{"textAlign":"center", "marginLeft":"10px", "marginRight":"10px", fontSize:"19px"}}> if you are interested into the product and want to<br/>have more information about please contact us at <br/> <a href="mailto:info@hridamsurgicals.com" style={{textDecoration:"none"}}><span style={{color:"#05C0C9"}}>info@hridamsurgicals.com</span></a> or fill the below form</h2>
            <CardContent>
            
             
            <form ref={form} onSubmit={submission}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" name='fnames' value={fname} onChange={handleFName}  label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" name='lnames' value={lname} onChange={handleLName} label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" name='emails' value={email} onChange={handleMail} label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" name='pnos' value={pno} onChange={handlePno} label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" name='msgss' value={msg} onChange={handleMsg} variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" style={{"backgroundColor":"#003D57", "color":"#ffffff", "marginTop":"20px", borderRadius:"12px",}} fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>

            <ToastContainer />

            </CardContent >
        </Card>
        
    )
}

