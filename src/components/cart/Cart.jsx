import React from 'react'
import classes from './Cart.module.css'
import Modal from '../ui/Modal'

function Cart(props) {

    const cartItems = (
        <ul className={classes['cart-items']}>
            {
                [{id: 'c1', name: 'sushi', amount: 2, price: 12.9999}].map((item) =>  (<li key={item.id}>{item.name}</li>))
            }
        </ul>
    );

  return (
    <Modal onCloseCart={props.onCloseCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.65</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart;