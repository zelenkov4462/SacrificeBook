import {makeAutoObservable} from "mobx"

class ModalManager {
    content = null;
    isOpened = false;
    isRulesApproved = false;

    constructor() {
        makeAutoObservable(this)
    }

    open() {
        this.isOpened = true
    }

    close() {
        this.isOpened = false
    }

    setContent(value) {
        this.content = value;
    }

    removeContent() {
        this.content = null
    }

    setRules(value) {
        this.isRulesApproved = value
    }
}

export default ModalManager;