import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = ({ hideCart }) => {
  const cartItems = (
    <ul className={classes.cartItems}>
      {[{ id: 1, name: "food1", amount: 2, price: 13.66 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal hideCart={hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$13.66</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={hideCart}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
