const Promise = require("bluebird"),
    { 
        getRecordByName, 
        getAllRecords,
        saveData
    } = require('./file-utils')
    ;

function deleteProfile(names) {
    return (
        new Promise((resolve, reject) => {
            getAllRecords()
            .then((records) => {
                let _records = records.filter((r) => {
                    return (names.indexOf(r.name) === -1);
                });
                return saveData(_records);
            })
            .then(resolve)
            .catch(reject);
        })
    );
}

module.exports = deleteProfile;