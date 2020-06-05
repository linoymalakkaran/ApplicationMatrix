const Promise = require("bluebird"),
    express = require('express'),
    router = express.Router(),
    multer = require('multer'),
    {
        addDatabase,
        updateDatabase,
        deleteDatabase,
        getDatabases
    } = require('../utils/databases');

let upload = multer();

router.post('/add', upload.array(), (req, res) => {
    res.set('Content-Type', 'application/json');
    let database = JSON.parse(req.body.database);
    addDatabase(database)
        .then(() => {
            res.send({
                status: "ok"
            });
        })
        .catch((err) => {
            res.send({
                status: 'error',
                err
            });
        });
});

router.post('/update', upload.array(), (req, res) => {
    res.set('Content-Type', 'application/json');
    let database = JSON.parse(req.body.database);
    updateDatabase(database)
        .then(() => {
            res.send({
                status: "ok"
            });
        })
        .catch((err) => {
            res.send({
                status: 'error',
                err
            });
        });
});

router.get('/delete', (req, res) => {
    res.set('Content-Type', 'application/json');
    deleteDatabase(req.query.name)
        .then(() => {
            res.send({
                status: "ok"
            });
        })
        .catch((err) => {
            res.send({
                status: 'error',
                err
            });
        });
});

router.post('/', upload.array(), (req, res) => {
    res.set('Content-Type', 'application/json');
    let query = req.body.query;
    getDatabases(query)
        .then((data) => {
            res.send({
                status: "ok",
                data
            });
        })
        .catch((err) => {
            res.send({
                status: 'error',
                err
            });
        });
});

module.exports = router;