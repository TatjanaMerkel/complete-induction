import { useNavigate } from "react-router-dom";
import styles from './Back.module.css';
import {useState } from "react";


function lightenColor(color: string){
          return "#2e3643";
}

function Back(props: { text: string; nav: number;}) {
  const [hover, setHover] = useState(false)
  let navigate = useNavigate();
  let ind = props.nav;

  return (
      <button className={styles.backButton} onClick={(p) => navigate(ind)} style={{backgroundColor: hover ? lightenColor("#222831"): "#222831"}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          {'<     '}{props.text}      
      </button>
  );
}


export default Back;