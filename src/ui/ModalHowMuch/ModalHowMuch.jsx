import React, {useState} from 'react';
import Btn from "../../components/button";
import {observer} from "mobx-react-lite";
import useStore from "../../hooks/useStore/useStore";
import pencil from '../../assets/icons/pencil.png'
import help from '../../assets/icons/help.png'

import './ModalHowMuch.css'
import ModalSacrificeRules from "../ModalSacrificeRules/ModalSacrificeRules";
import ModalThanks from "../ModalThanks/ModalThanks";

const ModalHowMuch = () => {
    const {ModalManager} = useStore();

    const onSacrificeClick = () => {
        ModalManager.removeContent();
        ModalManager.setContent(<ModalSacrificeRules />);

    }

    const onSelectNFT = () => {
        ModalManager.removeContent();
        ModalManager.setContent(<ModalThanks />);
    }

    return (
        <div>
            <div className='modal__header'>
                <h1>How much do you want to sacrifice?</h1>
            </div>
            <div className='select__sacrifice'>
                <div className='select__sacrifice__each'>
                    <input></input>
                    <img src={pencil} alt='pencil'/>
                    <span>ETH</span>
                </div>
                <div className='select__sacrifice__each'>
                    <div className='select__NFT'>1x</div>
                    <Btn value={'Select NFT'} func={onSelectNFT}/>
                    <img src={help} alt='help'/>
                </div>
                <Btn value='Sacrifice' func={onSacrificeClick}/>
            </div>
        </div>
    );
};

export default observer(ModalHowMuch);