import React, {useState, useEffect} from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Products, Navbar, Cart, Checkout} from './components';
import Footer from './components/Footer/Footer';



const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder]= useState({});
    const [errorMsg, setErrorMsg] = useState("")
    // products is initially an empty array, which will get populated by response from commerce api

    const fetchProducts = async ()=>{
        try {
            const {data} = await commerce.products.list();
            
            setProducts(data);
        }
        catch(err){
            console.log(err);
        }
    }

    const fetchCart = async ()=>{
        try {
            setCart(await commerce.cart.retrieve());
        }
        catch(err){
            console.log(err);
        }
    }

    const handleAddToCart = async (productId, quantity)=>{ //pass this func as prop to be used in product.jsx
       try{
           const {cart} = await commerce.cart.add(productId,quantity);

            setCart(cart)
       }
       catch(err){
           console.log(err);
       } 
    }

    const handleUpdateCartQty = async (productId, quantity) =>{
        try {
            const {cart} = await commerce.cart.update(productId, {quantity})

            setCart(cart)
        }
        catch(err){
            console.log(err);
        }
    }

    const handleRemoveFromCart = async (productId)=>{
        try{
            const {cart} = await commerce.cart.remove(productId)

            setCart(cart)
        }
        catch(err){
            console.log(err);
        }
    }

    const handleEmptyCart = async ()=>{
        try{
            const {cart} = await commerce.cart.empty()

            setCart(cart)
        }
        catch(err){
            console.log(err);
        }
    }

    const refreshCart = async ()=>{
        const newCart = await commerce.cart.refresh()

        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) =>{
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

            setOrder(incomingOrder)
            refreshCart()
        } catch (error) {
            setErrorMsg(error.data.error.message)
        }
    }

    useEffect(()=>{
        fetchProducts();
        fetchCart();
    }, []) 
    // Dependency array is kept empty,so that useEffect will run only once at the start when component mounts


    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>

                    <Route exact path="/cart">
                        <Cart cart={cart} 
                              handleUpdateCartQty={handleUpdateCartQty}   
                              handleRemoveFromCart={handleRemoveFromCart}
                              handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout cart={cart} 
                        order={order} 
                        onCaptureCheckout={handleCaptureCheckout} 
                        error={errorMsg}/>
                    </Route>
                </Switch>
                <Footer /> 
            </div> 
        </Router>
    )
}

export default App

