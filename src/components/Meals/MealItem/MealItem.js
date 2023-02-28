import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ name, description, price, id }) => {
  const cartContext = useContext(CartContext);

  const formatedPrice = `$${price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    cartContext.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}></div>
        {description}
        <div className={classes.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm
          id={id}
          addToCart={addItemToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
