import React from 'react';
import styles from './ratings.module.css'
import ChoiceBlock from "./choiceBlock";
function RatingsBlock(props) {
    return (
        <div className={styles.ratingsBlock}>
            <ChoiceBlock value1="QS" value2="THE" />
            <ChoiceBlock value1="General" value2="Subject" />
        </div>
    );
}

export default RatingsBlock;