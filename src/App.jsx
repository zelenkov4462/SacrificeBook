import React from 'react';
import RouteManager from "./router";
import useStore from "./hooks/useStore/useStore";
import Modal from "./components/Modal/Modal";
import {observer} from "mobx-react-lite";

const App = () => {
    const {ModalManager} = useStore();


    return (
        <>
            <RouteManager/>
            <Modal />
        </>
    )
}

export default observer(App);