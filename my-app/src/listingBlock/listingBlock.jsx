import React from 'react';
import styles from './listing.module.css'
import University from "./university";
function ListingBlock(props) {
    return (
        <div className={styles.listing}>
            <div className={styles.titleBlock}>
                <p>Rank</p>
                <p>University</p>
                <p>Overall score</p>
            </div>
            <University name={"MIT"} place={1} score={100} />
            <University name={"MIT"} place={1} score={100} />
            <University name={"MIT"} place={1} score={100} />
            <University name={"MIT"} place={1} score={100} />
            <University name={"MIT"} place={1} score={100} />
            <University name={"MIT"} place={1} score={100} />
        </div>
    );
}

export default ListingBlock;