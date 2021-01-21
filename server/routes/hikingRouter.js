const express = require('express');
const HikingLocation = require('../models/hiking');

const hikingRouter = express.Router();

hikingRouter.route('/')
.get((req, res, next) => {
    HikingLocation.find()
    .then(hikinginfo => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(hikinginfo);
    })
    .catch(err => next());
})
.post((req, res, next) => {
    HikingLocation.create(req.body)
    .then(hikinginfo => {
        console.log('Hiking Document Created ', hikinginfo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(hikinginfo);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /hiking');
})
.delete((req, res, next) => {
    HikingLocation.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = hikingRouter;