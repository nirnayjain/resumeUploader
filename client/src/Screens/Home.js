import { TextField, Container, makeStyles, Grid, Button,Typography,Paper} from '@material-ui/core'
import { useState, useEffect } from 'react'
import {CircularProgress} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import app from '../base'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column'

    }


}))
const Home = () => {
    const history=useHistory()
    const data = {
        name: '',
        email: '',
        resume: '',
        
    }
    const [fileUploadStatus, setFileUploadStatus] = useState(false)
    
    const [file, setFile] = useState(null)
  
    useEffect(() => {
        if (file != null)
            app.storage().ref('resume').child(file.name).getDownloadURL().then((downloadURL) => setUserData({ ...userData, resume: downloadURL }))
    }, [file])
    const [userData, setUserData] = useState(data)
    const handleUploadResume = (e) => {
         
         if(e.target.files[0].type.endsWith('jpeg') || e.target.files[0].type.endsWith('jpg')|| e.target.files[0].type.endsWith('png')|| e.target.files[0].type.endsWith('pdf') )
         {
             setFileUploadStatus(true)
        app.storage().ref("resume").child(e.target.files[0].name).put(e.target.files[0])
            .then((snapshot) => {
                setFile(e.target.files[0])
                setFileUploadStatus(false)
            });
        }
        else
        alert("Please upload resume with extension jpeg,jpg or png")

    }
  
    const handleSubmit = async () => {
        if(userData.name===''||userData.resume===''||userData.email==='')
        {
        alert("Please fill all required field")
        return;
        }
        try {
            await axios.post("http://localhost:5000/api/user/register", userData)
            
            alert("Resume Uploaded Successfully")
            
        }
        catch (error) {
            alert(error)
        }
    }

    const classes = useStyles()
    return (
        <Container maxWidth="md" className={classes.root}>
            <Typography variant='h5'>User Data</Typography>
            <Paper elevation={2} style={{padding:30,margin:10}}>
            <Grid container spacing={3} lg={12}>
                <Grid item xs={12} sm={12} lg={12} xl={12}>
                    <TextField
                    id='name'
                        fullWidth
                        required
                        variant='standard'
                        label='Name'
                       
                        value={userData.name}
                        onChange={(e) => {
                            setUserData({ ...userData, name: e.target.value })
                        }}
                        
                    />
                </Grid>
                
                <Grid item xs={12} sm={12} lg={12} xl={12}>
                    <TextField
                        fullWidth
                        required
                        variant='standard'
                        label='Email'
                        value={userData.email}
                        onChange={(e) => {
                            setUserData({ ...userData, email: e.target.value })
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={12} xl={12} md={12}container spacing={1} >
                     <Grid item xs={12} sm={12} lg={4} xl={4} md={4} container  alignItems="center">
                     <Typography variant="h6">Resume</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4} xl={4} md={4} container  alignItems="center">
                    <label htmlFor="btn-upload">
                        <input
                            id="btn-upload"
                            name="btn-upload"
                            style={{ display: 'none' }}
                            type="file"

                            onChange={handleUploadResume}
                        />
                             
                        <Button
                           disabled={fileUploadStatus}
                            className="btn-choose"
                            variant="contained"
                            component="span"
                            color="primary" >
                            Upload resume
                        </Button>
                        
                    </label>
                    </Grid>
                      <Grid item xs={12} sm={12} lg={4} xl={4} md={4}  container  alignItems="center">
                    {fileUploadStatus ?
                        <CircularProgress />
                        :
                        fileUploadStatus === false &&
                       userData.resume !== '' && (
                        <Alert severity="success">resume uploaded Successfully!</Alert>
)}
                        </Grid>
                </Grid>

                 
                <Grid item xs={12} sm={12} lg={12} xl={12} container justify='center'>
                    <Button
                      
                        variant='contained'
                        color='primary'
                        onClick={handleSubmit}>
                        Submit

                    </Button>
                </Grid>

            </Grid>
            </Paper>
        </Container>
    )
}
export default Home