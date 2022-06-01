import AppHeader from "../../components/app-header";
import EmptyPlace from "../../components/EmptyPlace/EmptyPlace";
import Btn from "../../components/button";
import Footer from "../../components/footer";
import WalletId from "../../components/WalletId/WalletId";
import useStore from "../../hooks/useStore/useStore";
import { observer } from "mobx-react-lite"
import ModalHowMuch from "../../ui/ModalHowMuch/ModalHowMuch";
import ListOfPages from "../../components/ListofPages/ListofPages";
import {useEffect} from 'react';
import MetaMaskController from "../../utils/MetaMaskController/MetaMaskController";
import { useParams } from "react-router-dom";
import useAsyncEffect from "../../hooks/useAsyncEffect/useAsyncEffect";

const SacrificePage = () => {
    const { ModalManager, UserCredentials } = useStore();
    const { dataAddress } = useParams();


    useAsyncEffect(async () => {
        if (dataAddress) {
        const {address, balance} = await MetaMaskController.getAddressAndBalance();
        UserCredentials.setAddress(address);
        UserCredentials.setBalance(balance);
    }
    }, [])


    async function onChangeAccount ()  {
            await MetaMaskController.changeAccount();
        }


    const onSacrificeClick = () => {
        ModalManager.open();
        ModalManager.setContent(<ModalHowMuch />);
    }

    return (
        <div>
            <ListOfPages/>
            <WalletId id={UserCredentials.address}/>
            <AppHeader/>
            <div className={"sacrificeMainInfo"}>
                <h3>Sacrificed right now</h3>
                <h3>1 000 000 ETH</h3>
            </div>
            <div className={"sacrificeMainInfo"}>
                <h3>You sacrificed:</h3>
                <h3> {UserCredentials.balance} ETH</h3>
            </div>
            <EmptyPlace/>
            <Btn value={'Sacrifice!'} func={onSacrificeClick} />
            <Footer/>
        </div>
    )
}

export default observer(SacrificePage);