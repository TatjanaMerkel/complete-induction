import React from "react";
import './Home.css';
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";

function Home() {

    return (
        <div>
            <Navbar/>
            <div className="nav-container">

                I'm a Home-Component
                <Login/>
            </div>
        </div>

    );
}

export default Home;
