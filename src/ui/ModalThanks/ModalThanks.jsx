import React, {useState} from 'react';
import Btn from "../../components/button";
import {observer} from "mobx-react-lite";
import useStore from "../../hooks/useStore/useStore";

import './ModalThanks.scss'

const ModalThanks = () => {
    const {ModalManager} = useStore();

    const onGotIt = () => {
        ModalManager.removeContent();
        ModalManager.close();

    }

    return (
        <div>
            <div className='modal__header'>
                <h1>Thank you for your sacrifice!</h1>
            </div>
            <div className='thanks_sacrifice'>
                <p>You will receive tokens as you sacrificed 900 ETH!</p>
            </div>
        <Btn value='Got it!' func={onGotIt}/>

        </div>
    );
};

export default observer(ModalThanks);