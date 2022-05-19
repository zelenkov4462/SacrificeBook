import AppHeader from "../../components/app-header";
import Btn from "../../components/button";
import Footer from "../../components/footer";
import React, {useState} from "react";

import './MainPage.css'
import EmptyPlace from "../../components/EmptyPlace/EmptyPlace";
import {Link} from "react-router-dom";
import MetaMask from "../../components/metaMask";
import MetaMaskUtils from "../../utils/MetaMaskUtils/MetaMaskUtils";


const MainPage = () => {



    const ethereum = window.ethereum

    // устарело
    // if (ethereum.isMetaMask) {
    //         console.log(ethereum.selectedAddress)
    //     };

    if (ethereum.isMetaMask) {
        window.ethereum.request({method:'eth_requestAccounts'})
            .then(res=>{
                // Return the address of the wallet
                console.log(res)
            })
        // ethereum.request({: 'eth_accounts' } )
    };

    if (ethereum) {
        ethereum.on('accountsChanged', function (accounts) {
            setAddr(String(accounts))
        });
    }

   const onMetaMask = () => {
       let account;
       account = ethereum.request({method: 'eth_requestAccounts'})
           .then(response => console.log(response));
       return account;
    }

    const [addr, setAddr] = useState("")
    const updateAddress = (value) => {
        setAddr(value);
        console.log(addr)
    }
//                 <Btn value='Connect wallet' func={onMetaMask} id={addr}/>

    return (
        <div>
            <AppHeader/>
            <div className="sacrificeMainInfo">
                <h3>Sacrificed right now</h3>
                <h3>1 000 000 ETH</h3>
            </div>
            <EmptyPlace/>
            <Link to={`/sacrifice/${addr}`} >
                Connect to wallet
            </Link>;
            <button onClick={updateAddress}>Meta Mask</button>
            <MetaMask updateAddress={updateAddress}/>
            <Footer/>
        </div>
    )
}

export default MainPage;

