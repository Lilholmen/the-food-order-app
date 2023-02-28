import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';

const Cart = ({ hideCart }) => {
  const cartCotext = useContext(CartContext);

  const cartListNotEmpty = cartCotext.items.length > 0;
  const totalAmountFormated = `$${cartCotext.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (item) => {};

  const cartItemRemoveHandler = (itemId) => {};

  const cartItems = (
    <ul className={classes.cartItems}>
      {cartCotext.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal hideCart={hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmountFormated}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={hideCart}>
          Close
        </button>
        {cartListNotEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
