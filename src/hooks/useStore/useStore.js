import store from "../../store";
import {useContext} from "react";

const useStore = () => useContext(store);

export default useStore;