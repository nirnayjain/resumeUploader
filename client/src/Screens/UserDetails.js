import React, { useEffect, useState } from 'react';
import { makeStyles, CircularProgress, Container, Button,Grid,Typography} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import Pagination from '@material-ui/lab/Pagination'
const useStyles = makeStyles({

    root: {

        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        paddingTop: 50,


    }
});



export default function UserDetails() {
    const [details, setDetails] = useState(null)
    const [totalCount, setTotalCount] = useState(null)
    const [query, setQuery] = useState({
        pageSize: 6,
        page: 1
    })
    const classes = useStyles();
    useEffect(() => {
        getDetails()
    }, [query])
    const getDetails = async () => {
        const res = await axios.post("http://localhost:5000/api/user/userDetails", query)
        setDetails(res.data.users)
        setTotalCount(Math.ceil(res.data.total / query.pageSize));
    }
    return (
        <Container maxWidth='md' className={classes.root}>
            <Typography variant='h4' paragraph align='center'>Applicants</Typography>
            {details === null ?
                <CircularProgress style={{margin:'auto'}}/> :
                <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead  style={{background:'#3f51b5'}}>
          <TableRow>
           
            <TableCell align="center" style={{color:'white'}}>Name</TableCell>
            <TableCell align="center" style={{color:'white'}}>Email</TableCell>
            <TableCell align="center" style={{color:'white'}}>Resume</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
            
   
          {details.map((i) => (
            <TableRow key={i._id}>
              <TableCell align="center">
                {i.userName}
              </TableCell>
              <TableCell align="center">{i.email}</TableCell>
              <TableCell align="center"> <a target="_blank" href={i.resume} style={{textDecoration:'none'}} ><Button variant='contained' color='primary'>Click to view Resume</Button></a></TableCell>
             
            </TableRow>
          ))}
         

        </TableBody>
      </Table>
    </TableContainer>
  
                                    <Grid item xs={12} sm={12} lg={12} md={12} container justify='center' >

                                        <Pagination
                                            style={{ marginTop: '50px', marginBottom: '20px' }}
                                            showFirstButton
                                            showLastButton
                                            count={totalCount}
                                            page={query.page}
                                            onChange={(e, value) => {
                                                setQuery({
                                                    ...query,
                                                    page: value 
                                                });
                                                setDetails(null)
                                            }}
                                            color="primary" />
                                    </Grid>

       </>

            }
        </Container>
    );
}
