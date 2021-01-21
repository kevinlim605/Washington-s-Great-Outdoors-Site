const express = require('express');
const FishingLocation = require('../models/fishing');

const fishingRouter = express.Router();

fishingRouter.route('/')
.get((req, res, next) => {
    FishingLocation.find()
    .then(fishinginfo => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(fishinginfo);
    })
    .catch(err => next());
})
.post((req, res, next) => {
    FishingLocation.create(req.body)
    .then(fishinginfo => {
        console.log('Fishing Document Created ', fishinginfo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(fishinginfo);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /fishing');
})
.delete((req, res, next) => {
    FishingLocation.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = fishingRouter;