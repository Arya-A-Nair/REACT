import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const totalamount = `$${cartContext.totalamount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  }
  const cartItemAddHandler = (item) => {
    cartContext.addItem({
      ...item,
      amount:1
    });
  }

  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));
  return (
    <Modal onCloseCart={props.onCloseCart}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalamount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
