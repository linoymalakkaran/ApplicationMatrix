import {
    ADD_DATABASE,
    UPDATE_DATABASE,
    DELETE_DATABASE,
    FILTER_DATABASES
} from './types.js';

export function add(database) {
    return ({
        type: ADD_DATABASE,
        database
    });
}

export function update(database) {
    return ({
        type: UPDATE_DATABASE,
        database
    });
}

export function filter(database) {
    return ({
        type: FILTER_DATABASES,
        database
    });
}

export function remove(name) {
    return ({
        type: DELETE_DATABASE,
        database
    });
}