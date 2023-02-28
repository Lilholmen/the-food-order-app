import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../Cart/CartIcon";

import classes from "./CartButton.module.css";

const CartButton = ({ action }) => {
  const cartContext = useContext(CartContext);

  return (
    <button
      className={classes.button}
      onClick={action}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Yout Cart</span>
      <span className={classes.badge}>
        {cartContext.items.reduce((acc, item) => acc + item.amount, 0)}
      </span>
    </button>
  );
};

export default CartButton;
