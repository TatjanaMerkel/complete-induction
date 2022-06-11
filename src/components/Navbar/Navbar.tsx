import './Navbar.css';
import {useEffect, useState} from "react";


function Navbar(props: { parentCallback: (arg0: boolean) => void; }) {

    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => { setShowLogin(true) }, [])

    function showLoginForm() {
        props.parentCallback(showLogin);
    }


    return (
        <div className="flex-container">
            <img className="icon" src={require('../../assets/icons/dominoes.png')} alt="logo"/>
            <div className="title">
                Vollständige Induktion
            </div>
            <div className="position">
                <button className="button-navbar" onClick={showLoginForm}>Login</button>
            </div>

        </div>
    );
}

export default Navbar;
