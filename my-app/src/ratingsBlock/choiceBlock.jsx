import React from 'react';
import styles from "./ratings.module.css";

function ChoiceBlock({value1, value2}) {
    return (
        <div className={styles.choiceBlock}>
            <a href={"#1"} className={styles.switch1}>{value1}</a>
            <a href={"#2"} className={`${styles.switch2} ${styles.subject}`}>{value2}</a>
        </div>
    );
}

export default ChoiceBlock;