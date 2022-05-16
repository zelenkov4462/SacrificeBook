import AppHeader from "../../components/app-header";
import Btn from "../../components/button";
import Footer from "../../components/footer";
import React from "react";

import './MainPage.css'
import EmptyPlace from "../../components/EmptyPlace/EmptyPlace";

const MainPage = () => {
    return (
        <div>
            <AppHeader/>
            <div className={"sacrificeMainInfo"}>
                <h3>Sacrificed right now</h3>
                <h3>1 000 000 ETH</h3>
            </div>
            <EmptyPlace/>
            <Btn value={'Connect wallet'} />
            <Footer/>
        </div>
    )
}

export default MainPage;

