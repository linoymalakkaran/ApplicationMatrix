import {
    ADD_COMPONENT,
    UPDATE_COMPONENT,
    DELETE_COMPONENT,
    FILTER_COMPONENTS
} from './types.js';

export function add(component) {
    return ({
        type: ADD_COMPONENT,
        component
    });
}

export function update(component) {
    return ({
        type: UPDATE_COMPONENT,
        component
    });
}

export function filter(component) {
    return ({
        type: FILTER_COMPONENTS,
        component
    });
}

export function remove(name) {
    return ({
        type: DELETE_COMPONENT,
        component
    });
}