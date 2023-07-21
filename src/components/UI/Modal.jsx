import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import React from 'react';
import {ModalOverlay,Backdrop} from './styles'


const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay onClick = {props.onClick} >{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
