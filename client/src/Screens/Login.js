import React,{useState} from "react";
import {Link,useHistory} from 'react-router-dom'
import {Grid,Typography,Container,Button,TextField,makeStyles} from '@material-ui/core'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  
  
  textField: {
    marginTop: "5px",
  },
  
}));
export default function Login({isEmployer}) {
  const classes=useStyles()
     const  history =useHistory()
     
    const[details,setDetails]=useState({
    email:"",
    password:""
  })
 
  const submit= async(e)=>{
    e.preventDefault()
    let email;
    let pass;
    if(!isEmployer) {
        email="user@naukri.com"
        pass="user@123"
    }
    else
    {
       email='admin@naukri.com'
       pass='admin@123'
    }
 if(details.email == email && details.password ==pass)
 {
//    try{
//      await axios.post("http://localhost:5000/api/user/login",{
//       email:details.email,
//       password:details.password}
//     ,{withCredentials:true})
//     }
//      catch(error ){
//   if(error.response) { 
//     console.log(error.response.details)
//   }
// }
 if(!isEmployer)
     history.push("/home")
     else
      history.push("/employer")
 }

        else {
           alert("Please enter correct login details")
        }
   
    setDetails({
    email:"",
    password:"" 
    })
     }
 
return (
  <Container maxWidth="xs" style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh'}}>
   <Grid item container spacing={2} justify='flex-end'>
        <Grid item xs={12} sm={12} md={12} lg={12} container justify='center'>
          {!isEmployer?
          <Typography variant="h5" className={classes.title}>
            User Sign In
          </Typography>:
           <Typography variant="h6" className={classes.title}>
            Employer Sign In
          </Typography>
}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <label  className={classes.label} >Email </label>
          <TextField
            
            focused
            placeholder="Enter your email id"
            className={classes.textField}
            size="small"
            id="email"
            type="email"
            fullWidth={true}
            value={details.email}
            onChange={(e) => {
              setDetails({
                ...details,
                email: e.target.value,
              });
            }}
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <label className={classes.label}>Password</label>
          <TextField
            style={{ marginTop: "10px", color: "white" }}
            focused
            placeholder="Enter your Password"
            InputLabelProps={{
              classes: {
                root: classes.label,
              },
            }}
            size="small"
            id="password"
            type="password"
            fullWidth={true}
            value={details.password}
            onChange={(e) => {
              setDetails({
                ...details,
                password: e.target.value,
              });
            }}
            required
            variant="outlined"
          />
        </Grid>
         <Grid item xs={12} sm={12} md={12} lg={12}container justify='center'>
           <Button variant='contained' color='primary' onClick={submit}>Sign In</Button>
         </Grid>

        </Grid>
        </Container>
  
  
)

}