import React from "react";
import CartButton from "./CartButton/CartButton";

import classes from "./Header.module.css";

const Header = ({ showCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React food order</h1>
        <CartButton action={showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="./imgs/meals.jpg"
          alt="food"
        />
      </div>
    </>
  );
};

export default Header;
