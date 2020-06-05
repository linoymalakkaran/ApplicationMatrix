import fetch from 'isomorphic-fetch';

import {
    FETCH_HOSTS
} from './types.js';

import { buildHostsQuery } from '../lib/query.builder.js';

export function add(host) {
    return function(dispatch) {
        let form = new FormData();
        form.append("host", JSON.stringify(host));
        fetch(`${REST_URL_BASE}/host/add`, {
            method: 'POST',
            body: form
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            if (json.status && json.status.toLowerCase() === 'ok') {
                dispatch(fetchHosts());
            } else {
                console.log(json);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export function update(host) {
    return function(dispatch) {
        let form = new FormData();
        form.append("host", JSON.stringify(host));
        fetch(`${REST_URL_BASE}/host/update`, {
            method: 'POST',
            body: form
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            if (json.status && json.status.toLowerCase() === 'ok') {
                dispatch(fetchHosts());
            } else {
                console.log(json);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export function receiveHosts(hosts) {
    return ({
        type: FETCH_HOSTS,
        hosts
    });
}

export function fetchHosts(host) {
    return function(dispatch) {
        let _query = buildHostsQuery(host);
        let form = new FormData();
        form.append("query", _query);
        fetch(`${REST_URL_BASE}/host`, {
            method: 'POST',
            body: form
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            if (json.status && json.status.toLowerCase() === 'ok') {
                dispatch(receiveHosts(json.data));
            } else {
                console.log(json);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export function remove(ipaddr) {
    return function(dispatch) {
        fetch(`${REST_URL_BASE}/host/delete?ipaddr=${ipaddr}`, {
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            if (json.status && json.status.toLowerCase() === 'ok') {
                dispatch(fetchHosts());
            } else {
                console.log(json);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
}