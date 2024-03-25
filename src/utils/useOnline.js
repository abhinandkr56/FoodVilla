import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {

        // while removing even listners, we neeed to pass exactly the same fn, that is why we
        // are extracting the handleOnline and handleOffline
        var handleOnline = () => {
            setIsOnline(true);
        }
        window.addEventListener("online", handleOnline);

        const handleOffline = () => {
            setIsOnline(false);
        }
        window.addEventListener("offline", handleOffline);

        return() =>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    }, [])
    return isOnline;
}

export default useOnline;