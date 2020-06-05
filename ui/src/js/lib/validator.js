export function validateComponent(component) {
    let isValid = true;
    isValid = (component.name) ? true : false;
    return isValid;
}

export function validateContainer(container) {
    let isValid = true;
    isValid = (container.name) ? true : false;
    return isValid;
}

export function validateDatabase(database) {
    let isValid = true;
    isValid = (database.name) ? true : false;
    return isValid;
}

export function validateHost(host) {
    let isValid = true;
    isValid = (host.ipaddr) ? true : false;
    return isValid;
}