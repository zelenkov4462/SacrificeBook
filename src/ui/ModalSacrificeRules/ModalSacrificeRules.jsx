import React from 'react';
import Btn from "../../components/button";
import letter from '../../assets/icons/letter.png'

import './ModalSacrificeRules.css'
import useStore from "../../hooks/useStore/useStore";
import ModalSelectNFT from "../ModalSelectNFT/ModalSelectNFT";
import {observer} from "mobx-react-lite";

const ModalSacrificeRules = () => {
    const {ModalManager} = useStore();

    const onGotIt = () => {
        ModalManager.removeContent();
        ModalManager.setContent(<ModalSelectNFT />);

    }
    return (
        <div>
            <div className='modal__header'>
                <h1>Sacrifice rules</h1>
            </div>
            <div className='sacrifice__info'>
                   <img src={letter}
                    alt='письмо'/>
                   <div className='sacrifice__rules'>
                       <p>kvdsgfsdgfd overflow-y: scroll;dsfsdsfsdfdvdsgfsdgfd overflow-y: scroll;dsfsdsfsdfdvdsgfsdgfd overflow-y: scroll;dsfsdsfsdfdvdsgfsdgfd overflow-y: scroll;dsfsdsfsdfdvdsgfsdgfd overflow-y: scroll;dsfsdsfsdfdvdsgfsdgfd overfl.sacrifice__rules p.sacrifsdgfd overfl.sacrifice__rules p.sacrifsdgfd overfl.sacrifice__rules p.sacrifsdgfd overfl.sacrifice__rules p.sacrifice__rules pow-y: scroll;dsfsdsfsdfdsfsdf</p>
                   </div>
            </div>
                <Btn value='Got it!' func={onGotIt}/>

        </div>
    );
};

export default observer(ModalSacrificeRules);