const Promise = require("bluebird"),
    {
        executeQuery,
        executeSelectQuery
    } = require('../utils/query-exec');

function addContainer(container) {
    /**
     * name, desc
     */
    let _sql = `INSERT INTO containers 
    (name, desc)
    VALUES("${container.name}", "${container.desc}")`;
    return executeQuery(_sql);
}

function updateContainer(container) {
    let _sql = `UPDATE containers 
    set desc="${container.desc}"
    where name="${container.name}"`;
    return executeQuery(_sql);
}

function deleteContainer(name) {
    let _sql = `DELETE FROM containers 
    where name="${name}"`;
    return executeQuery(_sql);
}

function getContainers(query) {
    let _sql = `SELECT * FROM containers where ${query}`;
    return executeSelectQuery(_sql);
}
module.exports = {
    addContainer,
    updateContainer,
    deleteContainer,
    getContainers
};