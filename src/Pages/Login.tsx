import { Link, useNavigate } from "react-router-dom"
import "../styles/common.css"
import "../styles/other.css"
import { useEffect, useState } from "react";
import { useLoginData } from "../Data/loginDataContext";
export default function Login() { 
    type loginDataType = {
        name : string;
        password: string;
    }
    const navigate = useNavigate();
    const [signal, setSignal] = useState(false);
    const {verifyCredentials} = useLoginData();
    const [alert , setAlert] = useState("");
    const [Cred, setCred] = useState<loginDataType[]>([]);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    function handleLoginSubmit(){
        if(userName === "" || password === ""){
            setAlert("Please fill all the fields");
        }
        else{
            const newCred = {
                name: userName,
                password: password
            }
            setSignal(true);
            setCred([newCred]);
        }
    }
    useEffect(()=>{
        if(signal){
            if(verifyCredentials(Cred)){
                navigate("/home");
            }
            else{
                setUserName("");
                setPassword("");
                setAlert("Invalid Credentials");
            }
        }
    },[Cred])
    return (
        <>
            <div className="bgContainer" id="bgLogin"></div>
            <div className="homeContainer" id="loginContainer">
                <div className="loginhead">Welcome to TodoList</div>
                <div className="loginsubhead">Enter your credentials to login to <br></br> your account</div>
                <div className="loginForm">
                <input type="text" className="inputBox" id="userName" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    <input type="text" className="inputBox" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="loginButton" onClick={handleLoginSubmit}>Login</button>
                    <div className="alert">{alert}</div>
                    <div className="loginLink">New to todo list? <Link to="/signup">create an account</Link></div>
                </div>
            </div>
        </>
    )
}