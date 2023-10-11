import "../styles/common.css"
import "../styles/other.css"
export default function Login() {  
    return (
        <>
            <div className="bgContainer" id="bgLogin"></div>
            <div className="homeContainer" id="loginContainer">
                <div className="loginhead">Welcome to TodoList</div>
                <div className="loginsubhead">Enter your credentials to login to <br></br> your account</div>
                <div className="loginForm">
                    <input type="text" className="inputBox" id="userName" placeholder="username"/>
                    <input type="text" className="inputBox" id="password" placeholder="password"/>
                    <button className="loginButton">Login</button>
                </div>
            </div>
        </>
    )
}