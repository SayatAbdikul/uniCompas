import React from 'react';
import styles from './listing.module.css'
import uniLogo from '../static/mit.png'
function University({place, name, score}) {
    return (
        <div className={styles.university}>
            <p>{place}</p>
            <p>{name}</p>
            <img alt={"uniLogo"} src={uniLogo} className={styles.logo}/>
            <p>{score}</p>
        </div>
    );
}

export default University;