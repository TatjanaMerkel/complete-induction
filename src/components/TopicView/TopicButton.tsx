import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import styles from './TopicButton.module.css';
import { useNavigate } from 'react-router';

function darkenColor(color: string){
    switch(color){
        case '#6FAD6E':
            return '#5DA25C';
        case '#4073C3':
            return '#3766AD';
        case '#BF4C4C':
            return '#A83C3C';
        default:
            return "#2e3643";
    }


}

function TopicButton(props: { text: string; icon: string | undefined; id: number;}) {
    const [hover, setHover] = useState(false)
    let navigate = useNavigate();
    const buttonId = props.id;
    return ( 
        <button className={styles.wideButton} style={{backgroundColor: hover ? darkenColor("#343D4B"): "#343D4B"}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={(id) => {navigate("/topics/topicdifficulty/"+buttonId);}}  >
            {props.text}
            <img className={styles.smallIcon} src={props.icon}></img>     
        </button>
    );
}


export default TopicButton;
