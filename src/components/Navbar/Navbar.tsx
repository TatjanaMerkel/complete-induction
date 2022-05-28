import './Navbar.css';
import {useState} from "react";


function Navbar(props: { parentCallback: (arg0: boolean) => void; }) {

    const [showLogin, setShowLogin] = useState(false);

    function showLoginForm() {
        useEffect(() => { setShowLogin(true) }, [])
        props.parentCallback(showLogin);
        console.log("button clicked")
        console.log(showLogin)
    }


    return (
        <div className="flex-container">
            <img src={require('../../assets/dominoes.png')} alt="logo"/>
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
