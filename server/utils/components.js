const Promise = require("bluebird"),
    { executeQuery, executeSelectQuery } = require('../utils/query-exec')
    ;

function addComponent(component) {
    /**
    * name, layer, healthurl, port , mode , hosting 
    */
    let _sql = `INSERT INTO components 
        (name, layer, healthurl, container, port, mode, hosting)
        VALUES("${component.name}", "${component.layer}",
        "${component.healthurl}", ${component.port}, "${component.mode}", 
        "${component.hosting}")`;
    return executeQuery(_sql);
}

function updateComponent(component) {
    let _sql = `UPDATE components 
        set layer="${component.layer}", 
            healthurl = "${component.healthurl}",
            port = ${component.port},
            mode = "${component.mode}", 
            hosting = "${component.hosting}"
        where name="${component.name}"`;
    return executeQuery(_sql);
}

function deleteComponent(name) {
    let _sql = `DELETE FROM components 
        where name="${name}"`;
    return executeQuery(_sql);
}

function getComponents(query) {
    let _sql = `SELECT * FROM components where ${query}`;
    return executeSelectQuery(_sql);
}

module.exports = {
    addComponent,
    updateComponent,
    deleteComponent,
    getComponents
};