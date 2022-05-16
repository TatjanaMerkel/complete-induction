import { ReactChild, ReactFragment, ReactPortal } from "react";
import styles from './HomeElement.module.css';

function HomeElement(props: { text: string | undefined; icon: string | undefined; }) {
    return (
        
        <button className={styles.homeButton}>{props.text}
            <img className={styles.homeIcon} src={props.icon}></img>
        </button>
    );
}

export default HomeElement;
