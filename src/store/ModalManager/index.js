import {makeAutoObservable} from "mobx"

class ModalManager {
    content = null;
    isOpened = false;

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
}

export default ModalManager;