import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from "./CheckoutProduct"
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">

            <img className="checkout__ad"src="https://n11scdn1.akamaized.net/a1/928_100/21/05/28/54/28/17/05/74/66/54/96/22/76008605307121482046.jpg" 
            alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket is empty</h2>
                    <p>
                        You have no item in your basket. To buy one or more items, click "Add to basket" next
                        to the item.
                    </p>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket?.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                         />
                    ))}
                    
                </div>    
            )}
            </div>
            {basket.length >0 && (
                <div className="checkout__right">

                    <h1>Subtotal</h1>
                    { <Subtotal /> }
                </div>
            )}
        </div>
    )
}

export default Checkout
