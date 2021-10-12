import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu , Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logoImage.jpg';
import useStyles from './styles'
import { Link, useLocation} from 'react-router-dom';

const Navbar = ({totalItems}) => {

    const classes = useStyles();
    const location = useLocation();

    return (
        <>
          <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit" component={Link} to="/">
                        <img  src={logo} alt="Elixr Store" height="50px" className={classes.image}/>
                        Elixr Store
                    </Typography>
                    <div className={classes.grow} />
                                    {/* Only show cart button when we are on home route */}
                    {location.pathname==="/" && (
                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart Items" color="inherit" component={Link} to="/cart">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>)}
                </Toolbar>
          </AppBar>  
        </>
    )
}

export default Navbar
