import { useEffect, useState } from "react";
import "../styles/common.css"
import "../styles/other.css"
import { useLoginData } from "../Data/loginDataContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {  
    type loginDataType = {
        name : string;
        password: string;
    }
    const navigate = useNavigate();
    const [signal, setSignal] = useState(false);
    const {setCredentials} = useLoginData();
    const [alert , setAlert] = useState("");
    const [Cred, setCred] = useState<loginDataType[]>([]);
    const [userName, setUserName] = useState("");
    const [temp,setTemp] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(){
        if(userName === "" || temp === "" || password === ""){
            setAlert("Please fill all the fields");
        }
        else if(temp !== password){
            setAlert("Password doesn't match");
        }
        else{
            const newCred = {
                name: userName,
                password: password
            }
            setSignal(true);
            setCred([...Cred, newCred]);
        }
        setUserName("");
        setPassword("");
        setTemp("");
        
    }
    useEffect(()=>{
        setCredentials(Cred);
        if(signal){
            navigate("/home");
        }
    },[Cred])
    return (
        <>
            <div className="bgContainer" id="bgSignup"></div>
            <div className="homeContainer" id="loginContainer">
                <div className="loginhead">Create A New Account</div>
                <div className="loginsubhead">Enter your Cred to signup into <br></br> your account</div>
                <div className="loginForm">
                    <input type="text" className="inputBox" id="userName" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    <input type="text" className="inputBox" id="password" placeholder="password" value={temp} onChange={(e) => setTemp(e.target.value)}/>
                    <input type="text" className="inputBox" id="confirmpassword" placeholder="confirm password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="loginButton" onClick={handleSubmit}>Signup</button>
                    <div className="alert">{alert}</div>
                    <div className="loginLink">Already have an account? <Link to="/">Login</Link></div>
                </div>
            </div>
        </>
    )
}