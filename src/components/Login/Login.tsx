import React, {useEffect, useState} from "react";
import axios from 'axios';
import './Login.css';


function Login(props: { parentCallback: (arg0: boolean) => void; }) {

    const [showLogin, setShowLogin] = useState(true);

    useEffect(() => { setShowLogin(false) }, [])

    function removeLoginForm() {
        props.parentCallback(showLogin);
    }

    const [input, setInput] = useState({
        username:'',
        password: ''
})

function handleChange(event:any){
    const {name, value} = event.target;

    setInput(prevInput =>{
        return{
            ...prevInput,
            [name]:value
        }
    })
}

function handleClick(event:any){
    event.preventDefault();
    console.log(input);
    const newNote = {
        username: input.username,
        password: input.password
    }
    axios.post('http://localhost:4001/app/signup', newNote)
}

return (
    <div>
        <form>
            <h3>Login Here</h3>
            <div className="position">
                <button className="button-cancel" onClick={removeLoginForm}/>
            </div>
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} name="username" value={input.username} type="text" placeholder="Email" id="username"/>
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} name="password" value={input.password} type="password" placeholder="Password" id="password"/>

            <button onClick={handleClick} className="button-login">Log In</button>
            <div className="social">
                <div className="flex-container icon">
                    <img src={require('../../assets/google-icon.png')} alt="Google"/>Google
                </div>
                <div className="fb flex-container icon">
                    <img src={require('../../assets/facebook-icon.png')} alt="Google"/>Facebook
                </div>
            </div>
        </form>
    </div>
);
}

export default Login;