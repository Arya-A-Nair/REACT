import React from "react";
import ReactDOM from 'react-dom'
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop}
  onClick={props.onCloseCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart}/>, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}  </ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
