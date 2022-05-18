import React from 'react';
import Btn from "../../components/button";

import './ModalNoHaveNFT.scss'
import useStore from "../../hooks/useStore/useStore";
import EmptyPlace from "../../components/EmptyPlace/EmptyPlace";
import ModalSelectNFT from "../ModalSelectNFT/ModalSelectNFT";
import {observer} from "mobx-react-lite";

const ModalNoHaveNFT = () => {
    const {ModalManager} = useStore();

    const onPurchaseNFT = () => {
        ModalManager.removeContent();
        ModalManager.setContent(<ModalSelectNFT/>);
    }

    const onGoBack = () => {
        ModalManager.removeContent();
        ModalManager.close();
    }
    return (
        <div>
            <div className='modal__header'>
                <h1>You have no Multiplier NFTs in your wallet</h1>
            </div>
            <EmptyPlace/>
            <Btn value='Purchase NFT' func={onPurchaseNFT}/>
            <Btn value='Go back' func={onGoBack}/>

        </div>
    );
};

export default observer(ModalNoHaveNFT);