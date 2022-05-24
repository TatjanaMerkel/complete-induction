import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoSchoolSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import TopicButton from "./TopicButton";
import BackBar from "./../BackButton/BackBar";
import styles from './TopicView.module.css';


function TopicView() {
    let navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <BackBar texts={["Home"]}/>
                <div className={styles.menu_buttons}>
                    <TopicButton text="Summen" icon={require("./../../files/icons/summenzeichen.png")} />
                    <br/>
                    <TopicButton text="Teilbarkeit" icon={require("./../../files/icons/discount.png")} />
                    <br/><TopicButton text="Fakultäten" icon={require("./../../files/icons/exclamation-mark.png")} />
                    <TopicButton text="Ungleichung" icon={require("./../../files/icons/not-equal.png")} />
    
                </div>
        </div>
    );
}

export default TopicView;