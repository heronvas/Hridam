import {React, useState, useRef}  from 'react'
import {Dialog, DialogContent, makeStyles, Box, TextField, Typography, Button} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Grid,  Card, CardContent, } from '@material-ui/core';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signup, signin, logout, useAuth } from "./firebase";
import { getDatabase, ref, set , child, get } from "firebase/database";
import './App.css';
import validator from 'validator'




import Checkbox from '@material-ui/core/Checkbox';



const styling = makeStyles({
    component:{
        marginTop:"45px",
        height: "100%",
        width:"100%",
        display: "flex",
        padding:"50px",
        borderRadius:"30px"
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
    inputs: {
      color: 'white'
  }
    
})


export default function Login({open, setOpen}) {

    const [checked, setChecked] = useState(false);
    const [account, setAccount] = useState("login")
    const [login, setLogin] = useState(false)
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [pno, setpno] = useState("")
    const [msg, setmsg] = useState("")
    const [email, setemail] = useState("")
    const [ispass, setpass] = useState("")

    const [passwordShown, setPasswordShown] = useState(false);


    const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
    console.log(validator.isEmail(email))
    if(email.length == 0){
      setEmailError("")
    }
    else if (validator.isEmail(email)) {
      setEmailError('Valid')
    } else {
      setEmailError('Invalid')
    }
  }

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

    function notify  () {
        toast("Your response has been recorded")
    }


    
    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    //     let checked1 = !checked
    //     console.log(checked1)
    // }

    const form = useRef();
    const currentUser = useAuth();
    

    

    function handleFName (event)  {
        
        setfname(event.target.value);
        //console.log(event.target.value);
        
    }

     function handleLName (event) {
        setlname(event.target.value);
        
    }

    function handlePno (event)  {
        setpno(event.target.value);
        var pas = event.target.value

        if(pas.length == 0){
            setpass("")
        }
        else if(pas.length > 10){
          setpass("Valid")
        }
        else{
          setpass("Invalid")
        }
    }

    function handleMsg (event)  {
        setmsg(event.target.value);
    }

    function handleMail (event)  {
        setemail(event.target.value);
        var email = event.target.value
        console.log(validator.isEmail(email))
        if(email.length == 0){
          setEmailError("")
        }
        else if (validator.isEmail(email)) {
        setEmailError('Valid')
        } else {
        setEmailError('Invalid')
        }
    }

    function changeLogin(){
        console.log(login);
        setLogin(!login);
        
    }

    function writeUserData(userId, name) {
        const db = getDatabase();
        set(ref(db, userId+"/"), {
          username: name,
          
        });
      }

    async function signUp(e){
        // console.log(form.current);
        e.preventDefault();

        var templateParams = {
            name: fname,
            password:pno,
            email: email,

        };

        console.log(templateParams);

        try{
            await signup(email, pno).then(data => {
                //console.log("User ID :- ", data.user.uid);
                writeUserData(data.user.uid, fname)
            }).catch(error => {
                console.log(error);
             });;
            toast("Registered in successfully")

            //var names = currentUser?.uid
            //console.log("see"+user.email);
            //writeUserData(names, fname)
            
            handleClose();
            
        }
        catch(err){
            console.log(err)
            toast("Error while registering")
            setfname("");
            setlname("");
            setpno("");
            setemail("");
            setmsg("");
            setEmailError("");
        }

        console.log("done");
        


        // e.target.reset();
        //     setfname("");
        //     setlname("");
        //     setpno("");
        //     setemail("");
        //     setmsg("");

    }

    async function signIn(e){
        // console.log(form.current);
        e.preventDefault();

        var templateParams = {
            name: fname,
            password:pno,
            email: email,

        };

        console.log(templateParams);

        try{
            await signin(email, pno);
            toast("Logged in successfully")
            handleClose();
        }
        catch(err){
            console.log(err)
            toast("Error while loggin in")
            setfname("");
            setlname("");
            setpno("");
            setemail("");
            setmsg("");
            setEmailError("");
            setpass("")
        }

        console.log("done");
        


        // e.target.reset();
        //     setfname("");
        //     setlname("");
        //     setpno("");
        //     setemail("");
        //     setmsg("");

    }
    
    const handleClose = () =>{
        setfname("");
            setlname("");
            setpno("");
            setemail("");
            setmsg("");
            setEmailError("");
            setpass("")
           
        setOpen(false)
        toggleTologin()

    }

    const toggleTosignup = () => {
        setAccount("signup")
    }

    const toggleTologin = () => {
        setAccount("login")
    }

    const styless = styling()
    
    return (
        <Dialog PaperProps={{
            style: { borderRadius: 20 }   }}  open={open} onClose={handleClose} >
            <DialogContent className={styless.component}>
            
             
            {
                (login)?
                <div> 
                    <form ref={form} onSubmit={signUp}>
                <Grid container spacing={4}>
                <Grid item xs={12}>
                    <label class="align-middle custom_badge" for="inputName">Name <span class="reqField"></span> </label>
                
                    <input type="name" className='custom_input' placeholder="Enter Your Name" name='names' InputProps={{}} value={fname} onChange={handleFName} label="Name" variant="outlined" fullWidth required />
                    
                  </Grid>
                  <Grid item xs={12}>
                  <label class="align-middle custom_badge" for="inputName">Email <span class="reqField"></span> </label>
                    <input  type="email" className='custom_input' placeholder="Enter email" name='emails' value={email} onChange={handleMail} label="Email" variant="outlined" fullWidth required  />
                    <span className={(emailError == "Invalid")?"fa fa-info-circle errspan":(emailError == "Valid")?"fa fa-check corrspan":""}></span>
                    {/* <span style={{
          fontWeight: 'bold',<i class="fa-solid fa-check"></i>
          color: 'red',
        }}>{emailError}</span> */}
                  </Grid>
                  <Grid item xs={12}>
                  <label class="align-middle custom_badge" for="inputName">Password <span class="reqField"></span> </label>
                    <input type="password" placeholder="Enter password" className='custom_input' name='pnos' value={pno} onChange={handlePno} label="Password" variant="outlined" fullWidth required />
                    <span style={{marginRight:"30px"}} className={(ispass == "Invalid")?"fa fa-info-circle errspan":(ispass == "Valid")?"fa fa-check corrspan":""}></span>
                    <div>
                      {
                        (ispass == "Invalid")?<span style={{marginRight:"30px", color:"red"}} >password should have minimum 10 characters</span>:<span></span>
                      }
                    </div>
                    
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" style={{"backgroundColor":"#003D57", "color":"#ffffff", borderRadius:"12px", width:"50%", marginLeft:"24%"}} fullWidth>Submit</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <a id="links" onClick={changeLogin}>
                    <p style={{
                        textAlign:"center"
                    }}>Already have an account? Login here</p>
                    </a>
                  </Grid>
                </Grid>
              </form>
                </div>
            :
                <div>
                    <form ref={form} onSubmit={signIn}>
              <Grid container spacing={4}>
              
                <Grid item xs={12}>
                <label class="align-middle custom_badge" for="inputName">Name <span class="reqField"></span> </label>
                  <input type="email" className='custom_input' placeholder="Enter email" name='emails' value={email} onChange={handleMail} label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <label class="align-middle custom_badge" for="inputName">Password <span class="reqField"></span> </label>
                  <input type="password" placeholder="Enter password" className='custom_input' name='pnos' value={pno} onChange={handlePno} label="Password" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" style={{"backgroundColor":"#003D57", "color":"#ffffff", borderRadius:"12px", width:"50%", marginLeft:"24%"}} fullWidth>Submit</Button>
                </Grid>
                <Grid item xs={12}>
                  <a id="links" onClick={changeLogin}>
                  <p style={{
                      textAlign:"center"
                  }}>Dont Have an Account? Register Here</p>
                  </a>
                </Grid>
              </Grid>
            </form>
                </div>
            }
            

            <ToastContainer />

            </DialogContent>
        </Dialog>
        
    )
}

