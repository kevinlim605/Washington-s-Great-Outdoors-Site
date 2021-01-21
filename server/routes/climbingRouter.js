const express = require('express');
const ClimbingLocation = require('../models/climbing');

const climbingRouter = express.Router();

climbingRouter.route('/')
.get((req, res, next) => {
    ClimbingLocation.find()
    .then(climbinginfo => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(climbinginfo);
    })
    .catch(err => next());
})
.post((req, res, next) => {
    ClimbingLocation.create(req.body)
    .then(climbinginfo => {
        console.log('Climbing Document Created ', climbinginfo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(climbinginfo);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /climbing');
})
.delete((req, res, next) => {
    ClimbingLocation.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = climbingRouter;