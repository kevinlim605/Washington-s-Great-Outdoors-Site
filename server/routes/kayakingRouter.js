const express = require('express');
const KayakingLocation = require('../models/kayaking');

const kayakingRouter = express.Router();

kayakingRouter.route('/')
.get((req, res, next) => {
    KayakingLocation.find()
    .then(kayakinginfo => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(kayakinginfo);
    })
    .catch(err => next());
})
.post((req, res, next) => {
    KayakingLocation.create(req.body)
    .then(kayakinginfo => {
        console.log('Kayaking Document Created ', kayakinginfo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(kayakinginfo);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /kayaking');
})
.delete((req, res, next) => {
    KayakingLocation.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = kayakingRouter;