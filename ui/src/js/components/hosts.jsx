import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import styles from '../../css/style.css';

import { add, filter, remove, update, fetchHosts } from '../actions/hosts.js';
import { setMode, clearMode } from '../actions/mode.js';
import { validateHost } from '../lib/validator.js';

class _Hosts extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.clearState = { ipaddr: '', hostname: '', os: '' };
        this.state = { ...this.clearState };
        this.handleChange = this.handleChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.addHost = this.addHost.bind(this);
        this.editHost = this.editHost.bind(this);
        this.searchOnKeyPress = this.searchOnKeyPress.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    clearForm() {
        this.setState({ ...this.clearState });
    }

    editHost(host) {
        this.setState(host);
    }

    addHost() {
        if (validateHost(this.state)) {
            this.props.addHost({ ...this.state });
        } else {
            this.props.showErrorMessage('Host addition failed.');
        }
        this.clearForm();
    }

    searchOnKeyPress(e) {
        if (e.keyCode === 13) {
            this.props.searchHosts(this.state);
        }
    }

    render() {
        // ipaddr, hostname, os
        return (
            <div>
                <div className="form">
                    <label>
                        IP Address:
                        <input name="ipaddr"
                            onChange={this.handleChange}
                            disabled={this.props.mode === 'edit'}
                            onKeyUp={this.searchOnKeyPress}
                            type="text" value={this.state.ipaddr} />
                    </label>
                    <label>
                        Host Name:
                        <input name="hostname"
                            onChange={this.handleChange}
                            onKeyUp={this.searchOnKeyPress}
                            type="text" value={this.state.hostname} />
                    </label>
                    <label>
                        Operating System:
                        <input name="os"
                            onChange={this.handleChange}
                            onKeyUp={this.searchOnKeyPress}
                            type="text" value={this.state.os} />
                    </label>
                    <br /><br />
                    <div className={styles.actiongroup}>
                        <button onClick={this.addHost}>Add</button>
                        <button onClick={() => {
                            this.props.updateHost(this.state);
                            this.clearForm();
                        }
                        }>Update</button>
                        <button onClick={() => { this.props.searchHosts(this.state); }}>Search</button>
                        <button onClick={
                            () => {
                                this.clearForm();
                                this.props.switchMode();
                            }
                        }>
                            Clear
                        </button>
                    </div>
                </div>
                <hr />
                <div className="result">
                    <table>
                        <thead>
                            <tr>
                                <th>IP Address</th>
                                <th>Host Name</th>
                                <th>Operating System</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (this.props.hosts) ? (this.props.hosts.map((c) => {
                                    return (
                                        <tr key={c.ipaddr}>
                                            <td>{c.ipaddr}</td>
                                            <td>{c.hostname}</td>
                                            <td>{c.os}</td>
                                            <td>
                                                <button
                                                    onClick={() => {
                                                        this.editHost(c);
                                                        this.props.switchMode('edit');
                                                    }}>
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={
                                                        () => {
                                                            this.props.removeHost(c.ipaddr);
                                                        }
                                                    }>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })) : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { hosts: state.hosts, mode: state.mode };
}

function mapDispatchToProps(dispatch) {
    return ({
        addHost: function (host) {
            dispatch(add(host));
        },
        updateHost: function (host) {
            dispatch(update(host));
        },
        switchMode: function (mode) {
            if (mode) {
                dispatch(setMode(mode));
            } else {
                dispatch(clearMode());
            }
        },
        removeHost: function (ipaddr) {
            dispatch(remove(ipaddr));
        },
        showSuccessMessage: function (text) {
            alert(text);
        },
        showErrorMessage: function (text) {
            alert(text);
        },
        searchHosts: function (host) {
            dispatch(fetchHosts(host));
        }
    });
}

const Hosts = connect(mapStateToProps, mapDispatchToProps)(_Hosts);

export default Hosts;