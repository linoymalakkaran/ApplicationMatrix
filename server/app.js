/**
 * Application interface
 * 1. Save (App/Component profile) (C)
 * 2. Search and View Profile (R)
 * 3. Edit Profile (U)
 * 4. Delete Profile (D)
 * 5. Show complete matrix 
 */

const path = require('path')
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '.env') });
const express = require('express'),
    app = express(),
    Promise = require("bluebird"),
    bodyParser = require('body-parser'),
    //config = require('config'),
    profile_router = require('./routes/profile-router'),
    component_router = require('./routes/components-router'),
    containers_router = require('./routes/containers-router'),
    databases_router = require('./routes/databases-router'),
    hosts_router = require('./routes/hosts-router'),
    { init } = require('./utils/profile/file-utils')
    ;


//dotenv.load({ path: '.env' });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(process.env.context, express.static('public'));
app.use(`${process.env.context}/api/profile`, profile_router);
app.use(`${process.env.context}/api/component`, component_router);
app.use(`${process.env.context}/api/container`, containers_router);
app.use(`${process.env.context}/api/database`, databases_router);
app.use(`${process.env.context}/api/host`, hosts_router);

init()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App running => http://localhost:${process.env.PORT}${process.env.context}`);
        });
    })
    .catch((err) => {
        console.log(err);
    })

