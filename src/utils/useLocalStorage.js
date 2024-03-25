import { useEffect, useState } from "react";

const useLocalStorage = (key, intialState) => {
    
    const readValue = () => {
        const item = window.localStorage.getItem(key);
        if (item != null) {
           return JSON.parse(item);
        }
        return intialState;
    };
    
    const [localStorage, setLocalStorage] = useState(readValue);
    
    useEffect(() => {
        window.localStorage.setItem(key, localStorage)
    }, [key, localStorage])

    return [localStorage, setLocalStorage];
}

export default useLocalStorage;