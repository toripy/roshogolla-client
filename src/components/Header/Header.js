import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import {
    AppBar,
    Toolbar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Container,
    Button,
    Avatar
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import { handleSignOut } from '../Login/ManageLogin';
import './Header.css'

const useStyles = makeStyles( {

    navDisplayFlex: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    linkText: {
        textDecoration: 'none',
        color: 'white'
    },
    buttonStyle: {
        textTransform: "none",
        backgroundColor: "tomato",
        color: "white"

    }
} );

const navLinks = [
    { title: `Home`, path: `/home` },
    { title: `Order`, path: `/order` },
    { title: `Admin`, path: `/admin` },
    { title: `Details`, path: `/details` },

];

const Header = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext( UserContext );
    const [click, setClick] = useState( true )


    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleSignOut = () => {
        handleSignOut()
            .then( res => {
                setLoggedInUser( res );
                false && history.replace( from );
            } )
    }


    // event.preventDefault();



    return (
        <AppBar position="static">
            <Toolbar>
                <Container id='header' maxWidth="md" >
                    <Link style={{
                        textDecoration: 'none',
                        color: 'white'
                    }} to='/home'>
                        <IconButton edge="start" color="inherit" aria-label="home">
                            <Home fontSize="large" />
                            <h3 style={{ marginLeft: "30px" }}>Roshogolla</h3>
                        </IconButton>
                    </Link>
                    <List
                        component="nav"
                        aria-labelledby="main navigation"
                        className={classes.navDisplayFlex}
                    >
                        {navLinks.map( ( { title, path } ) => (

                            <Link to={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </Link>
                        ) )}

                        {loggedInUser.isSignedIn ?
                            <>
                                <Avatar style={{ cursor: "pointer" }} onClick={() => setClick( !click )} alt={loggedInUser.name} src={loggedInUser.photo} />

                                <Link style={{ textDecoration: 'none', display: click && 'none', margin: "3px" }} to='/login'>
                                    <Button style={{ display: "block" }}
                                        onClick={googleSignOut}
                                        className={classes.buttonStyle}


                                        variant="outlined"
                                    >Logout</Button>
                                </Link>
                            </>
                            :
                            <Link style={{ textDecoration: 'none' }} to='/login'>
                                <Button
                                    className={classes.buttonStyle} size="large" variant="outlined"
                                >Login</Button>
                            </Link>}


                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    );
};
export default Header;
