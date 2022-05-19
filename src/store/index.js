import ModalManager from "./ModalManager";
import MetaMaskUtils from '../utils/MetaMaskUtils/MetaMaskUtils'
import {createContext} from "react";


const store = createContext({
    ModalManager: new ModalManager(),

});

export default store;