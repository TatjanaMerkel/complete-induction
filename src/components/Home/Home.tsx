import React from "react";
import './Home.css';
import Navbar from "../Navbar/Navbar";
import HomeElement from "./HomeElement";
import { IoSchoolSharp } from 'react-icons/io5';

function Home() {

    return (
        <div>
            <Navbar/>
                <div className="nav-container">

                <div className="menu-buttons">
                    <HomeElement text="Tutorial" icon={require("./../../files/icons/online-learning.png")} bg_color='#BF4C4C'/>
                    <HomeElement text="Aufgaben" icon={require("./../../files/icons/math_icon.png")} bg_color='#4073C3'/>
                    <HomeElement text="Spiel" icon={require("./../../files/icons/online-learning.png")} bg_color='#6FAD6E'/>
                </div>
            </div>
        </div>

    );
}

export default Home;