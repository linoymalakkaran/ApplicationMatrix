import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import styles from '../../css/style.css';

import { switchView } from '../actions/view.js';

function _Navbar(props) {
    return (
        <ul className={styles['navbar-ul']}>
            <li onClick={ (e) => { props.selectView('matrix'); } }
                className={[styles['navbar-li'], 
                (props.view === 'matrix') ? styles['navbar-li-selected']:''].join(' ')}>Matrix</li>
            <li onClick={ (e) => { props.selectView('components'); } }
                className={[styles['navbar-li'],
                (props.view === 'components') ? styles['navbar-li-selected']:''].join(' ')}>Components</li>
            <li onClick={ (e) => { props.selectView('hosts'); } }
                className={[styles['navbar-li'],
                (props.view === 'hosts') ? styles['navbar-li-selected']:''].join(' ')}>Hosts</li>
            <li onClick={ (e) => { props.selectView('databases'); } }
                className={[styles['navbar-li'],
                (props.view === 'databases') ? styles['navbar-li-selected']:''].join(' ')}>Databases</li>
            <li onClick={ (e) => { props.selectView('containers'); } }
                className={[styles['navbar-li'],
                (props.view === 'containers') ? styles['navbar-li-selected']:''].join(' ')}>Containers</li>
        </ul>
    )
}

function mapStateToProps(state) {
    return { view: state.view };
}

function mapDispatchToProps(dispatch) {
    return ({
        selectView: function(view) {
            dispatch(switchView(view));
        }
    });
}


const Navbar = connect(mapStateToProps, mapDispatchToProps)(_Navbar);

export default Navbar;