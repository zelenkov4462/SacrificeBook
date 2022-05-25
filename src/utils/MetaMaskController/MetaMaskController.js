import {ethers} from "ethers";

class MetaMaskController {
    address = '';
    balance = null;

    static async getAddressAndBalance() {
        if (window.ethereum) {
            const address = await window.ethereum
                .request({method: "eth_requestAccounts"})
            this.address = address[0];
        } else {
            alert("install metamask extension!!");
        }
        const balance = await window.ethereum
            .request({
                method: "eth_getBalance",
                params: [this.address, "latest"]
            })
        this.balance = ethers.utils.formatEther(balance)
        return {address: this.address, balance: this.balance};
    };

    static changeAccount() {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                this.address = accounts[0];
            });

            window.ethereum
                .request({
                    method: "eth_getBalance",
                    params: [this.address, "latest"]
                })
                .then((balance) => {
                    // Setting balance
                    this.balance = ethers.utils.formatEther(balance)
                });
        }

        return {address: this.address, balance: this.balance}
    }
}

export default MetaMaskController;