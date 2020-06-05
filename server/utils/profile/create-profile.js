const Promise = require("bluebird"),
    { 
        getRecordByName, 
        getAllRecords,
        saveData
    } = require('./file-utils')
    ;

function createProfile(data) {
    return (
        new Promise((resolve, reject) => {
            getRecordByName(data.name)
            .then((r) => {
                if (r) {
                    reject('Record already exists');
                } else {
                    return getAllRecords();
                }
            })
            .then((records) => {
                return saveData([...records, data]);
            })
            .then(resolve)
            .catch((err) => {
                console.log('Error occured while creating profile');
                reject(err);
            });
        })
    );    
}

module.exports = createProfile;
