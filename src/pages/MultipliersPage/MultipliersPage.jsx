import {observer} from "mobx-react-lite";

    import AppHeader from "../../components/app-header";
    import Btn from "../../components/button";
    import Footer from "../../components/footer";
    import WalletId from "../../components/WalletId/WalletId";
import ListOfPages from "../../components/ListofPages/ListofPages";
import {useParams} from "react-router";
import {useEffect} from "react";
import useStore from "../../hooks/useStore/useStore";
import MetaMaskController from "../../utils/MetaMaskController/MetaMaskController";


    const MultipliersPage = () => {

        const { MetaMaskUtils } = useStore();

        const address = MetaMaskUtils.address;
        const balance = MetaMaskUtils.balance;


        async function onChangeAccount ()  {
            await MetaMaskController.changeAccount();

        }
        onChangeAccount();

        const onSacrificeClick = () => {


        }
        // useEffect(() => {
        //     console.log('dataAddress', dataAddress)
        // }, [])
        return (
            <div>
                <ListOfPages/>
                <WalletId id={address}/>
                <AppHeader/>
                <div className={"sacrificeMainInfo"}>
                    <h3>NFT sold</h3>
                    <h3>333/1000</h3>
                </div>
                <div className={"sacrificeMainInfo"}>
                    <h3>Actual multiplier</h3>
                    <h3>6x</h3>
                </div>
                <div className={"sacrificeMainInfo"}>
                    <h3>Actual price</h3>
                    <h3>0.03 ETH</h3>
                </div>
                {/*<div className={"sacrificeMainInfo"}>*/}
                {/*    <p>You`ve purchased all allowed NFTs from this group</p>*/}
                {/*</div>*/}
                <Btn value={'Purchase!'} func={onSacrificeClick} />
                <Footer/>
            </div>
        )

}
export default observer(MultipliersPage);