const express = require('express');
const Directory = require('../models/directory');

const directoryRouter = express.Router();

directoryRouter.route('/')
.get((req, res, next) => {
    Directory.find()
    .then(directoryinfo => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(directoryinfo);
    })
    .catch(err => next());
})
.post((req, res, next) => {
    Directory.create(req.body)
    .then(directoryinfo => {
        console.log('Directory Document Created ', directoryinfo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(directoryinfo);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /directory');
})
.delete((req, res, next) => {
    Directory.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = directoryRouter;