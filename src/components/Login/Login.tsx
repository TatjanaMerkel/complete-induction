import React, {useEffect, useState} from "react";
import './Login.css';


function Login(props: { parentCallback: (arg0: boolean) => void; }) {

    const [showLogin, setShowLogin] = useState(true);

    useEffect(() => { setShowLogin(false) }, [])

    function removeLoginForm() {
        props.parentCallback(showLogin);
    }


    return (
        <div>
            <form>
                <h3>Login Here</h3>
                <div className="position">
                    <button className="button-cancel" onClick={removeLoginForm}/>
                </div>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email" id="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password"/>

                <button className="button-login">Log In</button>
                <div className="social">
                    <div className="go">
                        <img src={require('../../assets/google-icon.png')} alt="Google"/> Google
                    </div>
                    <div className="fb">
                        <img src={require('../../assets/facebook-icon.png')} alt="Google"/>Facebook
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
