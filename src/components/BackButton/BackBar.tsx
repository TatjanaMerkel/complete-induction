import styles from './BackBar.module.css';
import Back from "./../BackButton/Back";

function BackBar(props: { texts: any; }) {
    const texts = props.texts;
    console.log(texts.length); 
    const listItems = texts.map((text: string, index: number) =>    <Back text={text} key={text} nav={(-1)}/>  );
  return (
      <div className={styles.BackBar}>
        {listItems}
      </div>
  );
}


export default BackBar;