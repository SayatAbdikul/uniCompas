import React from 'react';
import styles from "./navbar.module.css";
import searchImage from "../static/search.png";

function Navbar(props) {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}></div>
            <p className={styles.ranking}>Ranking</p>
            <div className={styles.search}>
                <input className={styles.searchInput} placeholder={"right something mazafaka"}/>
                <button className={styles.searchButton}>
                    <img src={searchImage}/>
                </button>
            </div>
            <a href={"#"} className={styles.signUp}>SIGNUP</a>
            <a href={"#"} className={styles.login}>LOGIN</a>
        </div>
    );
}

export default Navbar;