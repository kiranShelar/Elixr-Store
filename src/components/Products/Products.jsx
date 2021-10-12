import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles'


// Mock Products data : 

// const products = [
//     {id:1, name : 'Watch', description : "Smart watch", price : "Rs. 400"},
//     {id:2, name : 'Mobiles', description : "Samsung", price : "Rs. 600"},
//     {id:3, name : 'TV', description : "LG", price : "Rs. 900"}
// ] 

const Products = ({ products, onAddToCart })=>{
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
              {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
        </main>
    )
}
export default Products;