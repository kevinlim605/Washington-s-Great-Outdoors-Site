const express = require('express');
const BikingLocation = require('../models/biking');
const cors = require('./cors');

const bikingRouter = express.Router();

bikingRouter
  .route('/')
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    BikingLocation.find()
      .then((bikinginfo) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(bikinginfo);
      })
      .catch((err) => next());
  })
  .post((req, res, next) => {
    BikingLocation.create(req.body)
      .then((bikinginfo) => {
        console.log('Biking Document Created ', bikinginfo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(bikinginfo);
      })
      .catch((err) => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /biking');
  })
  .delete((req, res, next) => {
    BikingLocation.deleteMany()
      .then((response) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
      .catch((err) => next(err));
  });

module.exports = bikingRouter;
