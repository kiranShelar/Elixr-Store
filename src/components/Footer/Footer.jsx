import React from 'react';
import { Container, Grid, Box, Typography, Button, IconButton } from '@material-ui/core';
import {Link, useLocation} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';



const Footer = () => {
    const location = useLocation();
    console.log(location);
    return (
        location.pathname === "/" && (
        <footer style = {{backgroundColor : "#EEEEEE", color : "#894cfc", paddingTop : "20px"}}>
           <Box >
                <Container maxWidth="lg" >
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}><Typography variant="body1" align="left">About us</Typography></Box>
                            <Typography variant="subtitle1" color="textPrimary">We are consumer centric, reliable & efficient store. One stop solution for your minimalist vibes!</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}><Typography variant="body1"  align="left">Socials</Typography></Box>
                            <div >
                                <IconButton size="small" >
                                    Facebook  <FacebookIcon />
                                </IconButton>  
                            </div>
                            <div>
                                <IconButton size="small" >
                                    Instagram <InstagramIcon />
                                </IconButton>    
                            </div>  
                            <div>
                                <IconButton size="small" >
                                    Twitter <TwitterIcon  />
                                </IconButton>    
                            </div>   
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}><Typography variant="body1" >© 2021 Elixr Store</Typography></Box>
                        <Typography color="textPrimary" varinat = "subtitle1">Contact us : Elixr@support.com</Typography>
                        </Grid>
                    </Grid>
                </Container>   
            </Box>  
        </footer>
        )
    )
}

export default Footer
