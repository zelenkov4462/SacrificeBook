import ModalManager from "./ModalManager";
import {createContext} from "react";
import MetaMaskUtils from "../utils/MetaMaskUtils/MetaMaskUtils";


const store = createContext({
    ModalManager: new ModalManager(),
    MetaMaskUtils: new MetaMaskUtils()
});

export default store;