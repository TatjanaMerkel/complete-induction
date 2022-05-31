import React, {useState} from "react";
import Navbar from "./../../Navbar/Navbar";
import { useNavigate } from 'react-router';
import TopicDifficultyWindow from "./TopicDifficultyWindow";
import BackBar from "./../../BackButton/BackBar";
import styles from './TopicDifficultyView.module.css';


function TopicDifficultyView() {
    let navigate = useNavigate();
    const [childData, setState] = useState(false);


    function handleCallback(childData: boolean) {
        setState(childData)
    }

    return (
        <div>
            <Navbar parentCallback ={handleCallback}/>
            <BackBar texts={["Home", "Topics"]}/>
            <div>
                <TopicDifficultyWindow text={"test"} icon={require("./../../../files/icons/exclamation-mark.png")}/>
            </div>
        </div>
    );
}

export default TopicDifficultyView;