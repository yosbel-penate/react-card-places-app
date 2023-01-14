import React from 'react'
import reactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from '../BackdropComponent/Backdrop'
import './Modal.css'

const ModalOverlay = props => {
    const content=(
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit:(event)=> event.preventDefault}>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    );
    return reactDom.createPortal( content, document.getElementById('modal-hook'))
}


const Modal = props => {
    return <React.Fragment>
        {props.show && <Backdrop onclick={props.onCancel} />}
        <CSSTransition
            in={props.show}
            mountOnEnter
            timeout={200}
            classNames="modal"
        >
            <ModalOverlay {...props}/>
        </CSSTransition>
    </React.Fragment>
}

export default Modal