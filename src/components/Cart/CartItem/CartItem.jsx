import React from 'react';
import { Typography, Button, CardActions, Card, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.CardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button size="small" type="button" onClick={()=>onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button size="small" type="button" onClick={()=>onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button type="button" color="secondary" variant="contained" onClick={()=> onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
