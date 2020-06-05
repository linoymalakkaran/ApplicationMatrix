const fs = require('fs-extra'),
    path = require('path'),
    Promise = require("bluebird");


function createDataFile() {
    return (
        new Promise((resolve, reject) => {
            let file = path.resolve(process.env.data);
            fs.writeFile(file, '[]', (err) => {
                if (err) {
                    console.log('Error while creating file', err);
                    reject(err);
                } else {
                    console.log('File initialized properly');
                    resolve();
                }
            });
        })
    );
}

function init() {
    return (
        new Promise((resolve, reject) => {
            let file = path.resolve(process.env.data);
            fs.readFile(file, (err, data) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else if (!data.toString()) {
                    createDataFile()
                        .then(resolve)
                        .catch(reject);
                } else {
                    resolve();
                }
            });
        })
    );
}

function getRecordByName(name) {
    return (
        new Promise((resolve, reject) => {
            let file = path.resolve(process.env.data);
            fs.readFile(file, (err, data) => {
                if (err) {
                    reject(err);
                }
                let records = JSON.parse(data.toString());
                let _records = records.filter((r) => {
                    return (r.name === name);
                });
                resolve(_records.pop());
            });
        })
    );
}

function getAllRecords() {
    return (
        new Promise((resolve, reject) => {
            let file = path.resolve(process.env.data);
            fs.readFile(file, (err, data) => {
                if (err) {
                    reject(err);
                }
                let records = JSON.parse(data.toString());
                resolve(records);
            });
        })
    );
}

function saveData(obj) {
    return (
        new Promise((resolve, reject) => {
            let data = JSON.stringify(obj);
            let file = path.resolve(process.env.data);
            fs.writeFile(file, data, (err) => {
                if (err) {
                    console.log('Error while saving data', err);
                    reject(err);
                } else {
                    console.log(`File saved successfully @ ${new Date()}`);
                    resolve();
                }
            });
        })
    );
}

module.exports = {
    init,
    getRecordByName,
    getAllRecords,
    saveData
}