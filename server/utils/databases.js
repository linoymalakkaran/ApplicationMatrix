const Promise = require("bluebird"),
    {
        executeQuery,
        executeSelectQuery
    } = require('../utils/query-exec');

function addDatabase(database) {
    /**
     * name, user, password, type, schema, ipaddr, port, hostname, desc
     */
    let _sql = `INSERT INTO databases 
        (name, user, password, type, schema, ipaddr, port, hostname, desc)
        VALUES("${database.name}", "${database.user}",
        "${database.password}", "${database.type}", 
        ${database.schema}, "${database.ipaddr}", "${database.port},
        ${database.hostname}, "${database.desc}")`;
    return executeQuery(_sql);
}

function updateDatabase(database) {
    let _sql = `UPDATE databases 
    set user="${database.user}", 
        password = "${database.password}",
        type = "${database.type}",
        schema = ${database.schema},
        ipaddr = "${database.ipaddr}", 
        port = ${database.port}, 
        hostname = "${database.hostname}", 
        desc = "${database.desc}"
    where name="${database.name}"`;
    return executeQuery(_sql);
}

function deleteDatabase(name) {
    let _sql = `DELETE FROM databases 
    where name="${name}"`;
    return executeQuery(_sql);
}

function getDatabases(query) {
    let _sql = `SELECT * FROM databases where ${query}`;
    return executeSelectQuery(_sql);
}

module.exports = {
    addDatabase,
    updateDatabase,
    deleteDatabase,
    getDatabases
};