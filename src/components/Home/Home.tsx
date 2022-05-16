import React from "react";
import './Home.css';
import Navbar from "../Navbar/Navbar";
import HomeElement from "./HomeElement";

function Home() {

    return (
        <div>
            <Navbar/>
                <div className="nav-container">

                I'm a Home-Component
                <div className="menu-buttons">
                    <HomeElement text="Tutorial" icon="./../../files/icons/online-learning.png"/>
                    <HomeElement text="Aufgaben" icon=""/>
                    <HomeElement text="Spiel" icon=""/>
                </div>
            </div>
        </div>

    );
}

export default Home;