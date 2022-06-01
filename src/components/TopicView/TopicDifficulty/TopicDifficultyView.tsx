import React, {useState} from "react";
import Navbar from "./../../Navbar/Navbar";
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import TopicDifficultyWindow from "./TopicDifficultyWindow";
import BackBar from "./../../BackButton/BackBar";
import styles from './TopicDifficultyView.module.css';
import { IoCloseOutline } from "react-icons/io5";


function TopicDifficultyView() {
    let navigate = useNavigate();
    const [childData, setState] = useState(false);
    const {id} = useParams();
    const page_id: string = id!;

    function handleCallback(childData: boolean) {
        setState(childData)
    }

    function getTextById(id: number){
        if (id==0){
            return "Summen";
        }
        if (id==1){
            return "Teilbarkeit";
        }
        if (id==2){
            return "Fakultäten";
        }
        if (id==3){
            return "Ungleichung";
        }
        return "";
    }

    function getImgById(id: number){
        var path = "./../../../files/icons/";
        if (id==0){
            console.log(path+"summenzeichen.png")
            return ("summenzeichen.png");
        }
        if (id==1){
            return ("discount.png");
        }
        if (id==2){
            return ("exclamation-mark.png");
        }
        if (id==3){
            return ("not-equal.png");
        }
        return "";
    }
    return (
        <div>
            <Navbar parentCallback ={handleCallback}/>
            <BackBar texts={["Home", "Topics"]}/>
            <div>
                <TopicDifficultyWindow text={getTextById(parseInt(page_id))} icon={require("./../../../files/icons/"+getImgById(parseInt(page_id)))}/>
            </div>
        </div>
    );
}

export default TopicDifficultyView;