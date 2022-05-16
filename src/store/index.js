import ModalManager from "./ModalManager";
import {createContext} from "react";

const store = createContext({
    ModalManager: new ModalManager()
});

export default store;