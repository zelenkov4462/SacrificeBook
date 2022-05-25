import ModalManager from "./ModalManager";
import {createContext} from "react";
import MetaMaskController from "../utils/MetaMaskController/MetaMaskController";
import UserCredentials from "./UserCredentials";


const store = createContext({
    ModalManager: new ModalManager(),
    MetaMaskUtils: new MetaMaskController(),
    UserCredentials: new UserCredentials()
});

export default store;