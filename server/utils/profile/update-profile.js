const Promise = require("bluebird"),
    { 
        getRecordByName, 
        getAllRecords,
        saveData
    } = require('./file-utils')
    ;

function updateProfile(profile) {
    return (
        new Promise((resolve, reject) => {
            getAllRecords()
            .then((records) => {
                let _records = records.filter((r) => {
                    return (r.name !== profile.name);
                });
                return saveData([..._records, profile]);
            })
            .then(resolve)
            .catch(reject);
        })
    );
}

module.exports = updateProfile;