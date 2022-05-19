import React from 'react';
import './Modal.scss';
import {observer} from "mobx-react-lite";
import useStore from "../../hooks/useStore/useStore";

const Modal = () => {
    const {ModalManager} = useStore();

    const closeModal = () => {
        ModalManager.close();
        ModalManager.setRules(false)
    }

    return (
        <div className={ModalManager.isOpened ? 'modal active' : 'modal'} onClick={closeModal}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                {ModalManager.content}
            </div>
        </div>
    )
}

export default observer(Modal);