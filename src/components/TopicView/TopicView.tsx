import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoSchoolSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import TopicButton from "./TopicButton";
import styles from './TopicView.module.css';


function TopicView() {
    let navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className="nav-container">
                <div className={styles.menu_buttons}>
                    <TopicButton text="Summen" icon={require("./../../files/icons/online-learning.png")} />
                    <br/>
                    <TopicButton text="Teilbarkeit" icon={require("./../../files/icons/math_icon.png")} />
                    <br/><TopicButton text="Fakultäten" icon={require("./../../files/icons/online-learning.png")} />
                </div>
            </div>
        </div>
    );
}

export default TopicView;