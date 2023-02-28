import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItem = state.items.find(
      (item) => item.id === action.item.id
    );

    if (existingCartItem) {
      const updatedItems = state.items.map((item) =>
        item === existingCartItem
          ? { ...item, amount: item.amount + action.item.amount }
          : item
      );

      return {
        totalAmount: updatedTotalAmount,
        items: updatedItems,
      };
    } else {
      const updetedItems = state.items.concat(action.item);

      return { items: updetedItems, totalAmount: updatedTotalAmount };
    }
  }

  if (action.type === 'REMOVE_ITEM') {
  }

  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: 'ADD_ITEM', item });
  };

  const removeItemFromCartHandler = (itemId) => {
    dispatchCart({ type: 'REMOVE_ITEM', itemId });
  };

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
