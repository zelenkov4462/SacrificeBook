import AppHeader from "../../components/app-header";
import Btn from "../../components/button";
import Footer from "../../components/footer";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './MainPage.css'
import EmptyPlace from "../../components/EmptyPlace/EmptyPlace";
import {Link} from "react-router-dom";
import useStore from "../../hooks/useStore/useStore";
import {observer} from "mobx-react-lite";
import MetaMaskController from "../../utils/MetaMaskController/MetaMaskController";

const MainPage = () => {
    const navigate = useNavigate();
    const { UserCredentials } = useStore();

    async function onChangeAccount ()  {
        await MetaMaskController.changeAccount();
    }
    // onChangeAccount();

    async function onConnectWallet() {
        const {address, balance} = await MetaMaskController.getAddressAndBalance();
        UserCredentials.setAddress(address);
        UserCredentials.setBalance(balance);
        navigate(`/sacrifice/${address}`);
    }

    return (
        <div>
            <AppHeader/>
            <div className="sacrificeMainInfo">
                <h3>Sacrificed right now</h3>
                <h3>1 000 000 ETH</h3>
            </div>
            <EmptyPlace/>
            <Link to={`/sacrifice/${''}`} >
                Connect to wallet
            </Link>;
            <Btn value='Connect wallet 2' func={onConnectWallet}></Btn>
            {/*<MetaMask updateAddress={''}/>*/}

            <div><strong>Address:</strong> {UserCredentials.address}</div>
            <div><strong>Balance:</strong> {UserCredentials.balance}</div>
            <Footer/>
        </div>
    )
}

export default observer(MainPage);

