import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import styles from '../../css/style.css';

import Components from './components.jsx';
import Containers from './containers.jsx';
import Hosts from './hosts.jsx';
import Databases from './databases.jsx';
import Matrix from './matrix.jsx';


import { fetchHosts } from '../actions/hosts.js';

class _Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let el = null;
        switch (this.props.view) {
            case 'components': {
                el = <Components />;
                break;
            }
            case 'containers': {
                el = <Containers />;
                break;
            }
            case 'hosts': {
                el = <Hosts />;
                break;
            }
            case 'databases': {
                el = <Databases />;
                break;
            }
            default: {
                el = <Matrix />;
            }
                
        }
        return (
            <div>
                {
                    el
                }
            </div>
        )
    }

    componentDidMount() {
        this.props.getData(this.props.view);
    }
    
}

function mapStateToProps(state) {
    return { view: state.view };
}

function mapDispatchToProps(dispatch) {
    return ({
        getData: function(type) {
            switch(type) {
                case 'hosts' : {
                    dispatch(fetchHosts());
                    break;
                }                    
                default: 
                    console.log('No type passed');
            }
        }
    });
}

const Body = connect(mapStateToProps, mapDispatchToProps)(_Body);

export default Body;