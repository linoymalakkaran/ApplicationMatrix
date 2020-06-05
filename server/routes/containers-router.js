const Promise = require("bluebird"),
    express = require('express'),
    router = express.Router(),
    multer = require('multer'),
    {
        addContainer,
        updateContainer,
        deleteContainer,
        getContainers
    } = require('../utils/containers');

let upload = multer();

router.post('/add', upload.array(), (req, res) => {
    res.set('Content-Type', 'application/json');
    let container = JSON.parse(req.body.container);
    addContainer(container)
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
    let container = JSON.parse(req.body.container);
    updateContainer(container)
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
    deleteContainer(req.query.name)
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
    getContainers(query)
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