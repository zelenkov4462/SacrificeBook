import {makeAutoObservable} from "mobx"

class MetaMaskUtils {
    address = true;
    balance = true;


    constructor() {
        makeAutoObservable(this)
    }

    toggle() {
        this.address = !this.address;
        this.balance = !this.balance;
    }
}

export default MetaMaskUtils;