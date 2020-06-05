const Promise = require("bluebird"),
    {
        executeQuery,
        executeSelectQuery
    } = require('../utils/query-exec');

function addHost(host) {
    /**
     * ipaddr, hostname, os
     */
    let _sql = `INSERT INTO hosts 
        (ipaddr, hostname, os)
        VALUES("${host.ipaddr}", "${host.hostname}",
        "${host.os}")`;
    return executeQuery(_sql);
}

function updateHost(host) {
    let _sql = `UPDATE hosts 
    set hostname="${host.hostname}", 
        os = "${host.os}"
    where ipaddr="${host.ipaddr}"`;
    return executeQuery(_sql);
}

function deleteHost(ipaddr) {
    let _sql = `DELETE FROM hosts 
    where ipaddr="${ipaddr}"`;
    return executeQuery(_sql);
}

function getHosts(query) {
    let _sql = `SELECT * FROM hosts order by ipaddr`;
    if (query) {
        _sql = `SELECT * FROM hosts where ${query} order by ipaddr`;
    }
    return executeSelectQuery(_sql);
}

module.exports = {
    addHost,
    updateHost,
    deleteHost,
    getHosts
};