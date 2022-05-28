import React, {useState} from "react";
import './Home.css';
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";

function Home() {

    const [childData, setState] = useState(false);


    function handleCallback(childData: boolean) {
        setState(childData)
    }

    return (
        <div>
            <Navbar parentCallback ={handleCallback}/>
            <div className="nav-container">


                {childData && <Login parentCallback ={handleCallback}/>}
            </div>
        </div>

    );
}

export default Home;
