import AppHeader from "../../components/app-header";
import EmptyPlace from "../../components/EmptyPlace/EmptyPlace";
import Btn from "../../components/button";
import Footer from "../../components/footer";
import WalletId from "../../components/WalletId/WalletId";
import useStore from "../../hooks/useStore/useStore";
import { observer } from "mobx-react-lite"
import ModalHowMuch from "../../ui/ModalHowMuch/ModalHowMuch";
import ListOfPages from "../../components/ListofPages/ListofPages";

const SacrificePage = ({id}) => {

    const { ModalManager } = useStore();

    const onSacrificeClick = () => {
        ModalManager.open();
        ModalManager.setContent(<ModalHowMuch />);

    }

    return (
        <div>
            <ListOfPages/>
            <WalletId id={id}/>
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
            <Btn value={'Sacrifice!'} func={onSacrificeClick} />
            <Footer/>
        </div>
    )
}

export default observer(SacrificePage);