import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import styles from './HomeElement.module.css';
import { IoSchoolSharp } from 'react-icons/io5';


function darkenColor(color: string){
    switch(color){
        case '#6FAD6E':
            return '#5DA25C';
        case '#4073C3':
            return '#3766AD';
        case '#BF4C4C':
            return '#A83C3C';
        default:
            return "#404040";
    }


}

function HomeElement(props: { text: string; icon: string | undefined; bg_color: string;}) {
    const [hover, setHover] = useState(false)
    
    return (
        <button className={styles.homeButton} id={props.bg_color} style={{backgroundColor: hover ? darkenColor(props.bg_color): props.bg_color}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img className={styles.homeIcon} src={props.icon}></img>
            <br/> 
            {props.text}
        </button>
    );
}


export default HomeElement;
