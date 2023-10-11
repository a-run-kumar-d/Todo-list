import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (()=> T)){
    const[data, setData] = useState<T>(() => {
        const valueInLocalStorage = localStorage.getItem(key);
        if(valueInLocalStorage){
            return JSON.parse(valueInLocalStorage);
        }
        if(typeof initialValue === "function"){
            return (initialValue as ()=>T)();
        }
        else{
            return initialValue;
        }
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    },[key, data]);

    return [data, setData] as [T, typeof setData];
}