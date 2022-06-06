import React from "react";

import TopicButton from "./TopicButton";
import BackBar from "./../BackButton/BackBar";
import styles from './TopicView.module.css';


function TopicView() {

    return (
        <div>

            <BackBar texts={["Home"]}/>
                <div className={styles.menu_buttons}>
                    <TopicButton id={0} text="Summen" icon={require("./../../files/icons/summenzeichen.png")} />
                    <br/>
                    <TopicButton id={1} text="Teilbarkeit" icon={require("./../../files/icons/discount.png")} />
                    <br/>
                    <TopicButton id={2} text="Fakultäten" icon={require("./../../files/icons/exclamation-mark.png")} />
                    <br/>
                    <TopicButton id={3} text="Ungleichung" icon={require("./../../files/icons/not-equal.png")} />
    
                </div>
        </div>
    );
}

export default TopicView;
