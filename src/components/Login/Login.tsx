import React from "react";
import './Login.css';


function Login() {


    return (
        <div>
            <form>
                <h3>Login Here</h3>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password"/>

                <button>Log In</button>
                <div className="social">
                    <div className="go"> Google</div>
                    <div className="fb"> Facebook</div>
                </div>
            </form>
        </div>
    );
}

export default Login;
