import React, {useState} from 'react';
import Btn from "../../components/button";
import Modal from "../../components/Modal/Modal";

import './ModalHowMuch.css'
import ModalSacrificeRules from "../ModalSacrificeRules/ModalSacrificeRules";
import SacrificePage from "../../pages/SacrificePage/SacrificePage";

const ModalHowMuch = () => {

    const [modalActive, setModalActive] = useState(false)



    const btnSacrifice = () => {



        setModalActive(true)
    }


    return (
        <div>
            <div className='modal__header'>
                <h1>How much do you want to sacrifice?</h1>
            </div>
            <div className='select__sacrifice'>
                <div className='select__sacrifice__each'>
                    <input></input>
                    <img/>
                    <span>ETH</span>
                </div>
                <div className='select__sacrifice__each'>
                    <div className='select__NFT'>1x</div>
                    <Btn value={'Select NFT'}/>
                    <img/>
                </div>
                <Btn value='Sacrifice' func={btnSacrifice}/>
            </div>
            <div className='sacrifice__rules'>
            </div>
        </div>
    );
};

export default ModalHowMuch;