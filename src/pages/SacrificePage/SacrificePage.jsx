import AppHeader from "../../components/app-header";
import EmptyPlace from "../../components/EmptyPlace/EmptyPlace";
import Btn from "../../components/button";
import Footer from "../../components/footer";
import WalletId from "../../components/WalletId/WalletId";
import useStore from "../../hooks/useStore/useStore";
import { observer } from "mobx-react-lite"
import ModalHowMuch from "../../ui/ModalHowMuch/ModalHowMuch";
import ListOfPages from "../../components/ListofPages/ListofPages";
import {useEffect} from "react";
import {useParams} from "react-router";
import MetaMaskUtils from "../../utils/MetaMaskUtils/MetaMaskUtils";

const SacrificePage = () => {
    const { dataAddress } = useParams();

    const { ModalManager } = useStore();

    const { MetaMaskUtils } = useStore();

    const onChangeState = () => {
        MetaMaskUtils.toggle();
        console.log(MetaMaskUtils.address, MetaMaskUtils.balance)
    }

    const onSacrificeClick = () => {
        ModalManager.open();
        ModalManager.setContent(<ModalHowMuch />);
    }

    useEffect(() => {
        console.log('dataAddress', dataAddress)
    }, [])

    return (
        <div>
            <ListOfPages/>
            <WalletId id={dataAddress}/>
            <AppHeader/>
            <div className={"sacrificeMainInfo"}>
                <h3>Sacrificed right now</h3>
                <h3>1 000 000 ETH</h3>
            </div>
            <div className={"sacrificeMainInfo"}>
                <h3>You sacrificed:</h3>
                <h3>1 000 ETH</h3>
            </div>
            <EmptyPlace/>
            <Btn value='change' func={onChangeState}/>
            <Btn value={'Sacrifice!'} func={onSacrificeClick} />
            <Footer/>
        </div>
    )
}

export default observer(SacrificePage);