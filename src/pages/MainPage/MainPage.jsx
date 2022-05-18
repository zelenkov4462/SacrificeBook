import AppHeader from "../../components/app-header";
import Btn from "../../components/button";
import Footer from "../../components/footer";
import React, {useState} from "react";

import './MainPage.css'
import EmptyPlace from "../../components/EmptyPlace/EmptyPlace";
import {Link} from "react-router-dom";
import MetaMask from "../../components/metaMask";
import {ethers} from "ethers";
import {set} from "mobx";


const MainPage = () => {

    const [addr, setAddr] = useState(null)
    const updateAddress = (value) => {
        setAddr(value);
        console.log(addr)
    }

    const ethereum = window.ethereum

    if (ethereum.isMetaMask) {
            console.log(ethereum.selectedAddress)
        };

    if (ethereum) {
        ethereum.on('accountsChanged', function (accounts) {
            console.log(accounts)
        });
    }

   const onMetaMask = () => {
       let account;
       account = ethereum.request({method: 'eth_requestAccounts'})
           .then(response => console.log(response));
       return account;
    }


    return (
        <div>
            <AppHeader/>
            <div className="sacrificeMainInfo">
                <h3>Sacrificed right now</h3>
                <h3>1 000 000 ETH</h3>
            </div>
            <EmptyPlace/>
            <Link to='/sacrifice' id={addr}>
                <Btn value='Connect wallet' func={onMetaMask} id={addr}/>
            </Link>;
            <button onClick={onMetaMask}>Meta Mask</button>
            <MetaMask updateAddress={updateAddress}/>
            <Footer/>
        </div>
    )
}

export default MainPage;

