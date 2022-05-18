import React from 'react';
import './Modal.scss';
import {observer} from "mobx-react-lite";
import useStore from "../../hooks/useStore/useStore";

const Modal = () => {
    const {ModalManager} = useStore();

    return (
        <div className={ModalManager.isOpened ? 'modal active' : 'modal'} onClick={() => ModalManager.close() }>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                {ModalManager.content}
            </div>
        </div>
    )
}

export default observer(Modal);