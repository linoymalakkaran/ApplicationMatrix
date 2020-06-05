const Promise = require("bluebird"),
    express = require('express'),
    router = express.Router(),
    multer = require('multer'),
    {
        addComponent,
        updateComponent,
        deleteComponent,
        getComponents
    } = require('../utils/components')
    ;

let upload = multer();

router.post('/add', upload.array(), (req, res) => {
    res.set('Content-Type', 'application/json');
    let component = JSON.parse(req.body.component);
    addComponent(component)
    .then(() => {
        res.send({status: "ok"});
    })
    .catch((err) => {
        res.send({status: 'error', err});
    });
});

router.post('/update', upload.array(), (req, res) => {
    res.set('Content-Type', 'application/json');
    let component = JSON.parse(req.body.component);
    updateComponent(component)
    .then(() => {
        res.send({status: "ok"});
    })
    .catch((err) => {
        res.send({status: 'error', err});
    });
});

router.get('/delete', (req, res) => {
    res.set('Content-Type', 'application/json');
    deleteComponent(req.query.name)
    .then(() => {
        res.send({status: "ok"});
    })
    .catch((err) => {
        res.send({status: 'error', err});
    });
});

router.post('/', upload.array(), (req, res) => {
    res.set('Content-Type', 'application/json');
    let query = req.body.query;
    getComponents(query)
    .then((data) => {
        res.send({status: "ok", data});
    })
    .catch((err) => {
        res.send({status: 'error', err});
    });
});

module.exports = router;