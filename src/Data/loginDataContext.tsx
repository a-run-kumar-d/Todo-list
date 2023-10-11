import { ReactNode, createContext, useContext, useEffect, useState} from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

type loginDataTypeProvider = {
    children: ReactNode;
}
type loginData = {
    verifyCredentials: (credential : loginDataType[]) => boolean | undefined;
    setCredentials: (credential : loginDataType[]) => void;
}
type loginDataType = {
    name : string;
    password: string;
}

const loginDataContext = createContext({} as loginData);
export function useLoginData(){
    return useContext(loginDataContext);
}
export function LoginDataProvider({children}: loginDataTypeProvider){

    
    const [logData , setLogData] = useLocalStorage<loginDataType[]>("loginData",[]);
    useEffect(()=>{
        console.log(logData);}
    ,[logData])
    function setCredentials(credential : loginDataType[]){
        setLogData(credential);
    }
    function verifyCredentials(credential : loginDataType[]){
        const user = logData.find(user => user.name === credential[0].name);
        if(user?.password === credential[0].password){
            return true;
        }
        else{
            return false;
        }
    }
    return(
        <loginDataContext.Provider value={{setCredentials, verifyCredentials}}>
            {children}
        </loginDataContext.Provider>
    )
}