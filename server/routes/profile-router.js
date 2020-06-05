const path = require('path'),
    Promise = require("bluebird"),
    express = require('express'),
    router = express.Router(),
    multer = require('multer'),
    //config = require('config'),
    createProfile = require('../utils/profile/create-profile'),
    deleteProfile = require('../utils/profile/delete-profile'),
    {
        getRecordByName,
        getAllRecords
    } = require('../utils/profile/search-profile'),
    updateProfile = require('../utils/profile/update-profile')
    ;

let upload = multer();

router.post('/create', upload.array(), (req, res) => {
    res.set('Content-Type', 'application/json');
    createProfile(JSON.parse(req.body.profile))
        .then(() => {
            res.send({ status: "ok" });
        })
        .catch((err) => {
            res.send({ status: 'error', err });
        });
});

router.get('/search', (req, res) => {
    res.set('Content-Type', 'application/json');
    getRecordByName(req.query.name)
        .then((profile) => {
            res.send({ status: "ok", data: profile });
        })
        .catch((err) => {
            res.send({ status: 'error', err });
        });
});

router.post('/update', upload.array(), (req, res) => {
    res.set('Content-Type', 'application/json');
    updateProfile(JSON.parse(req.body.profile))
        .then(() => {
            res.send({ status: "ok" });
        })
        .catch((err) => {
            res.send({ status: 'error', err });
        });
});

router.get('/matrix', (req, res) => {
    res.set('Content-Type', 'application/json');
    getAllRecords()
        .then((profile) => {
            res.send({ status: "ok", data: profile });
        })
        .catch((err) => {
            res.send({ status: 'error', err });
        });
});

router.post('/delete', upload.array(), (req, res) => {
    res.set('Content-Type', 'application/json');
    deleteProfile(req.body.names)
        .then(() => {
            res.send({ status: "ok" });
        })
        .catch((err) => {
            res.send({ status: 'error', err });
        });
});



module.exports = router;