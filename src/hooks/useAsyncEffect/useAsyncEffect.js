import {useEffect} from "react";

const useAsyncEffect = (callback) => {
    useEffect(() => {
        const runAsyncHandler = async () => {
            await callback()
        }
        runAsyncHandler();
    })
}

export default useAsyncEffect;