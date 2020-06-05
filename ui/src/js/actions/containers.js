import {
    ADD_CONTAINER,
    UPDATE_CONTAINER,
    DELETE_CONTAINER,
    FILTER_CONTAINERS
} from './types.js';

export function add(container) {
    return ({
        type: ADD_CONTAINER,
        container
    });
}

export function update(container) {
    return ({
        type: UPDATE_CONTAINER,
        container
    });
}

export function filter(container) {
    return ({
        type: FILTER_CONTAINERS,
        container
    });
}

export function remove(name) {
    return ({
        type: DELETE_CONTAINER,
        container
    });
}