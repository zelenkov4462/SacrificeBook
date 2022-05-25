import {makeAutoObservable} from "mobx"

class UserCredentials {
    address = null
    balance = null

    constructor() {
        makeAutoObservable(this)
    }

    setAddress(value) {
        this.address = value;
    }

    setBalance(value) {
        this.balance = value
    }
}

export default UserCredentials;