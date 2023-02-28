import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = ({ handleClick }) => {
  return (
    <div
      className={classes.backdrop}
      onClick={handleClick}
    />
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const overlaysElement = document.getElementById("overlays");

const Modal = ({ children, hideCart }) => {
  return (
    <>
      {createPortal(<Backdrop handleClick={hideCart} />, overlaysElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, overlaysElement)}
    </>
  );
};

export default Modal;
