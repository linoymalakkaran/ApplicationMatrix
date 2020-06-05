import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../../css/style.css';

function Components(props) {
    // name text primary key, layer text, healthurl text, port int, mode text, hosting text
    return (
        <div>
            <div className="form">
                <label>
                    Name: 
                    <input type="text" />
                </label>
                <label>
                    Layer: 
                    <input type="text" />
                </label>
                <label>
                    Port Number: 
                    <input type="text" />
                </label>
                <br/>
                <label>
                    Mode(HA1, HA2): 
                    <input type="text" />
                </label>
                <label>
                    Hosting: 
                    <label><input type="radio" name="hosting" value="internal"/> Internal</label>
                    <label><input type="radio" name="hosting" value="external"/> External</label>
                </label>
                <br/>
                <label>
                    Health URL: 
                    <input type="text" />
                </label>
                <br/>
                <button>Add</button>
                <button>Update</button>
                <button>Search</button>
                <button>Clear</button>
            </div>
            <hr/>
            <div className="result">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Layer</th>
                            <th>Port</th>
                            <th>Mode</th>
                            <th>Hosting</th>
                            <th>Health URL</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (props.components) ? ( props.components.map((c) => {
                                <tr>
                                    <td>{c.name}</td>
                                    <td>{c.layer}</td>
                                    <td>{c.port}</td>
                                    <td>{c.mode}</td>
                                    <td>{c.hosting}</td>
                                    <td>{c.healthurl}</td>
                                    <td><button>Delete</button></td>
                                </tr>                            
                                })) : null
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Components;