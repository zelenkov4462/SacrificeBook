import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { ethers } from "ethers";
import { Button, Card } from "react-bootstrap";
import './app.css';

import AppHeader from "../app-header";
import Btn from "../button";
import Footer from '../footer';
import MetaMask from "../metaMask";
import SacrifWallet from "../sacrificeWallet/sacrifWallet";
import {BrowserRouter as Router, Route} from "react-router-dom";








function App()  {

        return(
            <div>
                <AppHeader/>
                <div className={"sacrificeMainInfo"}>
                    <h3>Sacrificed right now</h3>
                    <h3>1 000 000 ETH</h3>

                </div>
                <div className='infoPlace'/>
                    <Btn value={'Connect wallet'} />
                    <Footer/>

                 {/*<SacrifWallet/>*/}

             </div>);
 }
export default App;
