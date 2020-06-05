const Promise = require("bluebird"),
    express = require('express'),
    router = express.Router(),
    multer = require('multer'),
    {
        addHost,
        updateHost,
        deleteHost,
        getHosts
    } = require('../utils/hosts');

let upload = multer();

router.post('/add', upload.array(), (req, res) => {
    res.set('Content-Type', 'application/json');
    let host = JSON.parse(req.body.host);
    addHost(host)
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
    let host = JSON.parse(req.body.host);
    updateHost(host)
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
    deleteHost(req.query.ipaddr)
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
    getHosts(query)
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