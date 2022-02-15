import React from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onCloseCart}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');



function Modal(props) {
  return (
    <React.Fragment>
        {ReactDom.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, portalElement)}
        {ReactDom.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>, 
            portalElement
        )}
    </React.Fragment>
  )
};

export default Modal;