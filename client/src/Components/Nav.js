import React from 'react';
import { makeStyles,Menu,MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,

    },
}));

export default function Nav() {
    const history = useHistory()
    const classes = useStyles();
      const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.title} style={{ cursor: 'pointer' }} onClick={() => history.push('/home')}>

                        Home

                    </Typography>
                    <Typography variant="h6" style={{ cursor: 'pointer' }} onClick={handleClick}>

                        Login

                    </Typography>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={()=>history.push('/')}>As user</MenuItem>
                        <MenuItem onClick={()=>history.push('/employer/login')}>As employer</MenuItem>
                        
                    </Menu>

                </Toolbar>
            </AppBar>
        </div>
    );
}
