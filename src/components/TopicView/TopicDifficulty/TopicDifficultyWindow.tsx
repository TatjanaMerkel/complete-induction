import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import styles from './TopicDifficultyWindow.module.css';
import Select from 'react-select'




function TopicDifficultyWindow(props: { text: string; icon: string | undefined;}) {
    const [hover, setHover] = useState(false)
    const options = [
        { value: 'easy', label: 'Einfach' },
        { value: 'medium', label: 'Mittel' },
        { value: 'hard', label: 'Schwer' }
      ]

    return (
        <div className={styles.frame}>
            <div className={styles.toppart}>
                <p className={styles.whiteTextField}>LEKTION</p>
                <Select className={styles.select} options={options} />
            </div>
            <br/>
            <p>Induktionsbeweis: {props.text}</p>
            <img className={styles.bigIcon} src={props.icon}></img>
            <p>Löse jetzt X Aufgaben!</p>
            <button className={styles.wideButton} style={{backgroundColor: hover ? "#343D4B": "#CF4545"}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                Los geht's
            </button>
        </div>
    );
}


export default TopicDifficultyWindow;
