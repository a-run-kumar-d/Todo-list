import "../styles/common.css"
import "../styles/other.css"
export default function Login() {  
    return (
        <>
            <div className="bgContainer" id="bgSignup"></div>
            <div className="homeContainer" id="loginContainer">
                <div className="loginhead">Create A New Account</div>
                <div className="loginsubhead">Enter your credentials to signup into <br></br> your account</div>
                <div className="loginForm">
                    <input type="text" className="inputBox" id="userName" placeholder="username"/>
                    <input type="text" className="inputBox" id="password" placeholder="password"/>
                    <input type="text" className="inputBox" id="confirmpassword" placeholder="confirm password"/>
                    <button className="loginButton">Signup</button>
                </div>
            </div>
        </>
    )
}