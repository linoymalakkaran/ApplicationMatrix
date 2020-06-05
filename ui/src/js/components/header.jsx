import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../../css/style.css';

import Navbar from './navbar.jsx';

function Header(props) {
    return (
        <div className={styles.header}>
            <h3 className={styles.appname}>App Matrix</h3>
            <Navbar />
        </div>
    )
}

export default Header;