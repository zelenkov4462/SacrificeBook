import React, {useEffect} from 'react';
import Btn from "../../components/button";
import letter from '../../assets/icons/letter.png'
import ModalNoHaveNFT from "../ModalNoHaveNFT/ModalNoHaveNFT";

import './ModalSelectNFT.scss'
import useStore from "../../hooks/useStore/useStore";
import ModalHowMuch from "../ModalHowMuch/ModalHowMuch";
import {observer} from "mobx-react-lite";

const ModalSelectNFT = () => {
    const {ModalManager} = useStore();

    const onGotIt = () => {
        ModalManager.removeContent();
        ModalManager.setContent(<ModalNoHaveNFT/>);
    }

    const onUseIt = () => {
        ModalManager.removeContent();
        ModalManager.setContent(<ModalHowMuch/>);
    }

    useEffect(() => {
        ModalManager.setRules(true);
    }, [])
    return (
        <div>
            <div className='modal__header'>
                <h1>Select NFT to use for your sacrifice</h1>
            </div>
            <div onClick={() => {onGotIt()}} className='select_nft'>
                <button ><img src={letter} alt='письмо'/></button>
                <button><img src={letter} alt='письмо'/></button>
                <button><img src={letter} alt='письмо'/></button>
                <button><img src={letter} alt='письмо'/></button>
                <button><img src={letter} alt='письмо'/></button>
                <button><img src={letter} alt='письмо'/></button>


                <div className='remember_info'>
                    <p>Remember, selected NFT will be burned</p>
                </div>
            </div>
            <Btn value='Use it!' func={onUseIt}/>

        </div>
    );
};

export default observer(ModalSelectNFT);