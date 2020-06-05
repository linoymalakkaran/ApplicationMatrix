const Promise = require("bluebird"),
    fileUtils = require('./file-utils')
    ;

function getRecordByName(name) {
    return fileUtils.getRecordByName(name);
}

function getAllRecords() {
    return fileUtils.getAllRecords();
}

module.exports = {
    getRecordByName,
    getAllRecords
}